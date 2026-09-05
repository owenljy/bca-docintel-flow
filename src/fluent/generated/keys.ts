import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '16e027a4e9204c76bbe06b2792ccbd7a'
                    }
                    'extract-financial-report-flow': {
                        table: 'sys_hub_flow'
                        id: '5642710e79d3493ebd6f2e91f7962cf3'
                    }
                    'extract-financial-report-trigger': {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'c73377df4ead4ccc8fafbd87eaaae25c'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '02a02ea4c10b4559a858f0bcfcdb935b'
                    }
                    'poll-and-apply-financial-extraction': {
                        table: 'sys_hub_action_type_definition'
                        id: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                    }
                    'poll-and-apply-financial-extraction-script': {
                        table: 'sys_hub_step_instance'
                        id: '79b4a86bacbc4c60ae8a4ced98f2488a'
                    }
                    'poll-done-check': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '28e0fef3e2174e59bc9180225cc70782'
                        deleted: true
                    }
                    'poll-exit': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '28fb3b218720415ca89b1ef662dff131'
                        deleted: true
                    }
                    'poll-loop': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '71347a31c9f84ef8894d13db100eaf55'
                    }
                    'poll-step': {
                        table: 'sys_hub_action_instance_v2'
                        id: '6312a5ed3b5b46f8bad48646f7f4b648'
                    }
                    'poll-wait': {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'f00dd6051848436fb4e3b13119b7d411'
                    }
                    'src_server_actions_poll-and-apply-financial-extraction_js': {
                        table: 'sys_module'
                        id: '381671388dd24f39884caaaafbaf6f2c'
                    }
                    'src_server_actions_submit-financial-extraction_js': {
                        table: 'sys_module'
                        id: '3e3a1e41b6cd45d197150d7e5bd8ec93'
                    }
                    'submit-extraction-step': {
                        table: 'sys_hub_action_instance_v2'
                        id: 'fbd5cdf7945e442e99ab366eb47492ff'
                    }
                    'submit-financial-extraction': {
                        table: 'sys_hub_action_type_definition'
                        id: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                    }
                    'submit-financial-extraction-script': {
                        table: 'sys_hub_step_instance'
                        id: '459228bb081646faac5c3d04692517d6'
                    }
                }
                composite: [
                    {
                        table: 'sys_hub_action_input'
                        id: '06ad3f2d98234231b6d6b030e8685f91'
                        key: {
                            model: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: 'recordId'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b15f0f3511e4dc5995637fde581328c'
                        key: {
                            name: 'var__m_sys_hub_action_output_e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1c7bc07135e54891ac8111f1bb906c1b'
                        key: {
                            field: 'taskId'
                            table: 'var__m_sys_hub_action_output_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            id: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1d4764f6ecf04ee397c48c12c2c90527'
                        key: {
                            document_key: '79b4a86bacbc4c60ae8a4ced98f2488a'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '1e466a9f444b4dd698d3ca46bf48962a'
                        key: {
                            model: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'recordId'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20309483451e4da2bea5444e7d723005'
                        key: {
                            document_key: '459228bb081646faac5c3d04692517d6'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28da28de145f48f6b08846c1057018e6'
                        key: {
                            name: 'var__m_sys_hub_action_output_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'taskId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '2951952c0c4848c5b394478a6544dcff'
                        key: {
                            model: '79b4a86bacbc4c60ae8a4ced98f2488a'
                            element: 'recordId'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '2f6901f0395f4377b65b7556f4492f9e'
                        key: {
                            model: '79b4a86bacbc4c60ae8a4ced98f2488a'
                            element: 'done'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '388d422b63dc4c70af1faa31d3b4d3a8'
                        key: {
                            model: '459228bb081646faac5c3d04692517d6'
                            element: 'attachmentId'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '42676b510b3a4ebe90546d2ea2139e9e'
                        key: {
                            document_key: '459228bb081646faac5c3d04692517d6'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '470c6f8e890d485f98cdb6002ea9096a'
                        key: {
                            model: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'attachmentId'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '47d80627cab1433f9883e6ec3cdb28e9'
                        key: {
                            field: 'taskId'
                            table: 'var__m_sys_hub_step_ext_input_79b4a86bacbc4c60ae8a4ced98f2488a'
                            id: '79b4a86bacbc4c60ae8a4ced98f2488a'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54b9a097482c452cb11c1441f480f3d1'
                        key: {
                            name: 'var__m_sys_hub_action_output_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '63c972fe2cad45919cd53cc69d8d040f'
                        deleted: true
                        key: {
                            model: '459228bb081646faac5c3d04692517d6'
                            element: 'recordId'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '647ecf9ed20449ca8ca823fb1756f4a3'
                        key: {
                            name: 'var__m_sys_hub_action_input_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'attachmentId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6e61b5ebc590425c8e840635224a85b0'
                        deleted: true
                        key: {
                            field: 'recordId'
                            table: 'var__m_sys_hub_step_ext_input_459228bb081646faac5c3d04692517d6'
                            id: '459228bb081646faac5c3d04692517d6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '76d3bf8c5e1a4a8189ece4c96a97a7f1'
                        key: {
                            field: 'recordId'
                            table: 'var__m_sys_hub_action_output_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            id: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ffdf5b1d3b847cfb20b7d6b4e1184b9'
                        key: {
                            name: 'var__m_sys_hub_action_output_e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: 'done'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '8828229a22534328add3c5d66e8db85b'
                        deleted: true
                        key: {
                            model: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'recordId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8c5014dcf85a43c0aaa0f84bca2d6a82'
                        key: {
                            model: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '9028a8fce45944f6b3ce9dbb508b1910'
                        key: {
                            model: '459228bb081646faac5c3d04692517d6'
                            element: 'recordId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '916f0b9adb9a41ef94f11395a8cf0bbb'
                        key: {
                            model: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: 'done'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '944ea8c4f08d4479af5cbfa97efbceea'
                        key: {
                            field: 'attachmentId'
                            table: 'var__m_sys_hub_step_ext_input_459228bb081646faac5c3d04692517d6'
                            id: '459228bb081646faac5c3d04692517d6'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '97c98fa478154dadb866ccc2ab06f56a'
                        key: {
                            model: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '980bdbbf84af4c9a87acd75485725502'
                        key: {
                            document_key: '79b4a86bacbc4c60ae8a4ced98f2488a'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e78b2cb2ded497e8ee015151585b02a'
                        key: {
                            name: 'var__m_sys_hub_action_input_e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: 'taskId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a647969d6fba4cfc9c0eae2ab5e658a4'
                        key: {
                            field: 'done'
                            table: 'var__m_sys_hub_action_output_e9c4d69cfc314c87ab9a11d2634b35d9'
                            id: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a711a7f4ca2444c7b2675a9395e833c3'
                        key: {
                            name: 'var__m_sys_hub_action_output_e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa60344afc6b40378ed6f9c8ef9f62d4'
                        key: {
                            name: 'var__m_sys_hub_action_input_e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: 'recordId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b16d6e9e5f2e47d69eda51b5a5140e15'
                        key: {
                            model: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b27b07777749447eb79fe96d6272c84b'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_input_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'recordId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'bd6595727e484c1782f6d84d833ed93d'
                        key: {
                            model: '459228bb081646faac5c3d04692517d6'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'bf2a6760ba3a4d40a9bfe1283f471720'
                        key: {
                            model: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'c0306c9d79c4471aa1131e6820a7516d'
                        key: {
                            model: '79b4a86bacbc4c60ae8a4ced98f2488a'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'd64e6c76d654432a97b02a7acf20af62'
                        key: {
                            model: 'ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed50754966f54a93b23a6651f5230b7b'
                        key: {
                            name: 'var__m_sys_hub_action_output_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f062da253a9e46b994bf5b4e9abfee38'
                        key: {
                            field: 'recordId'
                            table: 'var__m_sys_hub_step_ext_input_79b4a86bacbc4c60ae8a4ced98f2488a'
                            id: '79b4a86bacbc4c60ae8a4ced98f2488a'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'fc31b81bce8046e4a39ba6481abfda0b'
                        key: {
                            model: 'e9c4d69cfc314c87ab9a11d2634b35d9'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe1bca2f9ff04bf99c58fe160e3ccac4'
                        key: {
                            name: 'var__m_sys_hub_action_output_ae6c3cf454be489bbd030cb8d6f7b6d3'
                            element: 'recordId'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
