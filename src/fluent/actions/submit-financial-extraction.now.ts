import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const submitFinancialExtraction = Action(
    {
        $id: Now.ID['submit-financial-extraction'],
        name: 'Submit Financial Extraction',
        description: 'Given the sys_id of a newly attached document, resolves its Contractor Registration record, submits it to DocIntel GenAI (extractFields) and returns the sys_di_task sys_id.',
        inputs: {
            attachmentId: StringColumn({ label: 'sys_attachment sys_id', mandatory: true }),
        },
        outputs: {
            taskId: StringColumn({ label: 'DocIntel task sys_id' }),
            recordId: StringColumn({ label: 'Resolved Contractor Registration sys_id' }),
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
                    attachmentId: { label: 'Attachment sys_id', value: wfa.dataPill(params.inputs.attachmentId, 'string') },
                },
                outputVariables: {
                    taskId: StringColumn({ label: 'Task ID' }),
                    recordId: StringColumn({ label: 'Record sys_id' }),
                },
            }
        )

        wfa.assignActionOutputs(params.outputs, {
            taskId: wfa.dataPill(step.taskId, 'string'),
            recordId: wfa.dataPill(step.recordId, 'string'),
        })
    }
)
