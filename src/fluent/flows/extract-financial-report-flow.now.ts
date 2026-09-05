import { Flow, wfa, trigger } from '@servicenow/sdk/automation'
import { submitFinancialExtraction } from '../actions/submit-financial-extraction.now'
import { pollAndApplyFinancialExtraction } from '../actions/poll-and-apply-financial-extraction.now'

export default Flow(
    {
        $id: Now.ID['extract-financial-report-flow'],
        name: 'Extract Financial Report via DocIntel',
        description: 'When a document is attached to a Contractor Registration record, submits it to DocIntel GenAI and polls until extraction completes, writing the fin_* fields back onto the record.',
        runAs: 'system',
    },
    // Triggers on the attachment, not the registration record. A record-created
    // trigger fires before the user has uploaded anything -- measured on this
    // instance, DocIntel ran 7s before the attachment landed and reported
    // "No attachments found". The attachment row is the event that actually
    // means "there is now a document to extract".
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['extract-financial-report-trigger'] },
        {
            table: 'sys_attachment',
            condition: 'table_name=x_bca_reg_contractor_reg',
            run_flow_in: 'background',
        }
    ),
    (params) => {
        // Pass the attachment; the action resolves the registration record from
        // it and returns that sys_id for the poll step to write back to.
        const submitResult = wfa.action(
            submitFinancialExtraction,
            { $id: Now.ID['submit-extraction-step'] },
            { attachmentId: wfa.dataPill(params.trigger.current.sys_id, 'string') }
        )

        wfa.flowLogic.doTheFollowing(
            { $id: Now.ID['poll-loop'], label: 'Poll until extraction completes' },
            () => {
                wfa.flowLogic.waitForADuration({
                    $id: Now.ID['poll-wait'],
                    durationType: 'explicit_duration',
                    duration: Duration({ seconds: 15 }),
                })

                const pollResult = wfa.action(
                    pollAndApplyFinancialExtraction,
                    { $id: Now.ID['poll-step'] },
                    {
                        recordId: wfa.dataPill(submitResult.recordId, 'string'),
                        taskId: wfa.dataPill(submitResult.taskId, 'string'),
                    }
                )

                wfa.flowLogic.until(`${wfa.dataPill(pollResult.done, 'boolean')}=true`)
            }
        )
    }
)
