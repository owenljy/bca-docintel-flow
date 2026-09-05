import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4f93907f5cfe4a0db30dc5dc2b32e194'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '74b22601b31641288cc3d25314ac33cc'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '008d98cc350241019ab89c8881cdea97'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fee_band'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00cda71ec30b4f100af973edd4013178'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'paired_workhead'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0721b396c34b4f100af973edd4013100'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'financial_report_extracted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '09ada31ec30b4f100af973edd4013151'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'application_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a4ec02ac38f4f100af973edd401317b'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'regulatory_application_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ca8d694f97549949038f4552b2dff00'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_revenue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0dad631ec30b4f100af973edd40131a6'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'grade_awarded'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12d85fb9e62743189f1a72ed8cae17e3'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'rw_tier'
                            value: 'T1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15ada31ec30b4f100af973edd4013175'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_total_assets'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17bc762318524362bd923e2016fc762d'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_report_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aedaf1ec30b4f100af973edd40131ee'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_bccpe_holder'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bb469f5b70246ba87d4b8b25c513728'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision_rationale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21ada31ec30b4f100af973edd4013199'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_paid_up_capital'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '257eab780b064586b47fdd5571e980a5'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'grade_awarded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25ada31ec30b4f100af973edd40131a0'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fee_band'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26607a17c56c47f4853212933d1ac56f'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'integrity_findings'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29ada31ec30b4f100af973edd401317c'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'eligibility_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ecb85464019443ea4506b5efd7696a8'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'paired_workhead'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '36bd671ec30b4f100af973edd4013192'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38ad631ec30b4f100af973edd40131a0'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_revenue'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ae967276b88480d874c7b1464cbefa9'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'debarment_result'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d64cad240a94423877cf3d5fb33efad'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_track_record_total'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41ada31ec30b4f100af973edd401314c'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'debarment_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '441e369b515b465e916a698d0a8d3bc5'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'rw_tier'
                            value: 'T2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '447b04cca8f149f0a0f7d48834e4cc2b'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fee_band'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45ada31ec30b4f100af973edd4013153'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46213396c34b4f100af973edd40131e3'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'acra_extracted'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46fd635ec30b4f100af973edd40131b2'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_declaration_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49829f2f02b74f74a5ade39a164676e0'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'rw_tier'
                            value: 'T3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49ad631ec30b4f100af973edd40131a8'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'integrity_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a97ff7ca5ba4a37844b1cef25cb7142'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_profit_after_tax'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d3e2f5ec30b4f100af973edd401313e'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'relationship_finding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50f7f403d70c49758a351c6ed67eea4a'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_all_full_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51ada31ec30b4f100af973edd4013177'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'entity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '521e2b5ec30b4f100af973edd4013109'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_track_record_projects'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6209886ac34f4f100af973edd401311a'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'human_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6309886ac34f4f100af973edd40131f7'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'human_decision'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '642fa79ac3cf8f10e9597bfdd4013105'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'uen'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '658636f9a39e4ff6aedd244e56baaf33'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_year_end'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6796f0adfc344f8da76658d4bfd37712'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'application_fee'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b09886ac34f4f100af973edd40131f6'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'human_decision'
                            value: 'Approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dada31ec30b4f100af973edd401319a'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '748b2d5500b446beb9ffebc6890af839'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'rw_tier'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7709c86ac34f4f100af973edd4013154'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'human_decision'
                            value: 'Rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79ad625382eb44b78fe2e8ae0facf262'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a0f495bbc7d4c02ad758b842786a418'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_retained_earnings'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7aaf9c74358246aeac6383dc3882c974'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_current_assets'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bfde35ec30b4f100af973edd4013172'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_largest_single_project'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e96ee4f1f244fc3b04d1ef50627ff45'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fee_band'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ecb2475b67c4c04a23c56d1354f3ac3'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'workhead'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '818ed3f5cd52479bb5711e1360d1b93c'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8dada31ec30b4f100af973edd401314d'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_profit_after_tax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e9051fc618d4a7fabc4bfd3a0c67cdf'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_bccpe_holder'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fb4d426ffa547cb80b7647c5bb770ca'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_largest_single_project'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '905889846de74f379d1f5a9b10d27c0c'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_auditor_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91ada31ec30b4f100af973edd4013155'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_retained_earnings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '920e675ec30b4f100af973edd4013111'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_technical_persons'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98fd235ec30b4f100af973edd401314a'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_declaration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9925f36da2ee432f938a006def369d01'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_bccpe_held_by_director'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99ada31ec30b4f100af973edd4013171'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_auditor_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9dada31ec30b4f100af973edd4013178'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_net_worth'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f323f9e77374b72810ff0c649000bbc'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_profit_before_tax'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a22f2b9ac3cf8f10e9597bfdd40131dd'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'workhead'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3d4adb461684889a15251e4a1c70148'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision'
                            value: 'routed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a58a6c7f494245c1ac1b86c6016d92db'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_total_assets'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a670895cd9da4e8fab0ea607ea7b2229'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'entity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9ada31ec30b4f100af973edd401319c'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_current_liabilities'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9ddab1ec30b4f100af973edd40131d9'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_bccpe_cert_no'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad21ff56c34b4f100af973edd40131ef'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'acra_extracted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af31743c8e884331b6fba0e19e9f2fd5'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_declaration_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'afd05aa1b3dc4163a3f2aa078071982f'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'afe9f5249e0c4d7eae83552f2c53ffeb'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'uen'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0ad631ec30b4f100af973edd40131a3'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_report_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b14a2a90ba014199afffb06302809b57'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_net_worth'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4768e501bc84de39ffe0711b60d6261'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_uen'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b92eab5ec30b4f100af973edd4013155'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_track_record_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bf9cdaaff5e049af9d78a47e10b99ad9'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2e3f1aeb7f9400396d263e05158c2e6'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'eligibility_result'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c3a80acfb83c428bb651b9313f894d48'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c73851bbe75a4989a32bf1d5e2a1e7f1'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_entity_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7eec71a1ba743dbad9fe3c77938e812'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_paid_up_capital'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9ada31ec30b4f100af973edd401314f'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_year_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cca63fb0ea5742f4972791a70bae2a65'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_track_record_projects'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cdad631ec30b4f100af973edd40131a4'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'decision_rationale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0ad631ec30b4f100af973edd401319b'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd5ada31ec30b4f100af973edd4013173'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_profit_before_tax'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd609886ac34f4f100af973edd4013106'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'human_decision'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd73eaf5ec30b4f100af973edd401317b'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'risk_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da213396c34b4f100af973edd40131e6'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'financial_report_extracted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd12c748a7484db99f41279ca53baee3'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_currency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddada31ec30b4f100af973edd4013156'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_current_assets'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1ada31ec30b4f100af973edd4013197'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_entity_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4b654d0e6044296a122c06facca09d4'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_current_liabilities'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e4cf74806b834f1588062de2cd0203ec'
                        key: {
                            category: 'x_bca_reg_contractor_reg'
                            prefix: 'CONREG'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5ada31ec30b4f100af973edd401319e'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_total_liabilities'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e66c4ac3fbaa454f8de4f1c83b590b7d'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_total_liabilities'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e9ada31ec30b4f100af973edd401317a'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fin_uen'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed5a24caeee44b89b318df7e1f10cf09'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'rw_tier'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eecd2b1ec30b4f100af973edd401319b'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_all_full_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f14e802ac38f4f100af973edd40131c6'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'regulatory_application_fee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4897625c0b24e11a59f4a5fb11202d1'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f58486b4962844c696eedddeb15bd77d'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'risk_score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f627e4d131864276816d7d6a744207fc'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_declaration_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7f4d621b7af4c60a0f0287f091dfb81'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fee_band'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa4e239ec30b4f100af973edd4013170'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'rw_tier'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fab383c9058344cc810dceedd221487b'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'relationship_finding'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbaebe6a88b64922b622876532f207de'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_technical_persons'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fdb35d9bdae44e329329a09aa5355051'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_bccpe_cert_no'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fdc13cd91aa345e08a1786eb31c989c6'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'fee_band'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffdd6f1ec30b4f100af973edd401316a'
                        key: {
                            name: 'x_bca_reg_contractor_reg'
                            element: 'pers_bccpe_held_by_director'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
