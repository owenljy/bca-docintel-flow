(function execute(inputs, outputs) {
    // The flow triggers on the attachment, so resolve its host record here --
    // sys_attachment.table_sys_id is typed string | number upstream, which a
    // StringColumn action input will not accept.
    var att = new GlideRecord('sys_attachment');
    if (!att.get(inputs.attachmentId)) {
        gs.error('[SubmitFinancialExtraction] Attachment not found: ' + inputs.attachmentId);
        return;
    }
    var recordId = att.getValue('table_sys_id');
    outputs.recordId = recordId;

    // The already-extracted guard that used to live in the trigger condition
    // happens here -- otherwise a second upload re-extracts and overwrites.
    var reg = new GlideRecord('x_bca_reg_contractor_reg');
    if (!reg.get(recordId)) {
        gs.error('[SubmitFinancialExtraction] Record not found: ' + recordId);
        return;
    }
    if (reg.getValue('financial_report_extracted') === 'true') {
        gs.info('[SubmitFinancialExtraction] Skipping ' + recordId + ' -- already extracted');
        return;
    }

    var api = new sn_docintel_gen_ai.DocIntelGenAIAPI();

    var taskId = api.extractFields({
        sourceTable: 'x_bca_reg_contractor_reg',
        sourceRecord: recordId,
        schema: {
            keys: [
                { name: 'fin_entity_name', description: 'Entity name shown on the financial report', type: 'string' },
                { name: 'fin_uen', description: 'Unique Entity Number (UEN) shown on the financial report', type: 'string' },
                { name: 'fin_year_end', description: 'Financial year end date, formatted as YYYY-MM-DD', type: 'string' },
                { name: 'fin_report_date', description: 'Date the financial report was issued or signed, formatted as YYYY-MM-DD', type: 'string' },
                { name: 'fin_currency', description: 'Reporting currency of the financial figures, e.g. SGD', type: 'string' },
                { name: 'fin_paid_up_capital', description: 'Paid-up capital, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_net_worth', description: 'Net worth / shareholders equity, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_total_assets', description: 'Total assets, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_total_liabilities', description: 'Total liabilities, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_current_assets', description: 'Current assets, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_current_liabilities', description: 'Current liabilities, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_revenue', description: 'Total revenue, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_profit_before_tax', description: 'Profit before tax, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_profit_after_tax', description: 'Profit after tax, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_retained_earnings', description: 'Retained earnings, as a plain number with no currency symbol or thousands separators', type: 'number' },
                { name: 'fin_auditor_notes', description: 'Auditor notes or opinion', type: 'string' }
            ]
        },
        fileTypes: ['pdf', 'docx', 'png', 'jpg', 'jpeg']
    });

    outputs.taskId = taskId;
})(inputs, outputs);
