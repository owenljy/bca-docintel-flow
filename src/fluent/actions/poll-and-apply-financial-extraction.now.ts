import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const pollAndApplyFinancialExtraction = Action(
    {
        $id: Now.ID['poll-and-apply-financial-extraction'],
        name: 'Poll And Apply Financial Extraction',
        description: 'Checks a DocIntel GenAI extraction task; once COMPLETE, parses the result and writes the fin_* fields back onto the Contractor Registration record.',
        inputs: {
            recordId: StringColumn({ label: 'Contractor Registration record sys_id', mandatory: true }),
            taskId: StringColumn({ label: 'DocIntel task sys_id', mandatory: true }),
        },
        outputs: {
            done: BooleanColumn({ label: 'Done (stop polling)' }),
        },
    },
    (params) => {
        const step = wfa.actionStep(
            actionStep.script,
            { $id: Now.ID['poll-and-apply-financial-extraction-script'], label: 'Poll and apply extraction result' },
            {
                required_run_time: 'instance',
                script: Now.include('../../server/actions/poll-and-apply-financial-extraction.js'),
                inputVariables: {
                    recordId: { label: 'Record sys_id', value: wfa.dataPill(params.inputs.recordId, 'string') },
                    taskId: { label: 'Task sys_id', value: wfa.dataPill(params.inputs.taskId, 'string') },
                },
                outputVariables: {
                    done: BooleanColumn({ label: 'Done' }),
                },
            }
        )

        wfa.assignActionOutputs(params.outputs, {
            done: wfa.dataPill(step.done, 'boolean'),
        })
    }
)
