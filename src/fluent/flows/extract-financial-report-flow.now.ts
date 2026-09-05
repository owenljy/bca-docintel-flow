import { Flow, wfa, trigger } from '@servicenow/sdk/automation'
import { submitFinancialExtraction } from '../actions/submit-financial-extraction.now'
import { pollAndApplyFinancialExtraction } from '../actions/poll-and-apply-financial-extraction.now'

export default Flow(
    {
        $id: Now.ID['extract-financial-report-flow'],
        name: 'Extract Financial Report via DocIntel',
        description: 'On a new Contractor Registration record, submits the attached financial report to DocIntel GenAI and polls until extraction completes, writing the fin_* fields back onto the record.',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['extract-financial-report-trigger'] },
        {
            table: 'x_bca_reg_contractor_reg',
            condition: 'financial_report_extracted=false',
            run_flow_in: 'background',
        }
    ),
    (params) => {
        const submitResult = wfa.action(
            submitFinancialExtraction,
            { $id: Now.ID['submit-extraction-step'] },
            { recordId: wfa.dataPill(params.trigger.current.sys_id, 'string') }
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
                        recordId: wfa.dataPill(params.trigger.current.sys_id, 'string'),
                        taskId: wfa.dataPill(submitResult.taskId, 'string'),
                    }
                )

                wfa.flowLogic.until(`${wfa.dataPill(pollResult.done, 'boolean')}=true`)
            }
        )
    }
)
