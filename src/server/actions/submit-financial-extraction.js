(function execute(inputs, outputs) {
    var api = new sn_docintel_gen_ai.DocIntelGenAIAPI();

    var taskId = api.extractFields({
        sourceTable: 'x_bca_reg_contractor_reg',
        sourceRecord: inputs.recordId,
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
