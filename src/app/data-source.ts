const PROJECTS = [
  {
    id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
    name: 'Cerisa test',
    metadata: {
      source: {
        template: {
          id: '20034880-bfe7-4f85-aaf5-faaa599723f0',
          name: 'PCAP Template Fast Track v3'
        }
      },
      wellbore: {
        plannedSpudDate: '2022-12-31T23:00:00Z',
        spud: {
          planned: {
            startDate: '2023-05-11T00:00:00',
            endDate: '2023-05-11T00:00:00',
            duration: 1
          }
        }
      }
    },
    planned: {
      startDate: '2021-08-21T02:00:00Z',
      endDate: '2035-09-11T11:00:00Z',
      duration: 5134.375
    },
    projectId: 1,
    location: {
      country: 'NO'
    },
    tenantId: '225ff010-9da0-4eac-8997-0febeee9e6a7',
    scope: 'Informatiq.Plan',
    created: '2022-06-23T06:39:07.8655189Z',
    createdBy: {
      id: 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      name: 'Erlend Søreide'
    },
    lastModified: '2024-01-15T12:56:57.2055938Z',
    lastModifiedBy: {
      id: 'service|00000000-0000-0000-0000-000000000000',
      name: 'System'
    },
    _etag: '6e052f6c-0000-0d00-0000-65a52b990000'
  }
]

const PHASES = [
  {
    id: '26019147-8737-42b6-9b5e-2fbe41becb68',
    prefix: 'F',
    name: 'Feasability',
    metadata: {
      source: {
        template: {
          id: '20034880-bfe7-4f85-aaf5-faaa599723f0',
          name: 'PCAP Template Fast Track v3'
        },
        phase: {
          id: '48a93d6e-da66-4d30-9722-abb5eb3f9a13',
          name: 'Feasability'
        }
      }
    },
    activityId: 0,
    type: 'Task',
    mandatory: false,
    project: {
      id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
      name: 'Cerisa'
    },
    planned: {
      startDate: '2021-08-21T02:00:00Z',
      endDate: '2035-09-11T11:00:00Z',
      duration: 5135
    },
    progress: 62,
    dependencies: [],
    raci: {},
    tenantId: '225ff010-9da0-4eac-8997-0febeee9e6a7',
    scope: 'Informatiq.Plan',
    created: '2022-06-23T06:39:11.7342476Z',
    createdBy: {
      id: 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      name: 'Erlend Søreide'
    },
    lastModified: '2024-01-31T10:54:20.1534649Z',
    lastModifiedBy: {
      id: 'service|00000000-0000-0000-0000-000000000000',
      name: 'System'
    },
    _etag: '\'ee05407d-0000-0d00-0000-65ba26dc0000\''
  },
  {
    id: '65d19a8c-2d37-4187-8da6-597736a248d1',
    prefix: 'D',
    name: 'Concept',
    metadata: {
      source: {
        template: {
          id: '20034880-bfe7-4f85-aaf5-faaa599723f0',
          name: 'PCAP Template Fast Track v3'
        },
        phase: {
          id: 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
          name: 'Detailed Engineering'
        }
      }
    },
    activityId: 2,
    type: 'Task',
    mandatory: false,
    project: {
      id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
      name: 'Cerisa'
    },
    planned: {
      startDate: '2028-05-09T06:00:00Z',
      endDate: '2029-06-25T15:00:00Z'
    },
    progress: 29,
    dependencies: [],
    raci: {},
    tenantId: '225ff010-9da0-4eac-8997-0febeee9e6a7',
    scope: 'Informatiq.Plan',
    created: '2022-06-23T06:39:11.7212773Z',
    createdBy: {
      id: 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      name: 'Erlend Søreide'
    },
    lastModified: '2024-02-15T07:54:37.952637Z',
    lastModifiedBy: {
      id: 'service|00000000-0000-0000-0000-000000000000',
      name: 'System'
    },
    _etag: '\'03007e1b-0000-0d00-0000-65cdc33d0000\''
  },
  {
    id: 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
    prefix: 'E',
    name: 'Execute',
    metadata: {
      source: {
        template: {
          id: '20034880-bfe7-4f85-aaf5-faaa599723f0',
          name: 'PCAP Template Fast Track v3'
        },
        phase: {
          id: 'd794fd24-5022-4efb-a921-72976b27c3af',
          name: 'Execute'
        }
      }
    },
    activityId: 3,
    type: 'Task',
    mandatory: false,
    project: {
      id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
      name: 'Cerisa'
    },
    planned: {
      startDate: '2029-06-19T06:00:00Z',
      endDate: '2029-10-28T16:00:00Z',
      duration: 132
    },
    progress: 17,
    dependencies: [],
    raci: {},
    tenantId: '225ff010-9da0-4eac-8997-0febeee9e6a7',
    scope: 'Informatiq.Plan',
    created: '2022-06-23T06:39:11.7525308Z',
    createdBy: {
      id: 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      name: 'Erlend Søreide'
    },
    lastModified: '2024-01-15T12:57:02.5100171Z',
    lastModifiedBy: {
      id: 'service|00000000-0000-0000-0000-000000000000',
      name: 'System'
    },
    _etag: '\'6e05506c-0000-0d00-0000-65a52b9e0000\''
  },
  {
    id: '7df38da3-9eea-4abb-812c-ae7464863fa2',
    prefix: 'O',
    name: 'Operate',
    metadata: {
      source: {
        template: {
          id: '20034880-bfe7-4f85-aaf5-faaa599723f0',
          name: 'PCAP Template Fast Track v3'
        },
        phase: {
          id: 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
          name: 'Operate'
        }
      }
    },
    activityId: 4,
    type: 'Task',
    mandatory: false,
    project: {
      id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
      name: 'Cerisa'
    },
    planned: {
      startDate: '2029-11-18T07:00:00Z',
      endDate: '2031-02-21T16:00:00Z',
      duration: 461
    },
    progress: 0,
    raci: {},
    tenantId: '225ff010-9da0-4eac-8997-0febeee9e6a7',
    scope: 'Informatiq.Plan',
    created: '2022-06-23T06:39:11.7528946Z',
    createdBy: {
      id: 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
      name: 'Erlend Søreide'
    },
    lastModified: '2024-01-15T12:57:02.5574482Z',
    lastModifiedBy: {
      id: 'service|00000000-0000-0000-0000-000000000000',
      name: 'System'
    },
    _etag: '\'6e05516c-0000-0d00-0000-65a52b9e0000\''
  }
]

const ACTIVITIES = [
  {
    id: '26019147-8737-42b6-9b5e-2fbe41becb68',
    prefix: 'F',
    name: 'Feasability',
    data: [
      {
        'id': 'e290eb77-bbc7-432b-b377-4b9656593bcb',
        'name': 'Well/Project Initation Note document update test',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': '48a93d6e-da66-4d30-9722-abb5eb3f9a13',
              'name': 'Feasability'
            }
          }
        },
        'activityId': 3,
        'reference': 'F3-0',
        'description': '<p>Key deliverable for the Feasibility Phase, as this note forms the initial definition of the drilling and wells scope and basis for preliminary well designs, time, and cost estimates.\n\nThe document should cover as a minimum:\n- Decision makers and assurance\n- Field/well location and water depth\n- Licence obligations\n- Defined well/project objectives\n- High Level data acquisition plan\n- Preliminary geological information/formation tops\n- Offset wells\n- Reservoir Temperature and Pressure\n- Anticipated spud depth\n- Environmental issues\n- Preliminary formation evaluation/completion requirements\n- Results of any supportive technical studies conducted\n- Key risks and uncertainties present in the well/project at this stage. h</p>',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '26019147-8737-42b6-9b5e-2fbe41becb68',
          'name': 'Feasability'
        },
        'planned': {
          'startDate': '2023-08-30T07:00:00Z',
          'endDate': '2029-09-11T11:00:00Z',
          'duration': 2204.5
        },
        'actual': {
          'endDate': '2024-01-04T08:48:39.604Z'
        },
        'progress': 100,
        'next': {
          'id': '194e17e9-d448-40fd-9ad0-2d03086561f6',
          'name': 'Identification of any additional Feasibility/Technical Subsurface Studies update'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:23.1384102Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-01-31T10:54:20.1554049Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'ee05427d-0000-0d00-0000-65ba26dc0000\''
      },
      {
        'id': '500d4b92-d4c2-4510-96a7-d135ba905ed1',
        'name': 'Kick off Meeting to develop the Well/Project Initiation Note (WIN/PIN)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': '48a93d6e-da66-4d30-9722-abb5eb3f9a13',
              'name': 'Feasability'
            }
          }
        },
        'activityId': 2,
        'reference': 'F2-0',
        'description': '<p style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-bottom: 0px; background-color: rgb(43, 53, 64);\'>ssess&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; text-decoration-line: underline;\'>impact</span>&nbsp;on&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; font-weight: bolder;\'>organization</span>, complexity of well/project and timelines Assure that the TA structure is defined correctly based on complexity and impact of well/project</p><p style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-bottom: 0px; background-color: rgb(43, 53, 64);\'>Assess&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; text-decoration-line: underline;\'>impact</span>&nbsp;on&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; font-weight: 700;\'>organization</span>, complexity of well/project and timelines Assure that the TA structure is defined correctly based on complexity and impact of well/project</p><p style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-bottom: 0px; background-color: rgb(43, 53, 64);\'>Assess&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; text-decoration-line: underline;\'>impact</span>&nbsp;on&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; font-weight: 700;\'>organization</span>, complexity of well/project and timelines Assure that the TA structure is defined correctly based on complexity and impact of well/project df</p><p style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; background-color: rgb(43, 53, 64);\'>Assess&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; text-decoration-line: underline;\'>impact</span>&nbsp;on&nbsp;<span style=\'--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(14 165 233 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; font-weight: 700;\'>organization</span>, complexity of well/project and timelines Assure that the TA structure is defined correctly based on complexity and impact of well/project</p>',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '26019147-8737-42b6-9b5e-2fbe41becb68',
          'name': 'Feasability'
        },
        'planned': {
          'startDate': '2023-07-22T02:00:00Z',
          'endDate': '2023-08-30T11:00:00Z',
          'duration': 40
        },
        'actual': {
          'endDate': '2024-02-02T08:06:08.633Z'
        },
        'progress': 100,
        'next': {
          'id': 'e290eb77-bbc7-432b-b377-4b9656593bcb',
          'name': 'Well/Project Initation Note document'
        },
        'approval': [],
        'dependencies': [
          {
            'id': 'e290eb77-bbc7-432b-b377-4b9656593bcb',
            'type': 'StartToFinish',
            'offset': '00:00:00'
          }
        ],
        'raci': {
          'accountable': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist 123',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader 2',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader 2',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            },
            {
              'id': 'cd2a6b95-b7da-4e81-8849-26135f504379',
              'name': 'Document controller',
              'type': 'Role'
            },
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader 2',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'cd2a6b95-b7da-4e81-8849-26135f504379',
              'name': 'Document controller',
              'type': 'Role'
            },
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          },
          {
            'id': '7f092781-497f-4b14-a47f-6b3799d9da8c',
            'name': 'SME Directional Drilling and Survey Management'
          },
          {
            'id': 'ca718767-87a8-462d-9eb3-c2ea60ad3561',
            'name': 'SME Completions'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:23.1407806Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-02T08:06:08.8558222Z',
        'lastModifiedBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        '_etag': '\'070014d3-0000-0d00-0000-65bca2700000\''
      },
      {
        'id': 'bb867ab8-dd84-41ce-a22d-b533e38dd190',
        'name': 'Internal Review (Prior to Feasibility Gate)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': '48a93d6e-da66-4d30-9722-abb5eb3f9a13',
              'name': 'Feasability'
            }
          }
        },
        'activityId': 16,
        'reference': 'F16-0',
        'description': 'The objectives of this review at the end of Feasibility stage are to;\n\n- Ensure the opportunity has been scoped appropriately\n- Validate that it fits with Corporate Strategy\n- Review the potential value and risks associated with the opportunity\n- Verify that the opportunity is commercially and technically feasible.\n\nDuring the review, the Project Manager and Team will be asked to elaborate or explain the work undertaken and provide reasons behind their recommendations. The Gate review team will make internal decision that the opportunity is;\n\n- Endorsed to present for JV partnership with recommendation to proceed to next phase\n- Placed on hold\n- Dismissed\n- Recycled back into the Feasibility stage for rework and re-submission to the Gate at a later date.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '26019147-8737-42b6-9b5e-2fbe41becb68',
          'name': 'Feasability'
        },
        'planned': {
          'startDate': '2028-09-11T02:00:00Z',
          'endDate': '2035-09-11T11:00:00Z',
          'duration': 2557
        },
        'actual': {},
        'progress': 30,
        'approval': [],
        'dependencies': [
          {
            'id': 'a2364da2-9155-464c-8685-5620a8dd040e',
            'type': 'FinishToStart',
            'offset': '00:00:00'
          }
        ],
        'raci': {
          'accountable': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:24.9905205Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-01-26T09:21:36.4725384Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'e705c69e-0000-0d00-0000-65b379a00000\''
      },
      {
        'id': 'c624aced-a6fd-4c3f-a004-05ea2ccc8329',
        'name': 'New Activity by test',
        'activityId': 202,
        'description': '',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '26019147-8737-42b6-9b5e-2fbe41becb68',
          'name': 'Feasability'
        },
        'planned': {
          'startDate': '2021-08-21T02:00:00Z',
          'endDate': '2021-08-21T11:00:00Z',
          'duration': 1
        },
        'actual': {},
        'progress': 40,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2024-01-17T13:11:35.0317085Z',
        'createdBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        'lastModified': '2024-01-19T09:14:42.3639467Z',
        'lastModifiedBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        '_etag': '\'d3054708-0000-0d00-0000-65aa3d820000\''
      },
      {
        'id': '3985fdd3-9548-482a-aece-4905441f49ac',
        'name': 'New Activity 2',
        'activityId': 203,
        'description': '<p>ttt</p>',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '26019147-8737-42b6-9b5e-2fbe41becb68',
          'name': 'Feasability'
        },
        'planned': {
          'startDate': '2021-08-21T02:00:00Z',
          'endDate': '2021-08-26T11:00:00Z',
          'duration': 6
        },
        'actual': {},
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2024-01-17T13:18:13.20057Z',
        'createdBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        'lastModified': '2024-01-18T11:57:03.1866977Z',
        'lastModifiedBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        '_etag': '\'cf05cec7-0000-0d00-0000-65a9120f0000\''
      }
    ]
  },
  {
    id: '65d19a8c-2d37-4187-8da6-597736a248d1',
    prefix: 'D',
    name: 'Concept',
    data: [
      {
        'id': 'a2364da2-9155-464c-8685-5620a8dd040e',
        'name': 'Project Control and Assurance Plan (update) test',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 57,
        'reference': 'D1-0',
        'description': 'Review any leftovers from the previous phase, deliverables for this phase, and upcoming deliveries.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-10T07:00:00Z',
          'endDate': '2028-09-10T11:00:00Z',
          'duration': 31.5
        },
        'actual': {
          'endDate': '2023-11-14T05:27:50.268Z'
        },
        'progress': 100,
        'next': {
          'id': 'fee0b31f-9a1a-480d-bb8f-838ce9b54a20',
          'name': 'Emergency Response Plans and Bridging Documents'
        },
        'approval': [],
        'raci': {
          'informed': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            },
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '9c8e7e20-7620-4314-b883-3dc2b69abc32',
              'name': 'Global Assurance Team',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            },
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:14.6777837Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.5263716Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03002c1b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': '8c7bc61a-fc30-4445-9b76-fe7db30378bf',
        'name': 'Contracts QUILT',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 61,
        'reference': 'D5-0',
        'description': 'Establish;\nContract duration and re-tender timelines\nTechnical and purchasing contact for Neptune and Service company\nValue and risk per Contract\nContract performance review process\nHSE performance per Contract',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-14T16:00:00Z',
          'duration': 151
        },
        'actual': {
          'endDate': '2023-11-23T13:16:31.2821064Z'
        },
        'progress': 100,
        'next': {
          'id': 'cee49330-51f4-4a04-9b61-6d638b4a330f',
          'name': 'Long Lead Equipment AFE internal review and approval'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:14.6803947Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.5724875Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03002d1b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': 'ed18003e-99aa-47b9-b44d-ce34b19e0c26',
        'name': 'Major Service/Equipment Contracts',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 59,
        'reference': 'D3-0',
        'description': 'Issue letter of award for major service/equipment providers (post sanction - FID or corporate contracts), including:\n\nTubulars\nWell Head/Xmas Tree\nDirectional Drilling and MWD/LWD\nCementing\nDrilling Fluids and Waste Management\nWireline Logging\nCompletions\nWell Test\nLogistics (Helicopters, Supply vessels, standby vessel, onshore logistics base, onshore helicopter base, road transport, waste management, weather forecast).',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2028-10-29T16:00:00Z',
          'duration': 74
        },
        'actual': {
          'endDate': '2023-11-23T13:13:35.176Z'
        },
        'progress': 100,
        'next': {
          'id': 'cbdd7532-f7d9-4b5f-8efd-8d09e3bf2c14',
          'name': 'Establish Contract Incentive Scheme (Class 2 -> AFE)'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:14.6809874Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.6154114Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03002e1b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': 'cbdd7532-f7d9-4b5f-8efd-8d09e3bf2c14',
        'name': 'Establish Contract Incentive Scheme (Class 2 -> AFE)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 62,
        'reference': 'D6-0',
        'description': 'Establish front end contract incentive scheme (Class 2 -> AFE)',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'actual': {
          'endDate': '2023-11-23T13:13:37.795Z'
        },
        'progress': 100,
        'next': {
          'id': '37a23a72-fc6e-418b-ab5f-7e6a37e7b53e',
          'name': 'Ship Collision Study Report / Vessel Traffic Evaluation Report'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:14.9304842Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.6567076Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03002f1b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': 'cee49330-51f4-4a04-9b61-6d638b4a330f',
        'name': 'Long Lead Equipment AFE internal review and approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 63,
        'reference': 'D7-0',
        'description': 'Define Long Lead equipment requirements for the well/project (wellhead, conductor, casing, liner hangers, Xmas tree, completion etc.) perform peer review and submit Long Lead Equipment AFE for internal approval.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 40,
        'next': {
          'id': '85b38fee-4d9a-4a34-b9d7-5ecdcf2fe332',
          'name': 'Rig Acceptance Test and Rig Verification'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.1744219Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.6970932Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300301b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': 'd7bd2c4d-2871-4e0c-ab56-2e9b16bd4d37',
        'name': 'Long Lead Equipment AFE JV partnership approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 64,
        'reference': 'D8-0',
        'description': 'Key deliverable for Detailed Engineering stage.\nObtain JV Partnership approval of Long Lead Equipment AFE (JV TCM Project Sanction) coordinated by the Project Manager',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2028-08-17T06:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'next': {
          'id': '35a91e35-936a-4d0e-8e80-848abc8bbef5',
          'name': 'Detailed SIMOPS Assessment'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            },
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.420153Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.7389194Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300311b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': '31194d8f-1915-4f2c-b9a4-49d952c68d57',
        'name': 'Wellbore Registration Document to NPD (OD)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 65,
        'reference': 'D9-0',
        'description': 'Register well with NPD, and establish well identification number (min. 14days before spud)',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'actual': {
          'endDate': '2023-11-23T13:13:32.596Z'
        },
        'progress': 100,
        'next': {
          'id': 'ed18003e-99aa-47b9-b44d-ce34b19e0c26',
          'name': 'Major Service/Equipment Contracts'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.6154764Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.780262Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300331b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': '35a91e35-936a-4d0e-8e80-848abc8bbef5',
        'name': 'Detailed SIMOPS Assessment',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 66,
        'reference': 'D10-0',
        'description': 'Conduct detailed SIMOPS Assessment with multi-discipline team.\nThe level of simultaneous operations in this assessment is between the rig, vessel, facilities, etc operating within the immediate area of the well or project.\nEnd result could be a signed off Project Specific Matrix of Permittable Operation (MOPO)',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 39,
        'next': {
          'id': '897f828b-f0ca-4d35-8e98-026587bb6b3b',
          'name': 'Waste Management Plan'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '662effb9-00cb-433d-b2f9-c45b94247494',
            'name': 'SME Marine'
          },
          {
            'id': '35918778-aa06-49a9-a7e7-454070664443',
            'name': 'SME Subsea'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.6656152Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.8246705Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300341b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': '37a23a72-fc6e-418b-ab5f-7e6a37e7b53e',
        'name': 'Ship Collision Study Report / Vessel Traffic Evaluation Report',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 67,
        'reference': 'D11-0',
        'description': 'Identify risks of ship collision and location vessel traffic',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 90,
        'next': {
          'id': 'cee49330-51f4-4a04-9b61-6d638b4a330f',
          'name': 'Long Lead Equipment AFE internal review and approval'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.8344957Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.8640884Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300351b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': 'd418fac8-60c7-4fd7-aa3d-58d5cc46b134',
        'name': 'Site Specific Emergency Preparedness Assessment SSEPA',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 68,
        'reference': 'D12-0',
        'description': 'Conduct detailed risk assessment (HAZID) with multi-discipline team.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-09-27T06:00:00Z',
          'endDate': '2028-11-14T16:00:00Z',
          'duration': 49
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.856329Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.9065519Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300371b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': '593261ae-795a-49d4-9f93-2f181d099042',
        'name': 'Site Specific Risk Assessment SSRA',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 69,
        'reference': 'D13-0',
        'description': 'Conduct detailed risk assessment (HAZID) with multi-discipline team.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2028-10-03T15:00:00Z',
          'duration': 48
        },
        'actual': {},
        'progress': 20,
        'next': {
          'id': 'f4352b8b-8fa3-45cf-9e93-b009550bbdd1',
          'name': 'Well Specific Risk Assessment WSRA'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:15.9118689Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.9501306Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300381b-0000-0d00-0000-65cdc3370000\''
      },
      {
        'id': 'f4352b8b-8fa3-45cf-9e93-b009550bbdd1',
        'name': 'Well Specific Risk Assessment WSRA',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 70,
        'reference': 'D14-0',
        'description': 'Conduct detailed risk assessment (HAZID) with multi-discipline team.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'actual': {},
        'progress': 40,
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.0744205Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:31.9928807Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300391b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '5ac49360-9c60-4d4a-86b1-98ffcdc541df',
        'name': 'HSEQ Management Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 71,
        'reference': 'D15-0',
        'description': 'Departmental and rig specific HSEQ management plan for the well/project.\n- Align with company HSEQ priorities\n- Align with departmental HSEQ priorities\n- Align with Major contractors HSEQ priorities\n- Outlines expectations, audit schedules, targets and KPIs',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-12-11T07:00:00Z',
          'endDate': '2029-04-07T15:00:00Z',
          'duration': 118
        },
        'actual': {
          'endDate': '2024-01-01T18:00:00Z'
        },
        'progress': 100,
        'next': {
          'id': 'f36b5c47-faa5-4796-a7a9-228d31693e3b',
          'name': 'Emergency Response Table Top Exercise'
        },
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.1009571Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.0369088Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03003a1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'fee0b31f-9a1a-480d-bb8f-838ce9b54a20',
        'name': 'Emergency Response Plans and Bridging Documents',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 72,
        'reference': 'D16-0',
        'description': 'Risk Description\nBridging document\nRisk Management\nEmergency Response Resources\nContingency plans\nCompetencies, training and drill\nCommunication Protocols',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2029-01-11T07:00:00Z',
          'endDate': '2029-06-09T15:00:00Z',
          'duration': 150
        },
        'actual': {
          'endDate': '2023-11-23T13:13:29.891Z'
        },
        'progress': 100,
        'next': {
          'id': '31194d8f-1915-4f2c-b9a4-49d952c68d57',
          'name': 'Wellbore Registration Document to NPD (OD)'
        },
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.1513625Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.0785635Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03003b1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'f36b5c47-faa5-4796-a7a9-228d31693e3b',
        'name': 'Emergency Response Table Top Exercise',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 73,
        'reference': 'D17-0',
        'description': 'Full run through of a 3rd Line Emergency Scenario\n- Test interfaces\n- Test response and escalation',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-19T06:00:00Z',
          'endDate': '2028-11-10T16:00:00Z',
          'duration': 84
        },
        'actual': {},
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            },
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.2326748Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.1184761Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03003c1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'baf88df7-6cbb-46fa-9501-e840a0eb4819',
        'name': 'Quality and Assurance Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 74,
        'reference': 'D18-0',
        'description': 'Outline;\nEstablish Non-Conformance Reporting process and register\nEstablish Inspection requirements and standards\nEstablish audit schedule\nEstablish KPIs',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2029-01-27T07:00:00Z',
          'endDate': '2029-06-25T15:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'next': {
          'id': 'fe9b7d40-5f17-4da7-aee7-ad4348aa6ecd',
          'name': 'Plume Simulation Report'
        },
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.339151Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.1623604Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03003d1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '897f828b-f0ca-4d35-8e98-026587bb6b3b',
        'name': 'Waste Management Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 75,
        'reference': 'D19-0',
        'description': 'Define;\nCompetencies\nTypes and Volumes\nWaste handling methods\nFacilities',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 50,
        'next': {
          'id': 'd418fac8-60c7-4fd7-aa3d-58d5cc46b134',
          'name': 'Site Specific Emergency Preparedness Assessment SSEPA'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.3419493Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.2030617Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03003e1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'fe9b7d40-5f17-4da7-aee7-ad4348aa6ecd',
        'name': 'Plume Simulation Report ',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 76,
        'reference': 'D20-0',
        'description': 'Identify behaviour of the HC plume in event of a blowout to identify capping feasibility, explosion risk, rig/vessel risks etc.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 53,
        'approval': [],
        'raci': {
          'consulted': [
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.3925325Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.2477134Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03003f1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'd57e5358-4891-4d2e-8af1-7cdc572325d2',
        'name': 'Well Control Contingency Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 77,
        'reference': 'D21-0',
        'description': 'The Well Control Contingency Plan provides strategy guidelines without specific well or site information, to;\nMinimize the response time\nLink the main response plans in a detailed document in order to have immediate action in all well\ncontrol situations \nEstablish the well containment plan to regain well control ( well kill, well capping and relief well)\nHave clear organization chart for activities',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 34,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': 'c3cf794a-c064-4f83-86f9-6a4e92e521cb',
            'name': 'SME Well Control'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.4716281Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.2871515Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300401b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '945792d8-5ae0-4e07-8770-f86ef5806b4a',
        'name': 'Source Control Emergency Response Plan (SCERP) - Capping Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 78,
        'reference': 'D22-0',
        'description': 'Departmental source control emergency response plan (capping plan) covering;\nOrganizational aspects\nTechnical capping equipment aspects \nTechnical interface aspects\nMobilization aspects\n\nThe plan is intended to be functional for the relevant wells scope at all times and is to be complemented with the well specific relief well program on a well by well basis',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '35918778-aa06-49a9-a7e7-454070664443',
            'name': 'SME Subsea'
          },
          {
            'id': 'c3cf794a-c064-4f83-86f9-6a4e92e521cb',
            'name': 'SME Well Control'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.5777235Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.3280606Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300411b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '7b5d7d75-ca99-4753-91d9-6ad7b22860d8',
        'name': 'Relief Well Program',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 79,
        'reference': 'D23-0',
        'description': 'Develop well specific conceptual relief well program',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '7f092781-497f-4b14-a47f-6b3799d9da8c',
            'name': 'SME Directional Drilling and Survey Management'
          },
          {
            'id': '70c79188-ef17-4721-b16e-350513519fb5',
            'name': 'SME Rig intake and Rig projects'
          },
          {
            'id': 'c3cf794a-c064-4f83-86f9-6a4e92e521cb',
            'name': 'SME Well Control'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.6331199Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.3698128Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300421b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '20db76c7-6e4d-43c3-b008-bf8efbce3d5d',
        'name': 'Oil Spill Contingency Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 80,
        'reference': 'D24-0',
        'description': 'Develop Oil Spill Plan and  Beredskapsanalyse',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-29T07:00:00Z',
          'endDate': '2029-03-27T15:00:00Z',
          'duration': 150
        },
        'progress': 44,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.7221842Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.4133498Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300431b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '4037cf45-55af-47e2-a142-e409002e6be7',
        'name': 'Wells Cost Estimate Class 3 / AFE Internal review and approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 81,
        'reference': 'D25-0',
        'description': 'Generate AFE quality (+/-10%) cost estimate. If significantly greater than previously approved Budgetary Cost Estimate i.e. > 10% then re-submit for approval both internally and by JV partnership',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4f831664-69a5-411e-8fd2-dab9ab6d53b5',
            'name': 'SME Cost Engineering'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.8186192Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.4532494Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300441b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '88f6170c-8912-42d8-83db-8f216639623b',
        'name': 'Wells Cost Estimate Class 3 / AFE JV partnership approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 82,
        'reference': 'D26-0',
        'description': 'Obtain JV Partnership approval of the well Wells Cost Estimate Class 3 / AFE (JV TCM Project Sanction) coordinated by the Project Manager',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T06:00:00Z',
          'endDate': '2029-03-26T15:00:00Z',
          'duration': 150
        },
        'progress': 48,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.8727692Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.496835Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300451b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'a1e0b723-71e9-4305-8c3b-f0c3acd9784d',
        'name': 'Project Cost tracking Model for AFE',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 83,
        'reference': 'D27-0',
        'description': 'Define cost breakdown; Project, Well, Section, Activity, contract, etc\nDefine tracking levels',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4f831664-69a5-411e-8fd2-dab9ab6d53b5',
            'name': 'SME Cost Engineering'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:16.9607939Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.5407371Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300461b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '06e1b68c-c957-4fcd-a175-0e5a434c984a',
        'name': 'Data Acquisition Programme(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 84,
        'reference': 'D28-0',
        'description': 'Key deliverable for Detailed Engineering stage.\nDetailed geological programme including, but not limited to:\n- Well Location and water depth\n- Shallow Hazards Assessment\n- Lithology and Formation Tops\n- Reservoir Description and Fluid PVT\n- PPFG and WBS\n- Temperature\n- Sampling Programme\n- Outline Coring Programme\n- Wireline Logging Programme\n- LWD Programme\n- Biostratigraphy\n- Section TD criteria.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T06:00:00Z',
          'endDate': '2029-03-26T15:00:00Z',
          'duration': 150
        },
        'progress': 45,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.0590078Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.5863167Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300471b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'a5d064aa-a4aa-43f8-b21b-8fd86d68d46b',
        'name': 'Data Acquisition Programme Internal Peer-Review',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 85,
        'reference': 'D29-0',
        'description': 'Peer review of Data Acquisition Programme.\nThe review team shall include Well Engineers, Drilling Superintendent, Operations Geologist, Subsurface Team Lead, Wells Manager.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.1201137Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.6271305Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300481b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'cd161621-a29d-4a74-9f56-5b4c37a0e15e',
        'name': 'Activity Programme(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 86,
        'reference': 'D30-0',
        'description': 'Key deliverable for Detailed Engineering stage.\nDetailed operational programmes (Drilling and Completion etc) to include:\n- Well Schematics\n- Key subsurface inputs (lithology, PPFG, WBS, temperature, formation tops, etc.)\n- Key Risks, Challenges and Objectives by Phase\n- Well Control Requirements and Barriers by Phase\n- Operational Steps and Instructions by Phase\n- Critical Steps in each phase (pressure testing, LOT/FIT, etc.).\n- BHA programme, Directional Programme, Fluids programme, Cement Programme, Upper/Lower Completion requirements etc.\n- Criteria for executing contingency plans defined',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-27T06:00:00Z',
          'endDate': '2029-03-25T15:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'consulted': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.2014795Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.6673876Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300491b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'a213857e-cc32-4d4f-94de-77ae0124dc70',
        'name': 'Activity Programme(s) Internal Peer-Review',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 87,
        'reference': 'D31-0',
        'description': 'Peer review of Operational Programmes (Drilling and Completion etc.). The review team shall include Well Engineers, Drilling Superintendent, Ops Geologist, Wells Manager and relevant SMEs',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 52,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.2773734Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.714199Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03004a1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '8dc642c7-6eab-4a12-8458-12b7ca7a388e',
        'name': 'Activity Programme(s) Internal approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 88,
        'reference': 'D32-0',
        'description': 'Drilling\nCompletion\nData Acquisition\nLogistics\nWaste Management\nEmergency Response Plans\nSIMOPS programs\nAcceptance criteria per section; pressure tests, inflow tests, cement heights etc.\n\nKey deliverable for Detailed Engineering stage.\nApprove, sign and distribute the final operational programmes to the team members, drilling contractor and service companies and JV partners.\n\nAny changes to activity programmes require a MoC',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T06:00:00Z',
          'endDate': '2029-03-26T15:00:00Z',
          'duration': 150
        },
        'progress': 46,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          },
          {
            'id': 'ca718767-87a8-462d-9eb3-c2ea60ad3561',
            'name': 'SME Completions'
          },
          {
            'id': '7f092781-497f-4b14-a47f-6b3799d9da8c',
            'name': 'SME Directional Drilling and Survey Management'
          },
          {
            'id': '73e9f219-b6a1-49a3-9e45-3aa1a7983949',
            'name': 'SME Drilling, Completions and Cementing fluids'
          },
          {
            'id': '35918778-aa06-49a9-a7e7-454070664443',
            'name': 'SME Subsea'
          },
          {
            'id': 'c3cf794a-c064-4f83-86f9-6a4e92e521cb',
            'name': 'SME Well Control'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.3008786Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.7660691Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03004b1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'd2d5d8b0-90c7-42b0-a4a6-3bcdda60f350',
        'name': 'Well Acceptance Criteria and Program Execution Checklist (WAC/PEC) (Well Examination)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 89,
        'reference': 'D33-0',
        'description': 'Develop well specific Well Acceptance Criteria and Program Execution Checklist (WAC/PEC)  to ensure the well is planned in compliance with regulatory requirements, company policies and procedures, industry standards and codes, and that any necessary dispensation/MoC documents are in place.\nEstablish communication protocol, and ensure process is established to record and file Well Acceptance Criteria evidence.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 53,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.3608449Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.8134015Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03004c1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'b6defe44-0e6d-4bb5-80fc-29ad456f5c49',
        'name': 'Detailed Fluids Programme(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 90,
        'reference': 'D34-0',
        'description': 'Key Deliverable for Detailed Engineering Phase\n\nDrilling fluids program (including mud loss mitigation plan)\nCompletion fluids program\nCement programs',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-27T06:00:00Z',
          'endDate': '2029-03-25T15:00:00Z',
          'duration': 150
        },
        'progress': 32,
        'approval': [],
        'raci': {
          'consulted': [
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '73e9f219-b6a1-49a3-9e45-3aa1a7983949',
            'name': 'SME Drilling, Completions and Cementing fluids'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.4456883Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.859499Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03004d1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '633687cd-2b38-4600-9d57-0be9dd2db5da',
        'name': 'Application for Consent (AfC) Developed ready for review',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 91,
        'reference': 'D35-0',
        'description': 'Key deliverable for Detailed Engineering Phase.\nThe approval of the well AfC will be based on recommendations from the peer review team that provided independent assurance for technical work and ensured consistency of application of good practices on the project.\nWhen approved, all further planning and execution will be performed in accordance with the frame given in the AfC.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-28T07:00:00Z',
          'endDate': '2029-03-27T07:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.5216018Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.9075605Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03004e1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '3b6460a2-f54a-4d40-9a32-c844aa889f4c',
        'name': 'Application for Consent (AfC) Internal review and approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 92,
        'reference': 'D36-0',
        'description': 'Provide independent assurance for technical work and ensured consistency of application of good practices on the project',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-26T06:00:00Z',
          'endDate': '2029-03-24T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.5446064Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.9473084Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03004f1b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': '8d3b00e8-fab4-46e5-806b-4ae9180992d1',
        'name': 'Application for Consent (AfC) Submittal to Ptil (PSA)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 93,
        'reference': 'D37-0',
        'description': 'Submit to Ptil (PSA) minimum 9 weeks ahead of Spud',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-25T06:00:00Z',
          'endDate': '2029-03-23T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.5992249Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:32.9927123Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300501b-0000-0d00-0000-65cdc3380000\''
      },
      {
        'id': 'a043cfe8-e732-46d4-bde6-8a0d4b96a9e8',
        'name': 'Application for Consent (AfC) Approved by Ptil (PSA)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 94,
        'reference': 'D38-0',
        'description': 'Application for Consent (AfC) Approved by Ptil (PSA) ahead of Spud',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-09-27T06:00:00Z',
          'endDate': '2028-09-27T06:00:00Z',
          'duration': 0
        },
        'progress': 48,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.686762Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.0333935Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300511b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '3e2a705e-347a-48b2-bad3-cebcf2b92f45',
        'name': 'Application for Discharge (AfD) Developed ready for review',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 95,
        'reference': 'D39-0',
        'description': 'Key deliverable for Detailed Engineering Phase.\nThe approval of the well AfD will be based on recommendations from the peer review team that provided independent assurance for technical work and ensured consistency of application of good practices on the project.\nWhen approved, all further planning and execution will be performed in accordance with the frame given in the AfD.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-09-18T06:00:00Z',
          'endDate': '2029-02-14T16:00:00Z',
          'duration': 150
        },
        'progress': 39,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.7441422Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.0776882Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300521b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '69768c90-26a5-4b17-be73-c84f696281b3',
        'name': 'Application for Discharge (AfD) Internal review and approval',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 96,
        'reference': 'D40-0',
        'description': 'Provide independent assurance for technical work and ensured consistency of application of good practices on the project',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-09-27T06:00:00Z',
          'endDate': '2029-02-23T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.7577235Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.1200457Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300531b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': 'dc8795bd-a267-4da6-b75a-de6e17bd0a99',
        'name': 'Application for Discharge (AfD) Submittal to Miljødirektoratet (Mdir)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 97,
        'reference': 'D41-0',
        'description': 'Submit to Miljødirektoratet (Mdir) minimum 15 weeks ahead of Spud',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-09-18T06:00:00Z',
          'endDate': '2028-09-18T06:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.7807873Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.173947Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300541b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '237aa972-69b1-4829-85a0-7c29aab35f42',
        'name': 'Application for Discharge (AfD) Approved by Miljødirektoratet (Mdir)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 98,
        'reference': 'D42-0',
        'description': 'Application for Discharge (AfD) Approved by Miljødirektoratet (Mdir) ahead of Spud',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-31T07:00:00Z',
          'endDate': '2028-10-31T07:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.8407385Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.2635126Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300551b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '577faa9d-c64a-4a9c-b054-fcb7db9c2440',
        'name': 'Obtain Mandatory Pre-Spud Approvals (PLANC)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 99,
        'reference': 'D43-0',
        'description': 'Key milestone for Detailed Engineering stage.\n\nFollow the PLANC process. Submit the necessary notifications and obtain the required pre-spud approvals, for example:\n\n- Consent to Locate\n- Consent to Drill\n- Oil Pollution Emergency Plan (OPEP)\n- Oil Discharge Permit \n- Notification of Well Operations (HSE Notification)\n- Notification od Combined Operations\n- Financial Responsibility\n- EIA Direction for Chemical Permits (PONs/WONs)\n- Combined Operations Bridging Documents, etc.',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-11-01T07:00:00Z',
          'endDate': '2028-11-01T07:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.9227021Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.3116272Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300561b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '0f51eed7-8eb9-4948-a667-af1abd702a1c',
        'name': 'Well Specific Well Handover Certificate template',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 100,
        'reference': 'D44-0',
        'description': 'To be defined between the Asset team and Drilling and Wells',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-29T07:00:00Z',
          'endDate': '2029-03-27T15:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            },
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          },
          {
            'id': 'ca718767-87a8-462d-9eb3-c2ea60ad3561',
            'name': 'SME Completions'
          },
          {
            'id': '35918778-aa06-49a9-a7e7-454070664443',
            'name': 'SME Subsea'
          },
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:17.9823624Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.3529181Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300571b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': 'b2e81c93-589e-49af-8ed2-e9450a769dd8',
        'name': 'Purchase to Pay (P2P)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 101,
        'reference': 'D45-0',
        'description': 'Resources to handle PRs, Pos and Invoices in place\nAll PO commitments issued',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 52,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.0170482Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.4096045Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300581b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': 'f6208765-9a63-4299-8100-f96a50d8d06e',
        'name': 'Hole Section Guidelines',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 102,
        'reference': 'D46-0',
        'description': 'Detailed operational steps and operating envelopes in accordance with activity programs\nDetailed activity risks and hazards\nIncludes all supporting documentation, specs, and procedures for all equipment being run.\nEverything stored in the Collaborative Well File',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.0853969Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.4494648Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03005a1b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '035ef145-6f5d-4951-aaea-d95a09301c5c',
        'name': 'DOPs (80%)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 103,
        'reference': 'D47-0',
        'description': 'Detailed operational procedures in accordance with activity programs and hole section guidelines.\nDetailed activity risks and hazards\nIncludes all supporting documentation, specs, and procedures for all equipment being run.\nEverything stored in the Collaborative Well File',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.0932606Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.4932964Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03005b1b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '915227c1-b757-47af-87ff-230e4b45eae5',
        'name': 'Establish well in EDM/Openwells',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 104,
        'reference': 'D48-0',
        'description': 'Set up well in the Open Wells/EDM database.\nPopulate Openwells/EDM planning module',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'informed': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.2277825Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.535717Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03005c1b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '5f5b4c32-4b32-4a3a-a110-cdcf0607e505',
        'name': 'Well Duty team and roster',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 105,
        'reference': 'D49-0',
        'description': 'Ensure correct composition of team\nUpdated phone numbers and emails\nDuty handover sheets\nEtc',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.2704778Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.5833879Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03005d1b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '2a2c58ac-bc54-4830-9ccc-227a00129bda',
        'name': 'Draft Master Equipment List (MEL) (must be ready prior well on paper exercises)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 106,
        'reference': 'D50-0',
        'description': 'Generate Master Equipment List (MEL) for drilling, coring/logging and well test operations per operational phase. The equipment list will be generated in Excel and managed by a Materials and Logistics Coordinator. The inputs will be obtained from relevant well engineer (drilling and completion), a drilling contractor and service companies.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.3219796Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.6316974Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03005e1b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '85da2ac4-fc97-4cfe-909f-e420820af38e',
        'name': 'LogisticsWOP workshop',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 107,
        'reference': 'D51-0',
        'description': 'Prepare and hold Logistics Well on Paper exercise involving key service companies, internal operational team and JV partners to discuss, agree and optimize the logistics process.\n- Clearly defined expected outcome\n- Key staff involved\n- Pre-reads distributed',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.4653236Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.6744884Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03005f1b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '20ae0dcd-6b85-424c-a2d0-bffc520676c1',
        'name': 'LoggingWOP workshop',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 108,
        'reference': 'D52-0',
        'description': 'Prepare and hold Logging Well on Paper (LWOP) meeting with key service companies, operational team and JV partners to agree on final data acquisition (coring and logging) programme.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.4968423Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.7189136Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300601b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': 'a361c36e-9717-49b6-b073-21d6146b68d2',
        'name': 'Key Logistics information',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 109,
        'reference': 'D53-0',
        'description': 'Develop overview of key logistic information for the well/project and define;\nContacts and roles and responsibilities\nLogistics system\nTransportation to installation (equipment/bulk/personnel)\nTransportation from installation (equipment/bulk/personnel)',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.5088194Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.7628016Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300611b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '764ee7d7-8ec0-49a7-af4a-8314a3468e0f',
        'name': 'DWOP/CWOP workshop',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 110,
        'reference': 'D54-0',
        'description': 'Prepare and hold Drill and/or Complete Well on Paper (DWOP/CWOP) exercise involving key service companies, internal operational team and JV partners to discuss, agree and optimize the operational programme.\n- Clearly defined expected outcome\n- Key staff involved\n- Pre-reads distributed',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'next': {
          'id': 'e881ad64-b90f-48b7-b139-9aa3853727e5',
          'name': 'Rig HSE Plan'
        },
        'approval': [],
        'raci': {
          'consulted': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.6336718Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.8024606Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300621b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '85b38fee-4d9a-4a34-b9d7-5ecdcf2fe332',
        'name': 'Rig Acceptance Test and Rig Verification',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 111,
        'reference': 'D55-0',
        'description': 'Key Deliverable prior to Operational Readiness Statement. \nSigned off Rig Acceptance Checklists handed over from the Rig Intake team to the Wells Operations team.\nDocumentation should include conducted tests, verifications, and outstanding actions register at a minimum.',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2028-08-17T06:00:00Z',
          'duration': 0
        },
        'progress': 59,
        'next': {
          'id': 'd7bd2c4d-2871-4e0c-ab56-2e9b16bd4d37',
          'name': 'Long Lead Equipment AFE JV partnership approval'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '70c79188-ef17-4721-b16e-350513519fb5',
            'name': 'SME Rig intake and Rig projects'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.7034783Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.8452561Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300631b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': 'e881ad64-b90f-48b7-b139-9aa3853727e5',
        'name': 'Rig HSE Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 112,
        'reference': 'D56-0',
        'description': 'Yearly rig specific HSE plan that describes Neptune Energies HSE requirements, and the activities that are planned to meet these targets.',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2028-08-17T06:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.7361776Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.8866781Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300641b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': 'e47b69c0-daaa-4b0c-af9a-208b1ac76e26',
        'name': 'Site Specific Rig Positioning and Mooring Analysis',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 113,
        'reference': 'D57-0',
        'description': 'Develop rig positioning program and mooring analysis',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '662effb9-00cb-433d-b2f9-c45b94247494',
            'name': 'SME Marine'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.8787492Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.9269309Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300651b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '4a54e797-78af-453e-bb28-f0d2c20d79a9',
        'name': 'Rig Move Meeting',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 114,
        'reference': 'D58-0',
        'description': 'Conduct a rig move meeting to review the detailed procedure, logistics support and vessel specifications, risks and mitigations. The meeting should be organized by the drilling contractor and attended by drilling, the logistics teams and the drilling contractor\'s marine assurance company.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-17T06:00:00Z',
          'endDate': '2029-01-13T16:00:00Z',
          'duration': 150
        },
        'progress': 61,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '662effb9-00cb-433d-b2f9-c45b94247494',
            'name': 'SME Marine'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.9426094Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:33.9698005Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300661b-0000-0d00-0000-65cdc3390000\''
      },
      {
        'id': '8d1d2498-9d12-4b51-aa0c-dfc23a2cbe7f',
        'name': 'End Of Detailed Engineering Phase - Operational Readiness Statement',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'c54396b7-f7d4-4830-a447-36b7c4d4d380',
              'name': 'Detailed Engineering'
            }
          }
        },
        'activityId': 115,
        'reference': 'D59-0',
        'description': 'End of Detailed Engineering',
        'type': 'DecisionGate',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2029-01-14T07:00:00Z',
          'endDate': '2029-01-14T07:00:00Z',
          'duration': 0
        },
        'progress': 38,
        'approval': [
          {
            'approved': '2023-10-20T13:09:39.01Z',
            'role': {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist'
            },
            'approvedBy': {
              'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
              'name': 'Utpaul Sarkar'
            }
          }
        ],
        'raci': {
          'consulted': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            },
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            },
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            },
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'informed': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:18.9779057Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:34.0107502Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300671b-0000-0d00-0000-65cdc33a0000\''
      },
      {
        'id': 'd2949012-f25a-4a9a-91f0-6956474ceedc',
        'name': 'Check for fish',
        'activityId': 152,
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-14T06:00:00Z',
          'endDate': '2028-11-02T16:00:00Z',
          'duration': 20
        },
        'progress': 0,
        'approval': [],
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2022-10-10T08:13:47.171557Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:34.0582456Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'0300691b-0000-0d00-0000-65cdc33a0000\''
      },
      {
        'id': '247104a0-fcd7-4807-8130-6961fd245c47',
        'name': 'test proceedure',
        'activityId': 153,
        'type': 'Product',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-10-08T06:00:00Z',
          'endDate': '2028-11-17T16:00:00Z',
          'duration': 41
        },
        'progress': 0,
        'approval': [],
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-01-02T10:43:22.7052619Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-02-15T07:54:34.1029883Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03006a1b-0000-0d00-0000-65cdc33a0000\''
      },
      {
        'id': '6207cb9e-0355-4832-af52-c185fe856dab',
        'name': 'New Activity',
        'activityId': 178,
        'description': '',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-07T06:00:00Z',
          'endDate': '2028-08-07T15:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-08-22T10:05:53.8552418Z',
        'createdBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        'lastModified': '2024-02-15T07:54:34.1593138Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03006b1b-0000-0d00-0000-65cdc33a0000\''
      },
      {
        'id': '22c34d9c-3950-41d2-ad40-f92fb5bf6400',
        'name': 'New Activity ggggg',
        'activityId': 179,
        'description': '',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-07T06:00:00Z',
          'endDate': '2028-08-07T15:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-08-22T10:06:12.832732Z',
        'createdBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        'lastModified': '2024-02-15T07:54:34.2003219Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03006c1b-0000-0d00-0000-65cdc33a0000\''
      },
      {
        'id': '178cd54c-ab61-4c11-8577-0659773f2056',
        'name': 'New Activity gccc',
        'activityId': 180,
        'description': '',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-08-07T06:00:00Z',
          'endDate': '2028-08-07T15:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-08-22T10:06:31.696151Z',
        'createdBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        'lastModified': '2024-02-15T07:54:34.2521327Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03006d1b-0000-0d00-0000-65cdc33a0000\''
      },
      {
        'id': 'c43eb8f6-e0ab-4047-a8de-e49099f04a6c',
        'name': 'test by utpaul',
        'activityId': 185,
        'description': '',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '65d19a8c-2d37-4187-8da6-597736a248d1',
          'name': 'Concept'
        },
        'planned': {
          'startDate': '2028-05-09T06:00:00Z',
          'endDate': '2028-05-09T15:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-08-28T07:13:30.5019959Z',
        'createdBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        'lastModified': '2024-02-15T07:54:34.3083245Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'03006e1b-0000-0d00-0000-65cdc33a0000\''
      }
    ]
  },
  {
    id: 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
    prefix: 'E',
    name: 'Execute',
    data: [
      {
        'id': '9b20fb89-d976-4280-87ba-356595279ea9',
        'name': 'Establish End of Well Report (EOWR)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 120,
        'reference': 'E5-0',
        'description': 'Set up collaborative report in Xait (or other file domain)\nEstablish chapter owners\nMinimum input\nDeadlines',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-20T06:00:00Z',
          'endDate': '2029-07-19T15:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'consulted': [
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:20.6107153Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.2909651Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801e39b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': 'f5f2b9ac-fc69-4c51-b038-c04f1bb8992f',
        'name': 'Implement conditions outlined in Application for Consent (AfC)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 116,
        'reference': 'E1-0',
        'description': 'Ensure that the activity is executed in accordance with conditions in the Application for Consent (AfC)',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-23T06:00:00Z',
          'endDate': '2029-07-22T15:00:00Z',
          'duration': 30
        },
        'actual': {
          'endDate': '2023-11-23T13:16:34.766509Z'
        },
        'progress': 100,
        'next': {
          'id': '1a7132b1-ee21-49e6-b3d6-ccb4c47a360a',
          'name': 'Establish Contract Incentive Scheme (AFE -> actual)'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:20.6114732Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.4833098Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801e59b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '764b07c7-6238-4d6b-91ec-3825cffb4e2f',
        'name': 'Implement conditions outlined in  Application for Discharge (AfD) update',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 117,
        'reference': 'E2-0',
        'description': 'Ensure that the activity is executed in accordance with conditions in the Application for Discharge (AfD)',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-26T06:00:00Z',
          'endDate': '2029-07-25T15:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'next': {
          'id': '1a7132b1-ee21-49e6-b3d6-ccb4c47a360a',
          'name': 'Establish Contract Incentive Scheme (AFE -> actual)'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:20.6117595Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2024-01-22T12:17:52.9817676Z',
        'lastModifiedBy': {
          'id': 'user|378e74a8-4a46-4d6c-8dc2-0ec9ec322399',
          'name': 'Utpaul Sarkar'
        },
        '_etag': '\'d9059f7d-0000-0d00-0000-65ae5cf00000\''
      },
      {
        'id': '1a7132b1-ee21-49e6-b3d6-ccb4c47a360a',
        'name': 'Establish Contract Incentive Scheme (AFE -> actual)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 118,
        'reference': 'E3-0',
        'description': 'Establish execution contract incentive scheme (AFE -> actual)',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-21T06:00:00Z',
          'endDate': '2029-07-20T15:00:00Z',
          'duration': 30
        },
        'progress': 26,
        'next': {
          'id': '5a50d0b5-2b6b-4213-a5fb-c5240938e5a6',
          'name': 'Establish 3rd Party Invoice Management Process'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            },
            {
              'id': '0ad91e6f-a763-455f-8bca-fa97aa94757c',
              'name': 'Procurement',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:20.6178002Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.5878286Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801e79b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '1e3c7fbe-660a-4090-a0ed-0fb639871e24',
        'name': 'Establish routines to generate and distribute Operational Reports',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 119,
        'reference': 'E4-0',
        'description': 'Key deliverable for Execute stage.\nSet up operational reporting and distribution lists in accordance with Communication and reporting guideline for Wells Operations.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-22T06:00:00Z',
          'endDate': '2029-07-21T15:00:00Z',
          'duration': 30
        },
        'progress': 58,
        'next': {
          'id': '5a50d0b5-2b6b-4213-a5fb-c5240938e5a6',
          'name': 'Establish 3rd Party Invoice Management Process'
        },
        'approval': [],
        'raci': {
          'consulted': [
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:20.6184007Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.0576569Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801df9b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '5a50d0b5-2b6b-4213-a5fb-c5240938e5a6',
        'name': 'Establish 3rd Party Invoice Management Process',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 121,
        'reference': 'E6-0',
        'description': 'Set up invoice management / approval process including assignment of technical (Ops Geologist / Well Engineer / Drilling Superintendent) and financial (Drilling Superintendent / Wells Managers) approver roles.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-20T06:00:00Z',
          'endDate': '2029-07-19T15:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '9c8e7e20-7620-4314-b883-3dc2b69abc32',
              'name': 'Global Assurance Team',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:20.8507649Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.8857196Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801ec9b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': 'a4c0dabc-a1df-42eb-983d-e901efc94c39',
        'name': 'Establish routines for daily/weekly cost and performance tracking reports',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 122,
        'reference': 'E7-0',
        'description': 'Set up and agree the format for daily/weekly cost and performance tracking reports.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-21T06:00:00Z',
          'endDate': '2029-07-20T15:00:00Z',
          'duration': 30
        },
        'progress': 36,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:21.0213531Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.8863071Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801ed9b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '2a4c89b9-68f8-4462-ab57-3e11602aaef6',
        'name': 'Communications Protocol',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 123,
        'reference': 'E8-0',
        'description': 'Set up and communicate well/project communications protocol.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-21T06:00:00Z',
          'endDate': '2029-07-20T15:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:21.1881738Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.9377212Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801ee9b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '2e6203ce-0445-4f30-8bce-cc201d156dea',
        'name': 'DOPs (90%)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 124,
        'reference': 'E9-0',
        'description': 'Develop DOPs (90%)',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-19T06:00:00Z',
          'endDate': '2029-07-18T15:00:00Z',
          'duration': 30
        },
        'progress': 51,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:21.4295608Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.9446153Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801ef9b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '9628296f-7985-4291-967f-4f92afce2f9c',
        'name': 'DOPs (100%)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 125,
        'reference': 'E10-0',
        'description': 'Develop DOPs (100%) issued for activity',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-22T06:00:00Z',
          'endDate': '2029-07-21T15:00:00Z',
          'duration': 30
        },
        'progress': 8,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:21.6812789Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.9464168Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801f09b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': 'e6c3be02-d403-4694-af14-8052ee6ff7aa',
        'name': 'Contract Management',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 126,
        'reference': 'E11-0',
        'description': 'Management of the 3rd party contracts with KPI and performance reviews carried out in accordance with \'Supplier Relationship and Performance Management Guideline\'.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-06-21T06:00:00Z',
          'endDate': '2029-07-20T15:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            },
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:21.7822586Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.1055564Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801f49b-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': '9c4bce8a-85a8-44b3-b178-9b846d253100',
        'name': 'Rig Move',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 127,
        'reference': 'E12-0',
        'description': 'Rig move operations conducted in accordance with the final signed rig move procedure. Ensure necessary rig positioning equipment and logistics / emergency support (personnel and vessels, etc.) are in place during the entire rig move process.\n\nEnsure a company representative (Marine Warranty Surveyor) is at the rig site during the rig move.\nSign Off Rig Handover Certificate by OIM and DSV',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-08-16T06:00:00Z',
          'endDate': '2029-08-22T15:00:00Z',
          'duration': 7
        },
        'progress': 48,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:21.9416512Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.1565066Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801f59b-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': '1ed0d69e-3aa9-4d04-b695-fa7e0bb684b4',
        'name': 'Well Spud and Notification',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 128,
        'reference': 'E13-0',
        'description': 'Key milestone at the Execute stage.\nWell spud location and time reflected in the daily operational report. Well spud notification provided to the authorities - NPD\nNotify the directional drilling service company rep about the final definitive well spud location.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-08-22T06:00:00Z',
          'endDate': '2029-08-22T06:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.0569057Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.1984163Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801f79b-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': 'b30a9a48-995d-460a-9794-bba63eedea5f',
        'name': 'Execute Work Scope',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 129,
        'reference': 'E14-0',
        'description': 'Execution of day-to-day operations in compliance with regulatory requirements, company policies and procedures and industry standards and codes.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-08-21T06:00:00Z',
          'endDate': '2029-10-01T15:00:00Z',
          'duration': 42
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.1076876Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.2628249Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801fb9b-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': '06539fa1-71ac-485b-b7cf-5203572fd318',
        'name': 'DOPs \'as done\' and lessons learned',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 130,
        'reference': 'E15-0',
        'description': 'Capture \'as done\' activity and lessons learned for continuous improvement to implement learnings in upcoming DOPs and Hole Section Guidelines',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-09-27T06:00:00Z',
          'endDate': '2029-10-26T15:00:00Z',
          'duration': 30
        },
        'progress': 5,
        'next': {
          'id': '0dd6360b-5350-410e-8bbe-5396eb9fb05e',
          'name': 'Manage PLANC and Stakeholders'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.1719019Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.2854617Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801fd9b-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': '143ccb27-b3ff-4f91-a9e8-57ab272bae73',
        'name': 'Manage Well Examination Process',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 131,
        'reference': 'E16-0',
        'description': 'Two way communication established between the Wells Team and Well Examiner to ensure the well is delivered in compliance with regulatory requirements, company policies and procedures, industry standards and codes, and that any necessary dispensation/MoC documents are in place.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-09-28T06:00:00Z',
          'endDate': '2029-10-27T15:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'next': {
          'id': '0dd6360b-5350-410e-8bbe-5396eb9fb05e',
          'name': 'Manage PLANC and Stakeholders'
        },
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.237593Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:57.2908489Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801e29b-0000-0d00-0000-655f50c90000\''
      },
      {
        'id': '0dd6360b-5350-410e-8bbe-5396eb9fb05e',
        'name': 'Manage PLANC and Stakeholders',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 132,
        'reference': 'E17-0',
        'description': 'Follow the PLANC process. Notify the authorities about the following:\nSpud Notification\nNotification for wireline logging / VSP\nNotification for side track if required\nRig move notification\nAdjustments to Chemical Permits (PONs/WONs) if required\nHSE Incident / Accident Reports if any\nEnvironmental spill report if any\nSeabed clearance report, etc.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-09-29T06:00:00Z',
          'endDate': '2029-10-28T16:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.3414896Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.379036Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801ff9b-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': '590368b0-e40d-4d3a-a529-e27abdc11240',
        'name': 'Well Handover Certificate',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 133,
        'reference': 'E18-0',
        'description': 'Handover of a the completed well from the Wells Team to Production Operations.\n\nWell handover shall include;\nHandover Certificate\nWell Barrier Schematic\nValve Status\nMAASP Calculations, etc.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-09-29T06:00:00Z',
          'endDate': '2029-10-28T16:00:00Z',
          'duration': 30
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.4127068Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.4781471Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801049c-0000-0d00-0000-655f50ca0000\''
      },
      {
        'id': 'cffcab8c-bf3e-4b79-869c-14ae1c31a3f2',
        'name': 'Rig Demobilization',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'd794fd24-5022-4efb-a921-72976b27c3af',
              'name': 'Execute'
            }
          }
        },
        'activityId': 134,
        'reference': 'E19-0',
        'description': 'Rig move outside the 500m zone from the well location.\nFinal seabed clearance certificate as required will be submitted to the authorities with a rig move notification issued to the teams.',
        'type': 'Milestone',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
          'name': 'Execute'
        },
        'planned': {
          'startDate': '2029-10-28T07:00:00Z',
          'endDate': '2029-10-28T07:00:00Z',
          'duration': 0
        },
        'progress': 0,
        'approval': [],
        'raci': {
          'accountable': [
            {
              'id': '97958c4a-f9e1-4d67-b55f-d947e6136e6b',
              'name': 'Head of Well Operations (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:22.4782591Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:16:58.4792512Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801059c-0000-0d00-0000-655f50ca0000\''
      }
    ]
  },
  {
    id: '7df38da3-9eea-4abb-812c-ae7464863fa2',
    prefix: 'O',
    name: 'Operate',
    data: [
      {
        'id': '857b8274-82ca-4222-a40e-3fef4ad93da9',
        'name': 'PLANC Close Out',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 139,
        'reference': 'O5-0',
        'description': 'Objectives\nFormal closeout of all PLANC processes and procedures, including but not limited to; PONs/WONs, Chemical permits, EEMS reports, etc.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'f05f495a-ace2-43ae-9c82-56419f6f0932',
              'name': 'Director Drilling and Wells (TA0)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': 'a1d4b72b-f644-47c9-87e2-e3fdb6dd0e2c',
              'name': 'Cost Engineer',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:27.7386837Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.3743411Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801509c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '040869d7-d1d0-4d59-afcf-e50f0a64cd44',
        'name': 'After Action workshop and complete Lessons Learned Register',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 135,
        'reference': 'O1-0',
        'description': 'Key deliverable for Operate Phase.\n\nCreate well lessons learned database. The database should include a description of the lesson learned/opportunity, the potential risk/impact, and corrective action(s) associated to prevent re-occurrence.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:27.7386837Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:02.4808231Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d8013f9c-0000-0d00-0000-655f50ce0000\''
      },
      {
        'id': '4082ba2e-9f55-43ae-b6fb-c75e80ef72aa',
        'name': 'Well Integrity Plan',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 138,
        'reference': 'O4-0',
        'description': 'A agreement between the producing Asset and Drilling and Wells that covers:\n- How to ensure well integrity?\n- Well integrity tests and schedule\n- Well integrity review frequency\n- Well integrity data recording etc.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e2c06e31-790a-414a-9014-bae43c411382',
              'name': 'Principal Engineer - Well integrity (TA1)',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:27.7390775Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:02.7641457Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801489c-0000-0d00-0000-655f50ce0000\''
      },
      {
        'id': '9fcafc80-cc8f-4994-a973-aea872419b6d',
        'name': 'Subsurface EOWR(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 137,
        'reference': 'O3-0',
        'description': 'Key deliverable for Operate Phase.\n\nFinal detailed subsurface End of Well document that will reflect the following;\n\n- Well  actual vs. planned\n- Well final status diagram vs. planned\n- Actual lithology and tops vs. planned\n- Achievements and preliminary results of formation evaluation programme (RFT, core, fluids, PVT, etc.)\n- Subsurface hazards and lessons learned\n- Downhole surprises and learnings\n- Sampling results\n- Presence of acidic fluids, etc.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '970d7568-c86a-4dbb-bd74-4e693976a324',
              'name': 'Geologist/Petrophysicist',
              'type': 'Role'
            },
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'a2e35826-d9d5-4030-915c-6b7490f901bd',
              'name': 'Reservoir Engineer',
              'type': 'Role'
            },
            {
              'id': '6deb8d1b-b78b-4a8b-beaf-90444252b50f',
              'name': 'Geophysicist',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:27.7390818Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:02.6732433Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801459c-0000-0d00-0000-655f50ce0000\''
      },
      {
        'id': 'ecd81350-ffe4-4cea-af51-dd262bf30468',
        'name': 'Wells EOWR(s)',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 136,
        'reference': 'O2-0',
        'description': 'Key deliverable for Operate Phase.\nFinal detailed End of Well Report document that should include the following information;\n\n- Final well status diagram\n- Final well definitive survey and directional profile\n- Final well cost and duration vs. AFE\n- HSE statistics and achievements\n- Well  actual vs. planned\n- Performance benchmarking (Rushmore)\n- Detailed section by section technical review with key achievements, risks and lessons learned\n- Supplementary EOW reports or attachments from key service providers: drilling fluids, directional, cementing, etc.\n- Lessons Learned and recommendations going forward.',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'fba9ebc2-a520-4602-9ec5-215210d80f0b',
              'name': 'Operations Geologist',
              'type': 'Role'
            },
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            },
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ],
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': 'cb4dd72d-b909-4361-9329-872a07d9521d',
            'name': 'Front end TA2'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': 'a8c052e0-2d13-4b4b-a8af-5fd2fd51e3e2',
            'name': 'Execution TA2'
          },
          {
            'id': '60eeaf08-0864-4cd1-a352-5bdaaad832d5',
            'name': 'Integrity TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:27.7393866Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:02.5568121Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801419c-0000-0d00-0000-655f50ce0000\''
      },
      {
        'id': '4ec487f6-3b11-406d-b5cb-64bd30c905c1',
        'name': 'Wrap Up Meeting with Vendors',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 140,
        'reference': 'O6-0',
        'description': 'Hold a wrap up meeting with all the major service providers to review the final operations conducted vs. original plan, non-productive time, failures, incidents, HSE and contract performance, any lessons learned and improvements going forward. The key service companies that shall attend the meeting and provide their presentations include;\n\n- Drilling Contractor\n- Directional Drilling and MWD/LWD\n- Cementing\n- Drilling Fluids\n- Wireline\n- Mudlogging\n- Coring\n- Tubular running service, etc.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': '383a6add-9af3-407b-9f0a-059275e9d56c',
              'name': 'LCWE',
              'type': 'Role'
            },
            {
              'id': 'c58c5b78-aa6e-426e-8b1f-b642d5bf3fbd',
              'name': 'Operations Engineer',
              'type': 'Role'
            },
            {
              'id': 'f022b9f8-b01a-4830-8f40-c6868a0eeab8',
              'name': 'Partners',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:27.9879993Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.3743071Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801519c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '393313bb-b970-438e-8a16-ef4b7395c901',
        'name': 'Contract Incentive Scheme Close out',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 141,
        'reference': 'O7-0',
        'description': 'Close out front end contract incentive scheme (Class 2 -> AFE)\nClose out execution contract incentive scheme (AFE -> actual)',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'consulted': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': '9c8e7e20-7620-4314-b883-3dc2b69abc32',
              'name': 'Global Assurance Team',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.2327125Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.3879547Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801529c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '4eb6a574-27ee-4d50-84fe-e3cb6782ab23',
        'name': 'Contract/PO Close Out',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 142,
        'reference': 'O8-0',
        'description': 'All the documentation required under the terms of the contract(s) should be reviewed to ensure that it is correct and up to date, final accounts agreed and concluded prior to releasing the final payments and issuing final certificates. Following issue of the Final Acceptance Certificate, provided that the contractor(s) and/or vendors(s) have satisfied all their contractual obligations under the scope of the contract(s) and PO(s), their contract(s) are closed out.\n\nContract close out does not release the contractor or vendor from its warranty or any other obligations stipulated within the contract.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '9c8e7e20-7620-4314-b883-3dc2b69abc32',
              'name': 'Global Assurance Team',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.4776917Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.4037124Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801589c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': 'f8171454-21db-479d-be2f-a75b5d40bc0f',
        'name': 'Final Well Cost Reconciliation',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 143,
        'reference': 'O9-0',
        'description': 'Key deliverable for Operate Phase.\nFinal cost reconciliation process and surplus stock identification. The cost engineer is responsible for completing the project/well cost reconciliation and presenting the results and any LL to the wells, subsurface, contract and procurement teams. Final cost data should be used to update current well costing models.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': 'e33b3386-e948-4331-a747-d4c112b042b8',
              'name': 'HSEQ',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': '9c8e7e20-7620-4314-b883-3dc2b69abc32',
              'name': 'Global Assurance Team',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.6909805Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.3941228Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801559c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': 'aadd65b5-5263-4313-9ea7-3e84f65841b2',
        'name': 'Coordinate final EOWR with JV Partners',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 144,
        'reference': 'O10-0',
        'description': 'The Project Manager is responsible to ensure that the final EOWRs are distributed to the JV partners on a timely manner.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.7189835Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.3927929Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801539c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': 'c81836d9-d494-4dd9-b6a9-13a1c2894aa9',
        'name': 'Wrap Up Meeting with JV Partners',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 145,
        'reference': 'O11-0',
        'description': 'Final well/project wrap up meeting with JV partnership representative to cover;\n\n- Well  planned vs. actual\n- Well delivery performance and cost:  planned vs. actual\n- HSE and drilling/completion/well test technical performance: planned vs. actual\n- Key lessons learned and improvements going forward, etc.',
        'type': 'Meeting',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'e6ac2cfe-a893-44f3-9574-b9433ec43803',
              'name': 'Subsurface Team Leader',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.8277862Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.4869195Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801599c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '403f5675-4d83-43c0-897a-f466a4041daa',
        'name': 'Conduct JV Audit',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 146,
        'reference': 'O12-0',
        'description': 'Project Manager and Cost Engineer to coordinate and arrange if a request for audit is received from JV partner(s). The project team shall provide support as necessary to enable the JV audit team to complete the task.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': '1e9152a9-e12f-4dea-8d47-b4c1f74edcfe',
              'name': 'Asset/Project Manager',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'fbcce4e6-f7bf-470f-86c4-b322ef966791',
              'name': 'Drilling Superintendent (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            },
            {
              'id': '6de0f587-6e59-42f3-9955-f257a5f0ff74',
              'name': 'Finance',
              'type': 'Role'
            },
            {
              'id': '9c8e7e20-7620-4314-b883-3dc2b69abc32',
              'name': 'Global Assurance Team',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.9646236Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.6779121Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d8015b9c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': 'f01fa88d-ea95-43ed-9c61-bfa47678d21e',
        'name': 'Well/Project Review Note',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 147,
        'reference': 'O13-0',
        'description': 'Close out drilling and completion activities on the well.\n\nFinal assurance that:\n- EOWR for Drilling and Subsurface is signed off\n- Final Well Cost is reconciled and signed off\n- Contract close out, no outstanding issues or invoices\n- PLANC has been closed out\n- No JV actions required for Drilling and Wells',
        'type': 'Product',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [
          {
            'id': '0b0d3828-8951-4a86-844d-573bfb5543aa',
            'name': 'SME Casing and Tubing design'
          },
          {
            'id': '4836f0d6-6ddb-4ae7-b871-66cc93e1537f',
            'name': 'Front end TA1'
          },
          {
            'id': '833fc592-176d-46f2-b814-7253d1976a73',
            'name': 'Execution TA1'
          },
          {
            'id': '799727b7-bef2-4b77-a67c-de96dd2852d7',
            'name': 'TA0'
          }
        ],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:28.9973401Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.6783192Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d8015d9c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': 'c7a3fa2a-e625-4a19-9b61-0ffb749933d2',
        'name': 'Close out Well Delivery Process',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 148,
        'reference': 'O14-0',
        'description': 'At the end of the project/well, before the project team is demobilized, the Wells Project Manager shall ensure that all the lessons learned on the project are identified and captured in a manner that enables them to be used on future projects. The Wells Project Manager shall ensure that the well folder on the portal is up-to-date with all the final, signed paperwork in place including EOWRs and well handover certificates etc.',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {
          'accountable': [
            {
              'id': 'd2d69a39-7e91-4395-87be-48abaec009a0',
              'name': 'Head of Well Engineering (TA1)',
              'type': 'Role'
            }
          ],
          'responsible': [
            {
              'id': 'ecdeba75-2c47-4af3-bd92-4b6726b0b1b4',
              'name': 'Wells Project Manager (TA2)',
              'type': 'Role'
            }
          ],
          'consulted': [
            {
              'id': 'be21168a-fb9d-4393-8166-a5c4c2f653f7',
              'name': 'Logistics Coordinator',
              'type': 'Role'
            }
          ]
        },
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:29.1009738Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.6898055Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801629c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '60d71c39-fa23-4334-a0c0-a42899cbe8ba',
        'name': 'Recommendation to Intervene',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 149,
        'reference': 'O15-0',
        'description': 'Initiation note from Asset to Drilling & Wells to start working on well intervention or P&A scope of one or more wells.\nThe document should cover as a minimum:\n- Current Well Status Diagram\n- Licence obligations\n- Defined well/project objectives\n- High Level data acquisition plan\n- Reservoir Temperature and Pressure\n- Environmental issues\n- Results of any supportive technical studies conducted\n- Key risks and uncertainties present in the well/project at this stage.\n\nThis note should kick off a new Well Delivery Plan cycle, from Feasibility to Operate',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2030-11-23T07:00:00Z',
          'endDate': '2031-02-20T16:00:00Z',
          'duration': 90
        },
        'progress': 0,
        'raci': {},
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:29.2045582Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.6870009Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d8015f9c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '4c992060-c14d-4c97-a2c9-f12459a0ea16',
        'name': 'Well Handover from Asset to Drilling and Wells',
        'metadata': {
          'source': {
            'template': {
              'id': '20034880-bfe7-4f85-aaf5-faaa599723f0',
              'name': 'PCAP Template Fast Track v3'
            },
            'phase': {
              'id': 'a7215ea5-e6ce-4dda-84e5-82ba8f76108e',
              'name': 'Operate'
            }
          }
        },
        'activityId': 150,
        'reference': 'O16-0',
        'description': '',
        'type': 'Task',
        'mandatory': true,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2031-02-21T07:00:00Z',
          'endDate': '2031-02-21T16:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'assurance': [],
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'tags': [],
        'created': '2022-06-23T06:39:29.237457Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.6892024Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801609c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': 'fce6721f-1422-4afa-bce4-783791eb2ee4',
        'name': 't45tNew Activity',
        'activityId': 156,
        'description': '',
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2029-11-18T07:00:00Z',
          'endDate': '2029-11-18T16:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-02-08T13:46:40.3339806Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.689524Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801619c-0000-0d00-0000-655f50cf0000\''
      },
      {
        'id': '51c77975-8c18-4d0d-9566-f1b25ee69a98',
        'name': 'New Activity5t45t',
        'activityId': 157,
        'type': 'Task',
        'mandatory': false,
        'project': {
          'id': '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          'name': 'Cerisa'
        },
        'phase': {
          'id': '7df38da3-9eea-4abb-812c-ae7464863fa2',
          'name': 'Operate'
        },
        'planned': {
          'startDate': '2029-11-18T07:00:00Z',
          'endDate': '2029-11-18T16:00:00Z',
          'duration': 1
        },
        'progress': 0,
        'raci': {},
        'tenantId': '225ff010-9da0-4eac-8997-0febeee9e6a7',
        'scope': 'Informatiq.Plan',
        'created': '2023-02-08T13:47:06.7015356Z',
        'createdBy': {
          'id': 'user|0fdd1d4e-c675-4c83-ac8d-9d90edb6098d',
          'name': 'Erlend Søreide'
        },
        'lastModified': '2023-11-23T13:17:03.7832437Z',
        'lastModifiedBy': {
          'id': 'service|00000000-0000-0000-0000-000000000000',
          'name': 'System'
        },
        '_etag': '\'d801639c-0000-0d00-0000-655f50cf0000\''
      }
    ]
  }
]

export { PHASES, PROJECTS, ACTIVITIES };
