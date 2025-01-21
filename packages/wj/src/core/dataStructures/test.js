/**
 * 和一个问题相关的所有规则
{
    visiable: {
        "题目1 id": {
            "optionLogic": 'or',
            "选项1 id": {
                 visiable: false,
                 trigger: false
             }
        }
    },
    target: {
        "题目1 id": {
            "选项1 id": {
                 trigger: false
             }
        }
    },
    relate: {
        "题目1 id": {
            "选项1 id": {
                 disabled: ['1', '2'],
                 trigger: false
             }
        }
    }
}
 */
const ruleMap = {

}
const o = {
    "0c45536a-8774-44fe-8c3a-ee8e529a4583": {
        "visiable": {

        }
    },
    "e480c98e-8f54-4ca4-8ac9-01fc5ccbd78c": {
        "visiable": {
            "0c45536a-8774-44fe-8c3a-ee8e529a4583": {
                "optionLogic": "or",
                "cba3b313-0e0a-4cc9-9dd7-d10a3edcc72d": {
                    "visiable": true,
                    "trigger": false
                }
            }
        }
    },
    "612fc540-41b8-4cfb-9d58-3517fdb076ee": {
        "visiable": {
            "e480c98e-8f54-4ca4-8ac9-01fc5ccbd78c": {
                "optionLogic": "and",
                "6faa84c4-c77a-4324-8b9f-a79564717e86": {
                    "visiable": true,
                    "trigger": false
                }
            }
        }
    },
    "e4a7e57f-faeb-4e7f-8cb7-01423a225dd7": {
        "visiable": {
            "e480c98e-8f54-4ca4-8ac9-01fc5ccbd78c": {
                "optionLogic": "and",
                "091fff1f-d19b-4b66-a18b-452c1a42a16a": {
                    "visiable": false,
                    "trigger": false
                }
            }
        }
    },
    "05385e91-9ba1-433e-96a9-8860938d6a7f": {
        "visiable": {
            
        }
    },
    "2e60bb22-4c3e-4463-9b0b-8498206e4656": {
        "visiable": {
            "e480c98e-8f54-4ca4-8ac9-01fc5ccbd78c": {
                "optionLogic": "and",
                "091fff1f-d19b-4b66-a18b-452c1a42a16a": {
                    "visiable": false,
                    "trigger": false
                }
            }
        }
    },
    "63bc2ec5-6fec-4bf9-8826-ba734c7e6143": {
        "visiable": {
            
        }
    },
    "e3426733-3056-4c32-8bbd-8412d0d60cd6": {
        "visiable": {
            
        }
    },
    "62e43152-25be-471d-8850-cc85b55a0f46": {
        "visiable": {
            
        }
    },
    "a379c672-1570-4179-841e-4288ee15f3c0": {
        "visiable": {
            
        }
    },
}