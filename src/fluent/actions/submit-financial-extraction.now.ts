import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const submitFinancialExtraction = Action(
    {
        $id: Now.ID['submit-financial-extraction'],
        name: 'Submit Financial Extraction',
        description: 'Submits the attached financial report document(s) on a Contractor Registration record to DocIntel GenAI (extractFields) and returns the sys_di_task sys_id.',
        inputs: {
            recordId: StringColumn({ label: 'Contractor Registration record sys_id', mandatory: true }),
        },
        outputs: {
            taskId: StringColumn({ label: 'DocIntel task sys_id' }),
        },
    },
    (params) => {
        const step = wfa.actionStep(
            actionStep.script,
            { $id: Now.ID['submit-financial-extraction-script'], label: 'Submit extractFields' },
            {
                required_run_time: 'instance',
                script: Now.include('../../server/actions/submit-financial-extraction.js'),
                inputVariables: {
                    recordId: { label: 'Record sys_id', value: wfa.dataPill(params.inputs.recordId, 'string') },
                },
                outputVariables: {
                    taskId: StringColumn({ label: 'Task ID' }),
                },
            }
        )

        wfa.assignActionOutputs(params.outputs, {
            taskId: wfa.dataPill(step.taskId, 'string'),
        })
    }
)
