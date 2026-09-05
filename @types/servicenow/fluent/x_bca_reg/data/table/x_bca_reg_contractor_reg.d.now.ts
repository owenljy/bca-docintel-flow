import { Table, IntegerColumn, DateColumn, StringColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_bca_reg_contractor_reg = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        number: 1001,
        prefix: 'CONREG',
    },
    extends: 'task',
    label: 'Contractor Registration',
    name: 'x_bca_reg_contractor_reg',
    schema: {
        fin_revenue: IntegerColumn({
            label: 'FinR Revenue',
            maxLength: 40,
        }),
        fin_report_date: DateColumn({
            label: 'FinR Date',
            maxLength: 40,
        }),
        decision_rationale: StringColumn({
            label: 'AI Decision Rationale',
            maxLength: 4000,
        }),
        grade_awarded: StringColumn({
            maxLength: 10,
        }),
        integrity_findings: StringColumn({
            label: 'AI Integrity Findings',
            maxLength: 4000,
        }),
        paired_workhead: StringColumn({
            label: 'Regulatory Workhead',
            maxLength: 20,
        }),
        debarment_result: StringColumn({
            label: 'AI Debarment Result',
            maxLength: 4000,
        }),
        pers_track_record_total: IntegerColumn({
            label: 'Personnel Track Record Total',
            maxLength: 40,
        }),
        fin_profit_after_tax: IntegerColumn({
            label: 'FinR Profit After Tax',
            maxLength: 40,
        }),
        pers_all_full_time: BooleanColumn({
            default: false,
            label: 'Personnel All Full Time',
            maxLength: 40,
        }),
        fin_year_end: DateColumn({
            label: 'FinR Year End',
            maxLength: 40,
        }),
        application_fee: IntegerColumn({
            label: 'Trade Application Fee',
            maxLength: 40,
        }),
        decision: ChoiceColumn({
            choices: {
                approved: {
                    label: 'Approved',
                    sequence: 1,
                },
                rejected: {
                    label: 'Rejected',
                    sequence: 2,
                },
                routed: {
                    label: 'Routed',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'AI Decision',
            maxLength: 40,
        }),
        fin_retained_earnings: IntegerColumn({
            label: 'FinR Retained Earnings',
            maxLength: 40,
        }),
        fin_current_assets: IntegerColumn({
            label: 'FinR Current Assets',
            maxLength: 40,
        }),
        workhead: StringColumn({
            label: 'Trade Workhead',
            maxLength: 20,
        }),
        pers_bccpe_holder: StringColumn({
            label: 'Personnel BCCPE Holder',
            maxLength: 100,
        }),
        pers_largest_single_project: IntegerColumn({
            label: 'Personnel Largest Single Project',
            maxLength: 40,
        }),
        fin_auditor_notes: StringColumn({
            label: 'FinR Auditor Notes',
            maxLength: 2000,
        }),
        pers_bccpe_held_by_director: BooleanColumn({
            default: false,
            label: 'Personnel BCCPE Held By Director',
            maxLength: 40,
        }),
        fin_profit_before_tax: IntegerColumn({
            label: 'FinR Profit Before Tax',
            maxLength: 40,
        }),
        fin_total_assets: IntegerColumn({
            label: 'FinR Total Assets',
            maxLength: 40,
        }),
        entity: StringColumn({
            maxLength: 1000,
        }),
        acra_extracted: BooleanColumn({
            label: [
                {
                    label: 'ACRA Extracted',
                    plural: '',
                },
            ],
            maxLength: 255,
        }),
        pers_declaration_notes: StringColumn({
            label: 'Personnel Declaration Notes',
            maxLength: 2000,
        }),
        uen: StringColumn({
            default: '201408765D',
            label: 'UEN',
            maxLength: 100,
        }),
        fin_net_worth: IntegerColumn({
            label: 'FinR Net Worth',
            maxLength: 40,
        }),
        fin_uen: StringColumn({
            label: 'FinR UEN',
            maxLength: 20,
        }),
        eligibility_result: StringColumn({
            maxLength: 4000,
        }),
        fin_entity_name: StringColumn({
            label: 'FinR Entity Name',
            maxLength: 100,
        }),
        fin_paid_up_capital: IntegerColumn({
            label: 'FinR Paid-up Capital',
            maxLength: 40,
        }),
        pers_track_record_projects: IntegerColumn({
            label: 'Personnel Track Record Projects',
            maxLength: 40,
        }),
        human_decision: ChoiceColumn({
            choices: {
                Approved: {
                    label: 'Approved',
                    sequence: 0,
                },
                Rejected: {
                    label: 'Rejected',
                    sequence: 1,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        financial_report_extracted: BooleanColumn({
            label: [
                {
                    label: 'FinR Extracted',
                    plural: '',
                },
            ],
            maxLength: 255,
        }),
        fin_currency: StringColumn({
            default: 'SGD',
            label: 'FinR Currency',
            maxLength: 10,
        }),
        fin_current_liabilities: IntegerColumn({
            label: 'FinR Current Liabilities',
            maxLength: 40,
        }),
        fin_total_liabilities: IntegerColumn({
            label: 'FinR Total Liabilities',
            maxLength: 40,
        }),
        rw_tier: ChoiceColumn({
            choices: {
                T1: {
                    label: 'T1',
                    sequence: 1,
                },
                T2: {
                    label: 'T2',
                    sequence: 2,
                },
                T3: {
                    label: 'T3',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Regulatory Tier',
            maxLength: 40,
        }),
        regulatory_application_fee: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        risk_score: IntegerColumn({
            label: 'AI Risk Score',
            maxLength: 40,
        }),
        pers_declaration_date: DateColumn({
            label: 'Personnel Declaration Date',
            maxLength: 40,
        }),
        relationship_finding: StringColumn({
            label: 'AI Relationship Finding',
            maxLength: 4000,
        }),
        pers_technical_persons: IntegerColumn({
            label: 'Personnel Technical Persons',
            maxLength: 40,
        }),
        pers_bccpe_cert_no: StringColumn({
            label: 'Personnel BCCPE Certificate Number',
            maxLength: 30,
        }),
        fee_band: ChoiceColumn({
            choices: {
                1: {
                    label: '1',
                    sequence: 1,
                },
                2: {
                    label: '2',
                    sequence: 2,
                },
                3: {
                    label: '3',
                    sequence: 3,
                },
            },
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
    },
})
