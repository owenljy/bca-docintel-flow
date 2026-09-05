(function execute(inputs, outputs) {
    var api = new sn_docintel_gen_ai.DocIntelGenAIAPI();
    var result = api.getFieldsResult(inputs.taskId);

    if (result.status === 'IN_PROGRESS') {
        outputs.done = false;
        return;
    }

    if (result.status !== 'COMPLETE') {
        gs.error('[PollAndApplyFinancialExtraction] DocIntel task ' + inputs.taskId + ' did not complete for record ' + inputs.recordId + ': ' + result.error);
        outputs.done = true;
        return;
    }

    var resultStr = result.response && result.response.result;
    if (!resultStr) {
        gs.error('[PollAndApplyFinancialExtraction] Empty extraction result for record ' + inputs.recordId);
        outputs.done = true;
        return;
    }

    var fields;
    try {
        fields = JSON.parse(resultStr);
    } catch (e) {
        gs.error('[PollAndApplyFinancialExtraction] Could not parse extraction JSON for record ' + inputs.recordId + ': ' + e);
        outputs.done = true;
        return;
    }

    var gr = new GlideRecord('x_bca_reg_contractor_reg');
    if (!gr.get(inputs.recordId)) {
        gs.error('[PollAndApplyFinancialExtraction] Record not found: ' + inputs.recordId);
        outputs.done = true;
        return;
    }

    var textFields = ['fin_entity_name', 'fin_uen', 'fin_currency', 'fin_auditor_notes', 'fin_year_end', 'fin_report_date'];
    var integerFields = [
        'fin_paid_up_capital', 'fin_net_worth', 'fin_total_assets', 'fin_total_liabilities',
        'fin_current_assets', 'fin_current_liabilities', 'fin_revenue',
        'fin_profit_before_tax', 'fin_profit_after_tax', 'fin_retained_earnings'
    ];

    textFields.forEach(function (field) {
        var value = fields[field];
        if (value !== undefined && value !== null && value !== '') {
            gr.setValue(field, value);
        }
    });

    integerFields.forEach(function (field) {
        var value = fields[field];
        if (value === undefined || value === null || value === '') {
            return;
        }
        var numeric = parseInt(String(value).replace(/[^0-9.-]/g, ''), 10);
        if (!isNaN(numeric)) {
            gr.setValue(field, numeric);
        }
    });

    if (!gr.getValue('fin_currency')) {
        gr.setValue('fin_currency', 'SGD');
    }

    gr.setValue('financial_report_extracted', true);
    gr.update();

    outputs.done = true;
})(inputs, outputs);
