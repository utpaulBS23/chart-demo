const PROJECTS = [
  {
    'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
    'name': 'Uk test case',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        }
      }
    },
    'planned': {
      'startDate': '2023-03-13T00:00:00',
      'endDate': '2024-03-16T00:00:00',
      'duration': 369
    },
    'projectId': 1,
    'location': {
      'country': 'Uk'
    },
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:30.3870987Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:40.077461Z',
    'lastModifiedBy': {
      'id': 'service|00000000-0000-0000-0000-000000000000',
      'name': 'System'
    },
    '_etag': '\'be003040-0000-0d00-0000-640ef3d00000\''
  }
]

const PHASES =[
  {
    'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
    'prefix': 'F1',
    'name': 'Feasibility',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
          'name': 'Feasibility'
        }
      }
    },
    'activityId': 0,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2023-03-13T00:00:00',
      'endDate': '2023-03-15T00:00:00',
      'duration': 2
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.0520488Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:35.0520488Z',
    'lastModifiedBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    '_etag': '\'be005f3f-0000-0d00-0000-640ef3cb0000\''
  },
  {
    'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
    'prefix': 'CD1',
    'name': 'Concept Define',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
          'name': 'Concept Define'
        }
      }
    },
    'activityId': 2,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2023-03-19T00:00:00',
      'endDate': '2023-03-21T00:00:00',
      'duration': 2
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.0701529Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:35.0701529Z',
    'lastModifiedBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    '_etag': '\'be00603f-0000-0d00-0000-640ef3cb0000\''
  },
  {
    'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
    'prefix': 'FE1',
    'name': 'Feed',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
          'name': 'Feed'
        }
      }
    },
    'activityId': 3,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2023-03-21T00:00:00',
      'endDate': '2023-03-23T00:00:00',
      'duration': 2
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.0703067Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:35.0703067Z',
    'lastModifiedBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    '_etag': '\'be00753f-0000-0d00-0000-640ef3cb0000\''
  },
  {
    'id': '13ca05b3-4fc3-47e6-adc4-7b4b01c55a8f',
    'prefix': 'CS1',
    'name': 'Concept Select',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': '0a35fdc2-7c95-4e43-b856-4c1ddea2eae9',
          'name': 'Concept Select'
        }
      }
    },
    'activityId': 1,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2023-03-15T00:00:00',
      'endDate': '2023-03-19T00:00:00',
      'duration': 4
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.0711497Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:35.0711497Z',
    'lastModifiedBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    '_etag': '\'be006d3f-0000-0d00-0000-640ef3cb0000\''
  },
  {
    'id': '1586caa8-1334-47b3-86aa-57f812a3be23',
    'prefix': 'DE1',
    'name': 'Design',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': '8f3bc03e-7efc-455f-b85f-98c87fde4d51',
          'name': 'Design'
        }
      }
    },
    'activityId': 4,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2023-03-23T00:00:00',
      'endDate': '2024-03-12T00:00:00',
      'duration': 355
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.0900209Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:35.0900209Z',
    'lastModifiedBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    '_etag': '\'be00623f-0000-0d00-0000-640ef3cb0000\''
  },
  {
    'id': '2d8e5814-3c3c-48a0-b834-2f5632447aba',
    'prefix': 'EX1',
    'name': 'Execute',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': 'fcb26afe-be03-43ef-a6db-fa3f3c169ab9',
          'name': 'Execute'
        }
      }
    },
    'activityId': 5,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2024-03-12T00:00:00',
      'endDate': '2024-03-14T00:00:00',
      'duration': 2
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.2090447Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T09:58:35.2090447Z',
    'lastModifiedBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    '_etag': '\'be00673f-0000-0d00-0000-640ef3cb0000\''
  },
  {
    'id': 'daf21dbc-e521-49df-b67e-f662b914337b',
    'prefix': 'CO1',
    'name': 'Close Out',
    'metadata': {
      'source': {
        'template': {
          'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
          'name': 'Delivery Process UK 1'
        },
        'phase': {
          'id': '7ace0fbc-8465-4004-b251-6a1d41481f15',
          'name': 'Close Out'
        }
      }
    },
    'activityId': 6,
    'type': 'Task',
    'mandatory': false,
    'project': {
      'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
      'name': 'Uk test case'
    },
    'planned': {
      'startDate': '2023-03-15T00:00:00',
      'endDate': '2024-03-16T00:00:00'
    },
    'progress': 0,
    'raci': {},
    'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
    'scope': 'Informatiq.Plan',
    'created': '2023-03-13T09:58:35.2240925Z',
    'createdBy': {
      'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      'name': 'Erlend Søreide'
    },
    'lastModified': '2023-03-13T10:01:46.4455665Z',
    'lastModifiedBy': {
      'id': 'service|00000000-0000-0000-0000-000000000000',
      'name': 'System'
    },
    '_etag': '\'be006d51-0000-0d00-0000-640ef48a0000\''
  }
]

const ACTIVITIES = [
  {
    'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
    'prefix': 'F1',
    'name': 'Feasibility',
    data: [
      {
        'id': '73824b81-c3a2-49ee-ba73-65ec2009b39e',
        'name': 'Hold Well Initial Statement of Requirements (WISOR) Initiation Meeting',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 1,
        'reference': '',
        'description': 'Initiate the project and define the activities required to achieve well and phase objectives.\n- Discuss how well planning will work from an integrated D&W and Subsurface/Project team\n- Discuss practicality of well objectives with relevant functions.\n- Identify the key drivers for the project schedule\n- Develop and issue the Project Plan\n- Identify Project Stakeholders',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:36.7647167Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:36.7647167Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00a73f-0000-0d00-0000-640ef3cc0000\''
      },
      {
        'id': 'aedecf87-88b0-4129-bde5-425521d6b56e',
        'name': 'Identify and Secure Resources',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 2,
        'reference': '',
        'description': 'Identify and secure resource requirements necessary to deliver project objectives\n- Identify drilling and wells team resource requirements\n- Identify interfacing functions resource requirements\n- Communicate resource plan to stakeholders',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:36.7682187Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:36.7682187Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00c83f-0000-0d00-0000-640ef3cd0000\''
      },
      {
        'id': 'de197543-0f8e-4210-ab7a-8347b82a59a7',
        'name': 'Identify Feasibility/Technical Studies Required',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 3,
        'reference': '',
        'description': 'Determine requirements for any additional feasibility/technical studies (internal and external) that may enhance the preliminary data pack for the well/project, eliminate key uncertainties and support the decision for development.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:36.7687796Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:36.7687796Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be001d40-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': '2ba79e02-5f90-40c0-b587-29cca6fd901b',
        'name': 'WISOR Internal Review',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 5,
        'reference': '',
        'description': 'WISOR Internal Review Process.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:36.7694965Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:36.7694965Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be000140-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': 'dd4e6f8c-7383-41e1-afe7-e8e028db6f3d',
        'name': 'Develop Well Initial Statement of Requirements (WISOR)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 4,
        'reference': '',
        'description': 'Key deliverable for the Feasibility Phase, as this document forms the initial definition of the drilling and wells scope and basis for preliminary well designs, time and cost estimates.\n\nThe document should cover as a minimum:\n- Project/ well goals and objectives as defined by the Subsurface Team and agreed with JV partnership\n- Field/ well location and water depth\n- Licence obligations and requirements\n- Preliminary geological information: formation tops and provisional lithology column, downhole target, reservoir temperature and pressure regime, subsurface hazards and TD criteria\n- Anticipated reservoir fluid, composition and presence of any acidic fluids (H2S, CO2,Cl)\n- Preliminary formation evaluation/ completion/ well test requirements (including minimum hole size requirements)\n- Results of any supportive technical/ feasibility studies conducted by the Subsurface Team\n- Key risks and project uncertainties in the current planning stage',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:36.770056Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:36.770056Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00c43f-0000-0d00-0000-640ef3cd0000\''
      },
      {
        'id': '8072ae04-fe2f-4f1a-9f63-8d3ce64267d6',
        'name': 'WISOR (Well Objectives) TCM',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 6,
        'reference': '',
        'description': 'Seek JV partnership agreement on well/project objectives, preliminary data acquisition programme and timeline for deliverables.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:37.3497641Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:37.3497641Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00bd3f-0000-0d00-0000-640ef3cd0000\''
      },
      {
        'id': '5717781a-db3d-4e0f-a21f-4d4f4fe68942',
        'name': 'WISOR Approval',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 7,
        'reference': '',
        'description': 'WISOR Internal Approval Process.',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'responsible': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:37.7839555Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:37.7839555Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00d03f-0000-0d00-0000-640ef3cd0000\''
      },
      {
        'id': 'ca3684a7-f65b-45fb-bab9-9246cee9483b',
        'name': 'Perform Offset Well Review',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 8,
        'reference': '',
        'description': 'Identify relevant offset and analogue wells\nReview lessons learned and risks from offset analogues',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:37.9850074Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:37.9850074Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00d53f-0000-0d00-0000-640ef3ce0000\''
      },
      {
        'id': '0425fe1b-f4bb-4fa0-8839-57cc82c82182',
        'name': 'Generate Preliminary Well Design (WPO)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 9,
        'reference': '',
        'description': 'Key deliverable for the Feasibility stage.\nHigh level well design proposal based on a regional study, offset wells screening, etc.\nThe key purpose of the well design analysis at this stage is to determine well/project complexity for preliminary LLI AFE and LLI delivery schedule as inputs into the well/project construction plan. Define uncertainties and risks that are applicable at this stage and proposed mitigation plans going forward.\nKey deliverables - Well Architecture and Completion Strategy.\n\n*Co-ordinate preliminary Well Design with Facilities Team',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:38.081601Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:38.081601Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00d93f-0000-0d00-0000-640ef3ce0000\''
      },
      {
        'id': '318f46ab-49a0-41f9-a13a-f7ed09d15ef0',
        'name': 'Develop Well / Project Risk Register',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 10,
        'reference': '',
        'description': 'Key deliverable for the Feasibility stage.\nHigh level well/project risk register document with mitigation actions identified. The resultant risk register should define risks in terms of cause, risk and effect. Preliminary quantification in terms of magnitute and probability should be carried out. The risk response action plans for the top risks should be developed and managed on an ongoing basis throughout the stage.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:38.2069247Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:38.2069247Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00dd3f-0000-0d00-0000-640ef3ce0000\''
      },
      {
        'id': '0f880ef9-7e0d-48a0-b2cb-a2e2b9ad9ab5',
        'name': 'Define Project Controls and Assurance Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 11,
        'reference': '',
        'description': 'Scale the Project Controls and Assurance Plan to the requirements of the project\n- Define the activities within each phase required to achieve well and phase objectives\n- Define the project assurance requirements\n- Define the required resources\n- Communicate to stakeholders',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:38.4208611Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:38.4208611Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00e93f-0000-0d00-0000-640ef3ce0000\''
      },
      {
        'id': '0b7e7859-1912-4f80-a981-f1c77ede6414',
        'name': 'Develop Well Planning Schedule',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 12,
        'reference': '',
        'description': 'Key deliverable for the Feasibility stage.\nHigh level well / project plan with key deliverables based on an anticipated well spud date. The well construction plan will be based on some of the inputs identified at this stage (LLI delivery times, well complexity for planning, etc.), as well as the project team',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '0a5a197a-7f3a-44aa-86ed-861a5a9343b3',
              'name': 'Head of Well Services & Decomm',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:38.5251979Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:38.5251979Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00ed3f-0000-0d00-0000-640ef3ce0000\''
      },
      {
        'id': 'c4e27e8e-2341-480e-a88e-c44a8c6ac7e2',
        'name': 'Generate Well Scoping Cost Estimate(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 13,
        'reference': '',
        'description': 'Scoping well cost estimate with +/- 40% uncertainty based on well objectives, completion strategy and assumed  development type. Scoping cost estimate document to define key assumptions, schedule, risks and validity period. The estimate and schedule are used as key inputs for calculating the project economics. As the project moves through subsequent stages, the cost estimate and schedule are refined to reflect the increased definition of the project and the scope of work to be performed.\n\nDeliverable - Probabilistic cost estimate based on P10, P50 and P90 well timings.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:38.6280905Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:38.6280905Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00f43f-0000-0d00-0000-640ef3ce0000\''
      },
      {
        'id': '8cbddee0-b080-4d04-8add-bb04ea19c672',
        'name': 'Develop Feasibilty Statement',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 14,
        'reference': '',
        'description': 'Prepare concise recommendation on project Feasibility to include the following:\n- Project objectives\n- Project timeline\n- Project resource requirements\n- Overview of feasible well options\n- Risk (comparative overview)\n- Cost (comparative overview)\n- Confirmation statement of Feasibility',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:38.9689917Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:38.9689917Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00fc3f-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': '7a02021a-60d4-4030-803e-e88617846ac6',
        'name': 'Develop Long Lead Studies AFE',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 15,
        'reference': '',
        'description': 'Define Long Lead Study items for the well/project (timewriting, surveys, technical studies etc.) see section above,  and prepare, peer-review and submit LLI AFE for approval.\n\nDepending on the maturity of the well design, Long Lead equipment may also be specified at this point to accelerate the well delivery process i.e. infill well, using a proven design in an existing field.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:39.0331948Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:39.0331948Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be00fe3f-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': '43e36826-1c98-4134-8ecf-8afe18ac8e54',
        'name': 'Establish WBS and SAP Structure',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 16,
        'reference': '',
        'description': 'Establish project and/or well specific WBS structure(s) and asign roles as per DOA',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            },
            {
              'id': '621ddfe1-0cfd-4bee-a359-94be3ebb8f5c',
              'name': 'Materials & Logistics Team',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:39.2017766Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:39.2017766Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be000440-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': '7adc6dc4-9921-4225-a7a0-b84410052a95',
        'name': 'Hold Internal Feasibility Review',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 17,
        'reference': '',
        'description': 'The objectives at the end of Feasibility stage are to;\n\n- Ensure the opportunity has been scoped appropriately\n- Validate that it fits with Corporate Strategy\n- Review the potential value and risks associated with the opportunity\n- Verify that the opportunity is commercially and technically feasible.\n\nDuring the Review, the Team will be asked to elaborate or explain the work undertaken and provide reasons behind their recommendations. The Review team may decide that the opportunity is;\n\n- Endorsed to proceed to Concept-Select stage\n- Placed on hold\n- Killed\n- Recycled back into the Feasibility stage for rework and re-submission at a later date.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:39.421885Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:39.421885Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be000e40-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': '0f126cb6-1cd1-465a-9fd2-e0905e79dd8f',
        'name': 'Partner Approval OCM (JV Gate Review)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 18,
        'reference': '',
        'description': 'Compile and issue well/project proposal to partners. \nOCM meeting to seek JV partnership decision for project endorsement and LLI AFE approval.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'responsible': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'ec7abb41-a83a-4220-92cc-63f5e55f461f',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:39.4688477Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:39.4688477Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be001340-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': '41802597-5314-4e51-90ff-0ae7fbc63807',
        'name': 'Feasibility Gate Approval (1)*',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 19,
        'reference': '',
        'description': '',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'responsible': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:39.5765246Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:39.5765246Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be001940-0000-0d00-0000-640ef3cf0000\''
      },
      {
        'id': 'e712b17f-c7db-4c6e-a60f-cfd9f591110f',
        'name': 'LLI Studies AFE Approval',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'ec979758-0b2a-4c77-81e9-594add82e560',
              'name': 'Feasibility'
            }
          }
        },
        'activityId': 20,
        'reference': '',
        'description': 'Key deliverable for Feasibility stage.\n\nApproval for Long Lead studies/surveys (timewriting, site surveying, borehole sampling, PPFG, etc.) \n\nDepending on the maturity of the well design, Long Lead equipment may also be specified at this point to accelerate the well delivery process. \n \nLLI AFE to be approved internally by Investment Committee and by JV partnership.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
          'name': 'Feasibility'
        },
        'planned': {
          'startDate': '2023-03-13T00:00:00',
          'endDate': '2023-03-15T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f1e72ec7-afa7-46ee-80fa-8ccac8d8df0f',
              'name': 'Investment Committee',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:39.6264579Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:39.6264579Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be001c40-0000-0d00-0000-640ef3cf0000\''
      }
    ]
  },
  {
    'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
    'prefix': 'CD1',
    'name': 'Concept Define',
    data: [
      {
        'id': 'eaaa87a7-99e6-46da-905d-0a8849dce7d4',
        'name': 'Update Risk Register',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 44,
        'reference': '',
        'description': 'Update Risk Register post receipt of approved WDP',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            },
            {
              'id': '621ddfe1-0cfd-4bee-a359-94be3ebb8f5c',
              'name': 'Materials & Logistics Team',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:40.2610927Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:40.2610927Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be003a40-0000-0d00-0000-640ef3d00000\''
      },
      {
        'id': 'f4af81d7-0711-4a36-81f7-2ff9bed04cf8',
        'name': 'Internal WDP Review',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 41,
        'reference': '',
        'description': 'Quality assure that the Well Data Package (WDP) is sufficiently matured to be used as input to the Basis of Design document\nDuring the review, the Subsurface Team Leader and Team will be asked to elaborate or explain the work undertaken and provide reasons behind their recommendations. \n\nThe review team will make internal decision that Well Data Package (WDP) is sufficiently matured and can be used as input to the Basis of Design document, or recycled back for rework and reviewed at a later date.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:40.2615549Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:40.2615549Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005f40-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': '52aaa21f-d097-4109-9bb9-4f4fe37b5657',
        'name': 'Complete Well Data Package (WDP)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 40,
        'reference': '',
        'description': 'When complete, this  will constitute the subsurface input into the wells Basis of Design document, and ultimately the well AFE.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:40.261897Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:40.261897Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be008840-0000-0d00-0000-640ef3d20000\''
      },
      {
        'id': '60fb0547-0ba4-4a87-acb8-6ee7e31e5557',
        'name': 'WDP Approval',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 43,
        'reference': '',
        'description': 'Key deliverable for Concept-Define stage.\nWDP Internal Approval Process.',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:40.2624617Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:40.2624617Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be006940-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': '6b8581a5-0e02-4bac-b6c9-47b8f7d046ea',
        'name': 'WDP Review with Partners (TCM)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 42,
        'reference': '',
        'description': 'The final WDP review and endorsement by JV Partners. \nJV Gate Approval TCM.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:40.2627717Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:40.2627717Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005540-0000-0d00-0000-640ef3d00000\''
      },
      {
        'id': 'e3b12b4a-a7a7-4f3d-adcc-c007dd89c9ad',
        'name': 'Commence Wells Basis of Design (BoD)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 45,
        'reference': '',
        'description': 'This document will form the basis of the wells AFE. The BoD document should include, as a minimum:\n\nDrilling:\n  - Well Architecture\n  - Well Trajectories\n  - Casing Stress Analysis\n  - Wellhead Details\n  - Hydraulics and T&D\n  - Well Control, - Relief Well Planning\n  - Risks and Uncertainties\n  - Materials Selection\n  - Summary of Directional Drilling / Mud / Cement Programmes\n  - Proposed Well Abandonment\n - Wellbore Stability Studies etc. included as part of Subsurface Well data Package\nFormation Evaluation:\n  - Coring/LWD/Wireline Logging/Sampling Programme\nCompletion: \n  - Tubing Size Selection, Tubing Stress Analysis, Upper / Lower Completion Design\n  - Materials Selection, Downhole and Surface Equipment Selection, Xmas Tree Selection.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:40.6927293Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:40.6927293Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005240-0000-0d00-0000-640ef3d00000\''
      },
      {
        'id': 'f964abbd-682f-46a8-a6a2-6e7d423abe12',
        'name': 'Refine Well Cost Estimate',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 46,
        'reference': '',
        'description': 'Update Well Cost estimate post receipt of WDP',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.1365331Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.1365331Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be006340-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': '9baf1116-a0e0-4707-a4a1-b02c4a2c7c6c',
        'name': 'Manage PLANC',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 47,
        'reference': '',
        'description': 'Update register for Permits, Licenses, Applications, Notifications and Consents in PLANC Manager and communicate progress to key stakeholders.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.1783081Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.1783081Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be006540-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': 'b04726b8-55d2-4692-aa4a-94b6955ada9e',
        'name': 'Update and Implement HSE Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 48,
        'reference': '',
        'description': 'Review requirements established in HSE plan and update as required. \n- Consider areas for improvement and risk reduction.\n- Perform assessment of Management System Interfaces. Define and agree primacy for Governance and Control.  \n- Develop Interface Document Template.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.4884183Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.4884183Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007240-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': 'e7e59091-2220-4477-a1b5-437dc876e991',
        'name': 'Perform Shallow Hazard Assessment(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 49,
        'reference': '',
        'description': 'Obtain complete and final Shallow Hazards Assessment report based on site survey  results. Review and approve the final report.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.5570908Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.5570908Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007540-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': 'eca3af8c-ce52-45a7-a88e-527384e565ed',
        'name': 'Define Primary / Relief Well Locations',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 50,
        'reference': '',
        'description': 'Based on final Shallow Hazards Assessment (SHA) report, define and communicate primary and secondary well spud locations and contingency relief well location. Communicate to the Environmental team and the JV partnership as required.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.6065463Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.6065463Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007940-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': '7b0eaea7-a12d-44be-b524-ebd6fdcea05e',
        'name': 'Initiate Contracting Strategy',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 51,
        'reference': '',
        'description': 'The focus of the task is to identify third party contracts required to be put in place for the project/well operations. Prepare contracts register, assign HSEQ, technical and commercial task force team members required to carry out tendering and evaluation work.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': '8c5f283d-7924-4861-a811-303107a6bbb3',
              'name': 'QA/QC Engineer',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.7182429Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.7182429Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007e40-0000-0d00-0000-640ef3d10000\''
      },
      {
        'id': 'b969429c-27e1-4560-a476-2a4e19dc16fb',
        'name': 'Perform Rig Market Screening and Initiate Rig Tender Process (if required)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 52,
        'reference': '',
        'description': 'Prepare a list of potential  bidders (FPal) and commence rig tender process.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '4851a57e-504b-48fc-8797-6b191fc7fb2e',
              'name': 'Drilling Superintendent',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:41.9887206Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:41.9887206Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be008d40-0000-0d00-0000-640ef3d20000\''
      },
      {
        'id': 'a23c2c8a-810c-41bf-b565-9a0542833199',
        'name': 'Develop Rig Intake Procedures, Plans and Acceptance Criteria',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'c7a2d2a7-250a-4b0d-bf65-bd17f379ad2c',
              'name': 'Concept Define'
            }
          }
        },
        'activityId': 53,
        'reference': '',
        'description': 'Scale the Rig Intake Procedure depending on timeline, type of rig, new build, warm or cold, complexity of operations etc. Outline the minimum requirements for a rig to be accepted for operations: technical specification, project time constraints, etc.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
          'name': 'Concept Define'
        },
        'planned': {
          'startDate': '2023-03-19T00:00:00',
          'endDate': '2023-03-21T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '4851a57e-504b-48fc-8797-6b191fc7fb2e',
              'name': 'Drilling Superintendent',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:42.0098489Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:42.0098489Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be008f40-0000-0d00-0000-640ef3d20000\''
      }
    ]
  },
  {
    'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
    'prefix': 'FE1',
    'name': 'Feed',
    data: [
      {
        'id': '79b67672-14be-4ac8-b0c7-4ac07239d4f1',
        'name': 'Update Project Controls and Assurance Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 54,
        'reference': '',
        'description': 'Validate that the WDP activities and assurance requirements within the PCAP are valid and necessary to achieve phase objectives',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:53.0121747Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:53.0121747Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be001b42-0000-0d00-0000-640ef3dd0000\''
      },
      {
        'id': 'cea9aebd-a436-4f03-af87-a2e21dcce1cb',
        'name': 'Define Long Lead Equipment Requirements',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 56,
        'reference': '',
        'description': 'Define Long Lead Equipment requirements based on wells BoD (wellhead, conductor, casing, liner hangers, Xmas tree, completion etc.)',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:53.0128082Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:53.0128082Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be003742-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': '75c29f29-7cac-47df-8970-cb421df1dc9a',
        'name': 'Generate Budgetary Wells Cost Estimate (+/- 20%)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 58,
        'reference': '',
        'description': 'Key deliverable for FEED stage.\n\nFinal Budget level well cost estimate (+/- 20%) to include benchmark analysis (Rushmore)\n\nEstimate to be refined to AFE quality level (+/-10%) during Detailed Design, prior to Execution.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:53.0132844Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:53.0132844Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be003a42-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': '796d6ae8-2b1f-404b-a2fe-3a515ba884ec',
        'name': 'Perform Risk Assessment and Update Risk Register',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 57,
        'reference': '',
        'description': 'Conduct multi-discipline risk assessment session to assess and review the risks associated with the well BoD and identify required mitigation actions going forward. Update Risk Register',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            },
            {
              'id': '621ddfe1-0cfd-4bee-a359-94be3ebb8f5c',
              'name': 'Materials & Logistics Team',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:53.0137685Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:53.0137685Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be003542-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': '03a5aaf1-a9ac-4bed-a9ae-244beb4e7a3e',
        'name': 'Complete Wells BoD',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 55,
        'reference': '',
        'description': 'When complete, this  will constitute the Design Freeze and form the basis of the the well AFE.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:53.0142928Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:53.0142928Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be004342-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': 'bc833b27-b651-4951-bc01-846a860d2aac',
        'name': 'Internal Well BoD PEER Review',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 59,
        'reference': '',
        'description': 'The objectives of the review are to:\n\n- Verify that all technical studies are complete\n- Evaluate the completeness of the project scope, budget and schedule\n- Confirm that the Project Execution Plan is robust and that the organisation is in place to deliver it.\n\nThe Review team shall ensure that:\n\n- The project has been clearly defined - well objectives, data acquisition programme, subsurface uncertainties and risks\n- All well/completion design risks have been quantified and that mitigation measures are in place\n- Well integrity and abandonment considerations have been built into the design.\n\nThe Review team will recommend that either the BoD is:\n\n- Endorsed (allowing progress to the approval stage)\n- Recycled back into FEED for rework and re-submission to the Review Team.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '0a5a197a-7f3a-44aa-86ed-861a5a9343b3',
              'name': 'Head of Well Services & Decomm',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': '409c8b78-d7f3-44dd-89d9-b2b36b94cc26',
              'name': 'Safety Critical Technical Authority (TA1)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:53.4290529Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:53.4290529Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be002742-0000-0d00-0000-640ef3dd0000\''
      },
      {
        'id': '17258d2c-7c74-41f8-8043-f61a188b7ac2',
        'name': 'BoD Review TCM Meeting with Partners (JV Gate Review)',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 60,
        'reference': '',
        'description': 'Partner review and endorsement of well BoD document (JV TCM Project Sanction) coordinated by the Project Manager.',
        'type': 'Meeting',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'ec7abb41-a83a-4220-92cc-63f5e55f461f',
              'name': 'Partners',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:54.576155Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:54.576155Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be004a42-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': '542d8ebb-e852-43f8-b37c-5c9170217d4a',
        'name': 'Well BoD Approval (3)*',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 61,
        'reference': '',
        'description': 'Well BoD Internal Approval Process.\n\nThe approval of the well BoD will be based on recommendations from the peer review team that provided independent assurance for technical work and ensured consistency of application of good practices on the project.',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '409c8b78-d7f3-44dd-89d9-b2b36b94cc26',
              'name': 'Safety Critical Technical Authority (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:54.6572534Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:54.6572534Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005142-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': '2adeb8ca-6eb1-47b1-aac8-a28abbc68e8b',
        'name': 'Investment Committee Well Approval (inc. wells budget)*',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 62,
        'reference': '',
        'description': 'Internal approval of well (inc. wells budget) by Investment Commitee',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '888be9d6-d34b-4866-86e5-44e920825634',
              'name': 'Director Subsurface',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '409c8b78-d7f3-44dd-89d9-b2b36b94cc26',
              'name': 'Safety Critical Technical Authority (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f1e72ec7-afa7-46ee-80fa-8ccac8d8df0f',
              'name': 'Investment Committee',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:54.6696946Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:54.6696946Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be008b42-0000-0d00-0000-640ef3e00000\''
      },
      {
        'id': '24387115-4826-48d7-b926-9a510cc51eba',
        'name': 'Partner Approval (JV Gate OCM) - Sanction (Financial Investment Decision (FID))',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 63,
        'reference': '',
        'description': 'Approval of well (inc. wells budget) by JV Partners at OCM meeting.',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'responsible': [
            {
              'id': '748622bc-149c-4955-baf8-ee2c61a485e7',
              'name': ': OCM/TCM Rep',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'ec7abb41-a83a-4220-92cc-63f5e55f461f',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:54.6738915Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:54.6738915Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be006f42-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': '1ed91f14-d0aa-4412-a10b-53028fd05e42',
        'name': 'Develop Long Lead Equipment AFE',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 64,
        'reference': '',
        'description': 'Define Long Lead equipment requirements for the well/project (wellhead, conductor, casing, liner hangers, Xmas tree, completion etc.) and prepare, peer-review and submit LLI AFE for approval.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            },
            {
              'id': '621ddfe1-0cfd-4bee-a359-94be3ebb8f5c',
              'name': 'Materials & Logistics Team',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:54.8046811Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:54.8046811Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005842-0000-0d00-0000-640ef3de0000\''
      },
      {
        'id': '36c2a2d5-5830-42e4-809d-cbf3f4e289c4',
        'name': 'LLI AFE Approval',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 65,
        'reference': '',
        'description': 'Approval for Long Lead Equipment\nLocal approval as per DoA - Wells Budget already approved by the Investment Committee at FID',
        'type': 'DecisionGate',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            },
            {
              'id': '0be42169-81af-4347-be25-b2da8dfc37b9',
              'name': 'Cost Controller',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            },
            {
              'id': '621ddfe1-0cfd-4bee-a359-94be3ebb8f5c',
              'name': 'Materials & Logistics Team',
              'type': 'Role'
            },
            {
              'id': '8c5f283d-7924-4861-a811-303107a6bbb3',
              'name': 'QA/QC Engineer',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '83356158-26e3-4aeb-9eb8-06dc0efe1ed0',
              'name': 'Managing Director',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:54.9981371Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:54.9981371Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005d42-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': '16b11ca6-4c3f-4af7-8752-779cc32c92dd',
        'name': 'Manage PLANC',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 66,
        'reference': '',
        'description': 'Update the register for Permits, Licenses, Applications, Notifications and Consents (PLANC).\n\n- Validate PLANC register submissions timeline against planned operational start date. \n- Review project resourcing requirements and timelines.\n- Communicate submission dates to stakeholders.\n- Prepare and submit regulatory submissions according to the register requirements.\n- Track submissions made to regulatory bodies. \n\nThe PLANC Process at this stage may include:\n\n- Environmental Impact Assessment\n- Rig Stabilisation/Rock Dumping\n- Chemical Permits\n- Consent to Locate\n- EIA Directions for Drilling\n- EIA Oil Discharge Permits\n- EIA Directions for Extended Well Test (if required)\n- Combined Operations Notification\n- SIMOPS Matrix\n- Emergency Response / Blowout Contingency Plans',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.0746564Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.0746564Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be005f42-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': 'f032dd7e-39b6-4d0e-bcd7-661947460949',
        'name': 'Update and Implement HSE Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 67,
        'reference': '',
        'description': 'Review requirements established in HSE plan and update as required. \n- Consider areas for improvement and risk reduction.\n- Perform assessment of Management System Interfaces. Define and agree primacy for Governance and Control.  \n- Prepare Interface Documents.\n- Issue Interface Document to stakeholders.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.2160319Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.2160319Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be006442-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': '7b540615-0c2c-4e78-8279-a1e335e114dc',
        'name': 'Develop Quality and Assurance Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 68,
        'reference': '',
        'description': 'Establish; \n- Non-Conformance reporting process and register\n- Inspection requirements and standards\n- Audit schedule\n- KPIs',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '8c5f283d-7924-4861-a811-303107a6bbb3',
              'name': 'QA/QC Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.4074499Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.4074499Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be006b42-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': '03fb7161-e08b-4a04-9729-078cfe151c85',
        'name': 'Award Rig Contract',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 69,
        'reference': '',
        'description': 'Key milestone for FEED stage.\nIssue a letter of award for the rig contract (post sanction - FID)',
        'type': 'Milestone',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': '409c8b78-d7f3-44dd-89d9-b2b36b94cc26',
              'name': 'Safety Critical Technical Authority (TA1)',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.4922121Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.4922121Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007142-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': 'd122e697-3e1d-43ba-b980-59182c365bfc',
        'name': 'Initiate Borehole Survey',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 70,
        'reference': '',
        'description': 'Obtain quotations and initiate borehole survey acquisition. Can be performed after receiving results from site survey and after performing Shallow Hazard Assessment (SHA).',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '5a87eaf5-174a-43e7-827a-2e1b92267754',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e5c88784-9285-4af7-9bcf-9b54d658a800',
              'name': 'Subsurface Project Team',
              'type': 'Role'
            },
            {
              'id': 'f8400967-c4e4-422d-b446-ed68fd7c5852',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            },
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.6375879Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.6375879Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007542-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': '8c695489-e3f3-47a2-827b-929b984eb84a',
        'name': 'Award Major Service/Equipment Contracts',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 71,
        'reference': '',
        'description': 'Issue letter of award for major service/equipment providers (post sanction - FID), including:\n\n- Tubulars\n- Well Head/Xmas Tree\n- Directional Drilling and MWD/LWD\n- Cementing\n- Drilling Fluids and Waste Management\n- Wireline Logging\n- Completions\n- Logistics (Base, Supply Boats and Helicopters).',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': '02f52a29-1a74-4b17-a98b-4a8f892c6e1f',
              'name': 'Head of Drilling Operations',
              'type': 'Role'
            },
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '76eb00c6-0fdf-4158-9247-47e821fb6ba2',
              'name': 'Environmental Advisor',
              'type': 'Role'
            },
            {
              'id': 'db9c7647-cc59-44e0-b2ee-a1f40bfe8293',
              'name': 'HSEQ Advisor',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.8113852Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.8113852Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007942-0000-0d00-0000-640ef3df0000\''
      },
      {
        'id': '3ee2b1eb-f2df-4a8e-923f-b34fe9a1549c',
        'name': 'Check Inventory / Place Long Lead Orders',
        'metadata': {
          'source': {
            'template': {
              'id': '41e406fb-9e6c-4cf4-99a9-a2479723b4fc',
              'name': 'Delivery Process UK 1'
            },
            'phase': {
              'id': 'd895248b-b85f-43b1-8e07-a4f06e361f89',
              'name': 'Feed'
            }
          }
        },
        'activityId': 72,
        'reference': '',
        'description': 'Check existing inventory, obtain RFQs and place LLI orders.',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          'name': 'Uk test case'
        },
        'phase': {
          'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
          'name': 'Feed'
        },
        'planned': {
          'startDate': '2023-03-21T00:00:00',
          'endDate': '2023-03-23T00:00:00',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'informed': [
            {
              'id': '55b8edf4-a0af-4495-8fe4-43828c957d0e',
              'name': 'Director of Drilling & Wells (TA1 WDP)',
              'type': 'Role'
            },
            {
              'id': '409c8b78-d7f3-44dd-89d9-b2b36b94cc26',
              'name': 'Safety Critical Technical Authority (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'b12a40b8-ea56-4b8e-9f4b-b9d85cd7b4c0',
              'name': 'Head of Well Engineering',
              'type': 'Role'
            },
            {
              'id': 'f0c82293-2ff8-4b97-8f54-a51b1c3cd0d0',
              'name': 'Well Engineer(s)',
              'type': 'Role'
            },
            {
              'id': '621ddfe1-0cfd-4bee-a359-94be3ebb8f5c',
              'name': 'Materials & Logistics Team',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': '7c228997-915d-4c11-818d-43610d11594e',
              'name': 'Well Engineering Team Lead',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be7affc1-c641-407e-b35b-02c236da10d8',
              'name': 'Contracts and Procurement Specialist',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [
          ''
        ],
        'created': '2023-03-13T09:58:55.8645434Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-03-13T09:58:55.8645434Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'be007d42-0000-0d00-0000-640ef3df0000\''
      }
    ]
  }
]

export { PROJECTS, PHASES, ACTIVITIES };


