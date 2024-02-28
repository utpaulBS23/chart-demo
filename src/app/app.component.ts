import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AxisModel,
  ChartAllModule, ChartAreaModel, DateTimeService, MarkerSettingsModel, MultiLevelLabelService,
  ScrollBarService, TooltipService, TooltipSettingsModel, ZoomService, ZoomSettingsModel
} from '@syncfusion/ej2-angular-charts';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';

@Component({
    imports: [RouterOutlet, ChartAllModule, NgIf, NgForOf, JsonPipe],
  providers: [ ScrollBarService, ZoomService, DateTimeService, MultiLevelLabelService, TooltipService, ScrollBarService ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  chartArea: ChartAreaModel = {
    border: {
      width: 0
    }
  }

  datasource: any = [
      {
          id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
          name: 'Cerisa test',
          spudDate: {
              planned: {
                  startDate: new Date('2023-05-11T00:00:00'),
                  endDate: new Date('2023-05-11T00:00:00'),
                  duration: 1
              }
          },
          startDate: new Date('2021-08-21T02:00:00Z'),
          endDate: new Date('2035-09-11T11:00:00Z'),
          duration: 5134.375,
          phases: [
              {
                  id: '26019147-8737-42b6-9b5e-2fbe41becb68',
                  prefix: 'F',
                  name: 'Feasability',
                  progress: 62,
                  date: new Date('2021-08-21T02:00:00Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2021-08-21T02:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2035-09-11T11:00:00Z')
                      }
                  ],
                  progressRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2021-08-21T02:00:00Z')
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2030-08-21T02:00:00Z')
                      }
                  ]
              },
              {
                  id: '65d19a8c-2d37-4187-8da6-597736a248d1',
                  prefix: 'D',
                  projectName: 'Cerisa test',
                  name: 'Concept',
                  progress: 29,
                  color: 'red',
                  planned: {
                      startDate: '2028-05-09T06:00:00Z',
                      endDate: '2029-06-25T15:00:00Z',
                      duration: 413
                  },
                  dateRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2028-05-09T06:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-06-25T15:00:00Z')
                      }
                  ],
                  progressRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2028-05-09T06:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-08-21T02:00:00Z'),
                      }
                  ]
              },
              {
                  id: 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
                  prefix: 'E',
                  name: 'Execute',
                  projectName: 'Cerisa test',
                  progress: 17,
                  color: 'red',
                  planned: {
                      startDate: '2029-06-19T06:00:00Z',
                      endDate: '2029-10-28T16:00:00Z',
                      duration: 132
                  },
                  dateRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-06-19T06:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-10-28T16:00:00Z')
                      }
                  ],
                  progressRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-06-19T06:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-07-19T06:00:00Z'),
                      },
                  ]
              },
              {
                  id: '7df38da3-9eea-4abb-812c-ae7464863fa2',
                  prefix: 'O',
                  name: 'Operate',
                  projectName: 'Cerisa test',
                  progress: 0,
                  color: 'red',
                  planned: {
                      startDate: '2029-11-18T07:00:00Z',
                      endDate: '2031-02-21T16:00:00Z',
                      duration: 461
                  },
                  dateRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-11-18T07:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2031-02-21T16:00:00Z')
                      }
                  ],
                  progressRange: [
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2029-11-18T07:00:00Z'),
                      },
                      {
                          projectName: 'Cerisa test',
                          date: new Date('2031-11-18T07:00:00Z'),
                      },
                  ]
              },
          ],
          milestones: [
              {
                  projectName: 'Cerisa test',
                startDate: new Date('2028-08-17T06:00:00Z'),
              },
              {
                  projectName: 'Cerisa test',
                startDate:  new Date('2028-08-17T06:00:00Z'),
              },
              {
                  projectName: 'Cerisa test',
                startDate: new Date('2028-09-27T06:00:00Z')
              },
              {
                  projectName: 'Cerisa test',
                  startDate: new Date('2028-10-31T07:00:00Z')
              },
              {
                  projectName: 'Cerisa test',
                  startDate:  new Date('2028-11-01T07:00:00Z')
              },
              {
                  projectName: 'Cerisa test',
                  startDate:  new Date('2028-08-17T06:00:00Z')
              },
              {
                  projectName: 'Cerisa test',
                  startDate:  new Date('2029-10-28T07:00:00Z')
              }
          ],
          color: '#B8B8B8'
      },
      {
          id: '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
          name: 'Uk test case',
          spudDate: {},
          startDate: new Date('2023-03-13T00:00:00'),
          endDate: new Date('2024-03-16T00:00:00'),
          duration: 369,
          color: '#B8B8B8',
          phases: [
              {
                  id: '26019147-8737-42b6-9b5e-2fbe41becb68',
                  prefix: 'F',
                  name: 'Feasability',
                  progress: 0,
                  date: new Date('2023-03-13T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-13T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-15T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
                  prefix: 'CD1',
                  name: 'Concept Define',
                  progress: 0,
                  color: 'red',
                  planned: {
                      startDate: '2023-03-19T00:00:00',
                      endDate: '2023-03-21T00:00:00',
                      duration: 2
                  },
                  dateRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-19T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-21T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '2103772d-cff0-45e4-8d0f-3d8172581f29',
                  prefix: 'FE1',
                  name: 'Feed',
                  progress: 0,
                  color: 'red',
                  planned: {
                      'startDate': '2023-03-21T00:00:00',
                      'endDate': '2023-03-23T00:00:00',
                      'duration': 2
                  },
                  dateRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-21T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-23T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '13ca05b3-4fc3-47e6-adc4-7b4b01c55a8f',
                  prefix: 'CS1',
                  name: 'Concept Select',
                  progress: 0,
                  color: 'red',
                  planned: {
                      'startDate': '2023-03-15T00:00:00',
                      'endDate': '2023-03-19T00:00:00',
                      'duration': 4
                  },
                  dateRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-15T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-19T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '1586caa8-1334-47b3-86aa-57f812a3be23',
                  prefix: 'DE1',
                  name: 'Design',
                  progress: 60,
                  color: 'red',
                  planned: {
                      'startDate': '2023-03-23T00:00:00',
                      'endDate': '2024-03-12T00:00:00',
                      'duration': 355
                  },
                  dateRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-23T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2024-03-12T00:00:00')
                      }
                  ],
                  progressRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-03-23T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2023-09-23T00:00:00'),
                      },
                  ]
              },
              {
                  id: '2d8e5814-3c3c-48a0-b834-2f5632447aba',
                  prefix: 'EX1',
                  name: 'Execute',
                  progress: 0,
                  color: 'red',
                  planned: {
                      'startDate': '2024-03-12T00:00:00',
                      'endDate': '2024-03-14T00:00:00',
                      'duration': 2
                  },
                  dateRange: [
                      {
                          projectName: 'Uk test case',
                          date: new Date('2024-03-12T00:00:00'),
                      },
                      {
                          projectName: 'Uk test case',
                          date: new Date('2024-03-14T00:00:00')
                      }
                  ],
                  progressRange: []
              },
          ],
          milestones: [
              {
                  projectName: 'Uk test case',
                  startDate: new Date('2023-03-23T00:00:00'),
              }
          ],
      },
      {
          id: '1bd1d3cd-9e54-43ba-b74f-c821f4daf5b5',
          name: 'Erlend UK test 4',
          spudDate: {
              planned: {
                  startDate: new Date('2023-09-20T00:00:00'),
                  endDate: new Date('2023-09-21T00:00:00'),
                  duration: 2
              }
          },
          startDate: new Date('2023-03-13T00:00:00'),
          endDate: new Date('2024-07-11T00:00:00'),
          duration: 486,
          color: '#B8B8B8',
          phases: [
              {
                  id: 'd81f2ac8-5201-4d4c-b565-a07823f80be8',
                  prefix: 'F1',
                  name: 'Feasability',
                  progress: 0,
                  date: new Date('2023-03-13T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-03-13T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-05-11T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: 'd0e33db1-429a-4c57-a657-8a8ffeec80de',
                  prefix: 'FE1',
                  name: 'Feed',
                  progress: 0,
                  date: new Date('2023-11-11T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-11-11T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-02-10T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '100bec7f-89c6-4ea4-a5aa-aa61606e08c3',
                  prefix: 'DE1',
                  name: 'Design',
                  progress: 0,
                  date: new Date('2024-02-10T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-02-10T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-03-12T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '1afdfa52-f176-4abf-b9f6-2f9cbceec699',
                  prefix: 'CD1',
                  name: 'Concept Define',
                  progress: 50,
                  date: new Date('2023-09-10T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-09-10T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-11-11T00:00:00')
                      }
                  ],
                  progressRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-09-10T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-10-10T00:00:00'),
                      },
                  ]
              },
              {
                  id: '2d6f495c-00b3-4975-aa58-f2dc869a58b2',
                  prefix: 'CS1',
                  name: 'Concept Select',
                  progress: 0,
                  date: new Date('2023-05-11T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-05-11T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2023-09-10T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '26431c41-3832-41a3-9fd4-b9eca9e2f012',
                  prefix: 'CO1',
                  name: 'Close Out',
                  progress: 0,
                  date: new Date('2024-05-11T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-05-11T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-07-11T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '884476d3-5688-41b0-b734-e1228fb63df4',
                  prefix: 'EX1',
                  name: 'Execute',
                  progress: 0,
                  date: new Date('2024-03-12T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-03-12T00:00:00'),
                      },
                      {
                          projectName: 'Erlend UK test 4',
                          date: new Date('2024-05-11T00:00:00')
                      }
                  ],
                  progressRange: []
              }
          ],
          milestones: [
              {
                  projectName: 'Erlend UK test 4',
                  startDate: new Date('2024-01-09T00:00:00'),
              },
              {
                  projectName: 'Erlend UK test 4',
                  startDate: new Date('2024-02-24T00:00:00'),
              },
              {
                  projectName: 'Erlend UK test 4',
                  startDate: new Date('2024-04-24T00:00:00'),
              },
              {
                  projectName: 'Erlend UK test 4',
                  startDate: new Date('2024-07-24T00:00:00'),
              }
          ],
      },
      {
          id: '0d09c677-7917-40e7-9eb6-5330fd5662e5',
          name: 'Test project with template 2',
          spudDate: {},
          startDate: new Date('2023-12-21T00:00:00'),
          endDate: new Date('2025-07-04T00:00:00'),
          duration: 561,
          color: '#B8B8B8',
          phases: [
              {
                  id: 'eeea7621-abdf-4f61-ade4-1d0ce74c513e',
                  prefix: 'F1-0',
                  name: 'Feasability',
                  progress: 0,
                  date: new Date('2023-12-21T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2023-12-21T00:00:00'),
                      },
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2025-07-04T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '3c499374-b620-4f4f-b230-041f702335e4',
                  prefix: 'D-1',
                  name: 'Detailed Engineering',
                  progress: 0,
                  date: new Date('2024-03-20T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2024-03-20T00:00:00'),
                      },
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2025-06-04T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '5931e7a2-e892-4de5-8344-bbb27d74ff3b',
                  prefix: 'C1-0',
                  name: 'Concept Select',
                  progress: 0,
                  date: new Date('2024-03-20T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2024-03-20T00:00:00'),
                      },
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2025-03-20T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '23df3ce2-27e6-4d49-ac8d-c50a633fc3be',
                  prefix: 'O1-0',
                  name: 'Operate',
                  progress: 0,
                  date: new Date('2024-12-14T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2024-12-14T00:00:00'),
                      },
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2025-06-08T00:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '5fd812ae-fdb5-4ed7-99be-e1e2f99eec95',
                  prefix: 'E1-0',
                  name: 'Execute',
                  progress: 0,
                  date: new Date('2024-09-16T00:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2024-09-16T00:00:00'),
                      },
                      {
                          projectName: 'Test project with template 2',
                          date: new Date('2025-05-23T00:00:00')
                      }
                  ],
                  progressRange: []
              }
          ],
          milestones: [
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2025-04-24T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2024-09-24T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2024-10-24T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2025-05-25T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2024-10-14T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2024-08-24T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2024-11-24T00:00:00'),
              },
              {
                  projectName: 'Test project with template 2',
                  startDate: new Date('2024-11-24T00:00:00'),
              }
          ]
      },
      {
          id: '816be293-012b-41f5-80fc-d5ba837c369c',
          name: 'Test project with template',
          spudDate: {},
          startDate: new Date('2023-12-01T06:00:00'),
          endDate: new Date('2027-02-03T16:00:00'),
          duration: 1160.4166666666667,
          color: '#B8B8B8',
          phases: [
              {
                  id: '2c419b71-69b5-4162-b286-9243b9e20f2c',
                  prefix: '',
                  name: 'Evaluation',
                  progress: 0,
                  date: new Date('2023-12-01T06:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template',
                          date: new Date('2023-12-01T06:00:00'),
                      },
                      {
                          projectName: 'Test project with template',
                          date: new Date('2025-06-08T16:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '01c0af26-1e50-453d-9333-d38e63164dac',
                  prefix: '',
                  name: 'Definition',
                  progress: 0,
                  date: new Date('2025-09-30T06:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template',
                          date: new Date('2025-09-30T06:00:00'),
                      },
                      {
                          projectName: 'Test project with template',
                          date: new Date('2026-05-11T16:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '418967cd-f43d-4f86-ad28-a5ca17a458c6',
                  prefix: '',
                  name: 'Execution',
                  progress: 0,
                  date: new Date('2026-05-12T07:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template',
                          date: new Date('2026-05-12T07:00:00'),
                      },
                      {
                          projectName: 'Test project with template',
                          date: new Date('2026-07-31T16:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: 'c6c7305b-e613-4ddd-9872-e251de7a00f2',
                  prefix: '',
                  name: 'Close Out',
                  progress: 0,
                  date: new Date('2026-08-01T07:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template',
                          date: new Date('2026-08-01T07:00:00'),
                      },
                      {
                          projectName: 'Test project with template',
                          date: new Date('2027-02-03T16:00:00')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: 'ceca35de-1352-4105-b87a-30cbd0d7a39c',
                  prefix: '',
                  name: 'Selection',
                  progress: 0,
                  date: new Date('2025-06-08T07:00:00'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Test project with template',
                          date: new Date('2025-06-08T07:00:00'),
                      },
                      {
                          projectName: 'Test project with template',
                          date: new Date('2025-09-29T16:00:00')
                      }
                  ],
                  progressRange: []
              }
          ],
          milestones: [
              {
                  projectName: 'Test project with template',
                  startDate: new Date('2024-11-30:00:00'),
              },
              {
                  projectName: 'Test project with template',
                  startDate: new Date('2026-03-20:00:00'),
              },
              {
                  projectName: 'Test project with template',
                  startDate: new Date('2026-02-09:00:00'),
              },
              {
                  projectName: 'Test project with template',
                  startDate: new Date('2026-06-31:00:00'),
              },
          ]
      },
      {
          id: '9105f7c8-ddcf-41f2-8fb1-cb72146df08a',
          name: 'Existing Project Test 01',
          spudDate: {},
          startDate: new Date('2023-10-07T02:00:00Z'),
          endDate: new Date('2033-07-05T14:00:00Z'),
          duration: 3559.5,
          color: '#B8B8B8',
          phases: [
              {
                  id: '4a35b94a-e9ec-4ab3-9ce1-ff9c2272286e',
                  prefix: '',
                  name: 'New Phase',
                  progress: 0,
                  date: new Date('2024-10-22T04:00:00Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2024-10-22T04:00:00Z'),
                      },
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2024-10-22T13:00:00Z')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '33b0a66a-1d3b-41ff-9295-f240c06af489',
                  prefix: 'F',
                  name: 'Feasability',
                  progress: 0,
                  date: new Date('2025-12-03T05:00:00Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2025-12-03T05:00:00Z'),
                      },
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2031-06-01T09:00:00Z')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: '5df6ffeb-511d-42b9-9bb5-84edf43a48f6',
                  prefix: 'O',
                  name: 'Operate',
                  progress: 0,
                  date: new Date('2032-04-01T05:00:00Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2032-04-01T05:00:00Z'),
                      },
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2033-07-05T14:00:00Z')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: 'dd0cea5f-1f2c-4bbd-9261-5bb46e3f9ee4',
                  prefix: 'D',
                  name: 'rferfe',
                  progress: 0,
                  date: new Date('2030-09-21T04:00:00Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2030-09-21T04:00:00Z'),
                      },
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2031-11-07T13:00:00Z')
                      }
                  ],
                  progressRange: []
              },
              {
                  id: 'da237b46-e3ef-4c08-964b-f4d60a1bed5d',
                  prefix: 'E',
                  name: 'Execute',
                  progress: 0,
                  date: new Date('2031-11-01T04:00:00Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2031-11-01T04:00:00Z'),
                      },
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2032-03-11T14:00:00Z')
                      }
                  ],
                  progressRange: []
              },
              {

                  id: 'a5e48bee-c5e1-4247-ad64-a75f0512efe4',
                  prefix: '',
                  name: 'New Phase by utpaul',
                  progress: 0,
                  date: new Date('2024-12-17T04:00:04.387Z'),
                  color: '#EE7516',
                  dateRange: [
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2024-12-17T04:00:04.387Z'),
                      },
                      {
                          projectName: 'Existing Project Test 01',
                          date: new Date('2026-03-27T11:00:00Z')
                      }
                  ],
                  progressRange: []
              }
          ]
      },
      {
          id: '5f49256b-6900-4a1a-b02c-68333bad4ff9',
          name: ' Existing Project Test 07',
          spudDate: {},
          startDate: new Date('2023-10-11T02:00:00Z'),
          endDate: new Date('2024-06-25T09:00:00Z'),
          duration: 258.2916666666667,
          color: '#B8B8B8'
      },
      {
          id: '4a11c455-92f6-4ce5-8643-9d4ea0174282',
          name: 'T7 Project',
          spudDate: {},
          startDate: new Date('2023-08-31T00:00:00Z'),
          endDate: new Date('2026-08-13T09:00:00Z'),
          duration: 1078.375,
          color: '#B8B8B8'
      },
      {
          id: 'ed68ebc5-bdaa-45ac-8c6b-bb476594827c',
          name: 'Vår test project',
          spudDate: {},
          startDate: new Date('2023-09-01T06:00:00Z'),
          endDate: new Date('2026-11-04T16:00:00Z'),
          duration: 1160.4166666666667,
          color: '#B8B8B8'
      },
  ]

  cersaTestPhase1 = [
    {
        id: '26019147-8737-42b6-9b5e-2fbe41becb68',
        prefix: 'F',
        projectName: 'Cerisa test',
        name: 'Feasability',
        progress: 62,
        date: new Date('2021-08-21T02:00:00Z'),
        color: '#EE7516',
        // planned: {
        //   startDate: new Date('2021-08-21T02:00:00Z'),
        //   endDate: new Date('2035-09-11T11:00:00Z'),
        //   duration: 5135
        // },
        milestones: []
    },
    {
        id: '26019147-8737-42b6-9b5e-2fbe41becb68',
        prefix: 'F',
        projectName: 'Cerisa test',
        name: 'Feasability',
        progress: 62,
        color: 'red',
        date: new Date('2035-09-11T11:00:00Z'),
        // planned: {
        //   startDate: new Date('2021-08-21T02:00:00Z'),
        //   endDate: new Date('2035-09-11T11:00:00Z'),
        //   duration: 5135
        // },
        milestones: []
    }
  ];

    UKPhase1 = [
        {
            id: 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
            prefix: 'F1',
            name: 'Feasibility',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-13T00:00:00'),
            color: 'blue'
        },
        {
            id: 'f8803760-b19c-46c0-9c61-50a46d9adb5e',
            prefix: 'F1',
            name: 'Feasibility',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-15T00:00:00'),
            color: 'red'
        }
    ];
    UKPhase2 = [
        {
            'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
            'prefix': 'CD1',
            'name': 'Concept Define',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-19T00:00:00'),
            color: 'yellow'
        },
        {
            'id': 'f357d8f5-4e20-4c0b-9065-ae65e1fd89f6',
            'prefix': 'CD1',
            'name': 'Concept Define',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-21T00:00:00'),
            color: 'blue'
        }
    ];
    UKPhase3 = [
        {
            'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
            'prefix': 'FE1',
            'name': 'Feed',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-21T00:00:00'),
            color: 'yellow'
        },
        {
            'id': '2103772d-cff0-45e4-8d0f-3d8172581f29',
            'prefix': 'FE1',
            'name': 'Feed',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-23T00:00:00'),
            color: 'blue'
        }
    ];
    UKPhase4 = [
        {
            'id': '13ca05b3-4fc3-47e6-adc4-7b4b01c55a8f',
            'prefix': 'CS1',
            'name': 'Concept Select',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-15T00:00:00'),
            color: 'yellow'
        },
        {
            'id': '13ca05b3-4fc3-47e6-adc4-7b4b01c55a8f',
            'prefix': 'CS1',
            'name': 'Concept Select',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-19T00:00:00'),
            color: 'blue'
        }
    ];
    UKPhase5 = [
        {
            'id': '1586caa8-1334-47b3-86aa-57f812a3be23',
            'prefix': 'DE1',
            'name': 'Design',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-23T00:00:00'),
            color: 'yellow'
        },
        {
            'id': '1586caa8-1334-47b3-86aa-57f812a3be23',
            'prefix': 'DE1',
            'name': 'Design',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2024-03-12T00:00:00'),
            color: 'blue'
        }
    ];
    UKPhase6 = [
        {
            'id': '2d8e5814-3c3c-48a0-b834-2f5632447aba',
            'prefix': 'EX1',
            'name': 'Execute',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2024-03-12T00:00:00'),
            color: 'yellow'
        },
        {
            'id': '2d8e5814-3c3c-48a0-b834-2f5632447aba',
            'prefix': 'EX1',
            'name': 'Execute',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2024-03-14T00:00:00'),
            color: 'blue'
        }
    ];
    UKPhase7 = [
        {
            'id': 'daf21dbc-e521-49df-b67e-f662b914337b',
            'prefix': 'CO1',
            'name': 'Close Out',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2023-03-15T00:00:00'),
            color: 'yellow'
        },
        {
            'id': '2d8e5814-3c3c-48a0-b834-2f5632447aba',
            'prefix': 'EX1',
            'name': 'Execute',
            projectName: 'Uk test case',
            progress: 0,
            date: new Date('2024-03-16T00:00:00'),
            color: 'blue'
        }
    ];
    cersaTestPhase2 = [
        {
            id: '65d19a8c-2d37-4187-8da6-597736a248d1',
            prefix: 'D',
            name: 'Concept',
            projectName: 'Cerisa test',
            progress: 29,
            date: new Date('2021-08-21T02:00:00Z'),
            color: 'yellow',
            milestones: []
        },
        {
            id: '65d19a8c-2d37-4187-8da6-597736a248d1',
            prefix: 'D',
            name: 'Concept',
            projectName: 'Cerisa test',
            progress: 29,
            date: new Date('2029-09-11T11:00:00Z'),
            color: 'blue'
        }
    ]
    cersaTestPhase3 = [
        {
            id: 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
            prefix: 'E',
            name: 'Execute',
            projectName: 'Cerisa test',
            progress: 17,
            date: new Date('2029-06-19T06:00:00Z'),
            color: 'yellow',
            milestones: []
        },
        {
            id: 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
            prefix: 'E',
            name: 'Execute',
            projectName: 'Cerisa test',
            progress: 17,
            date: new Date('2029-10-28T16:00:00Z'),
            color: 'blue'
        }
    ]

    cersaTestPhase4 = [
        {
            id: '7df38da3-9eea-4abb-812c-ae7464863fa2',
            prefix: 'O',
            name: 'Operate',
            projectName: 'Cerisa test',
            progress: 0,
            date: new Date('2029-11-18T07:00:00Z'),
            color: 'yellow',
            milestones: []
        },
        {
            id: '7df38da3-9eea-4abb-812c-ae7464863fa2',
            prefix: 'O',
            name: 'Operate',
            projectName: 'Cerisa test',
            progress: 0,
            date: new Date('2031-02-21T16:00:00Z'),
            color: 'blue'
        }
    ]

    testMilestone = [
        {
            id: 'd7bd2c4d-2871-4e0c-ab56-2e9b16bd4d37',
            name: 'Long Lead Equipment AFE JV partnership approval',
            activityId: 64,
            projectName: 'Cerisa test',
            startDate: new Date('2028-08-17T06:00:00Z'),
            planned: {
                startDate: new Date('2028-08-17T06:00:00Z'),
                endDate:  new Date('2028-08-17T06:00:00Z'),
                duration: 0
            }
        },
        {
            id: '85b38fee-4d9a-4a34-b9d7-5ecdcf2fe332',
            name: 'Rig Acceptance Test and Rig Verification',
            startDate:  new Date('2028-08-17T06:00:00Z'),
            activityId: 111,
            projectName: 'Cerisa test',
            planned: {
                startDate:  new Date('2028-08-17T06:00:00Z'),
                endDate:  new Date('2028-08-17T06:00:00Z'),
                duration: 0
            }
        },
        {
            id: 'a043cfe8-e732-46d4-bde6-8a0d4b96a9e8',
            name: 'Application for Consent (AfC) Approved by Ptil (PSA)',
            activityId: 94,
            projectName: 'Cerisa test',
            startDate:  new Date('2028-09-27T06:00:00Z'),
            planned: {
                startDate: new Date('2028-09-27T06:00:00Z'),
                endDate: new Date('2028-09-27T06:00:00Z'),
                duration: 0
            }
        },
        {
            id: '237aa972-69b1-4829-85a0-7c29aab35f42',
            name: 'Application for Discharge (AfD) Approved by Miljødirektoratet (Mdir)',
            activityId: 98,
            startDate:  new Date('2028-10-31T07:00:00Z'),
            projectName: 'Cerisa test',
            planned: {
                startDate:  new Date('2028-10-31T07:00:00Z'),
                endDate:  new Date('2028-10-31T07:00:00Z'),
                duration: 0
            }
        },
        {
            id: '577faa9d-c64a-4a9c-b054-fcb7db9c2440',
            name: 'Obtain Mandatory Pre-Spud Approvals (PLANC)',
            activityId: 99,
            startDate: new Date('2028-11-01T07:00:00Z'),
            projectName: 'Cerisa test',
            planned: {
                startDate: new Date('2028-11-01T07:00:00Z'),
                endDate: new Date('2028-11-01T07:00:00Z'),
                duration: 0
            }
        },
        {
            id: 'e881ad64-b90f-48b7-b139-9aa3853727e5',
            name: 'Rig HSE Plan',
            activityId: 112,
            startDate: new Date('2028-08-17T06:00:00Z'),
            projectName: 'Cerisa test',
            planned: {
                startDate: new Date('2028-08-17T06:00:00Z'),
                endDate: new Date('2028-08-17T06:00:00Z'),
                duration: 0
            }
        },
        {
            id: 'cffcab8c-bf3e-4b79-869c-14ae1c31a3f2',
            name: 'Rig Demobilization',
            activityId: 134,
            projectName: 'Cerisa test',
            startDate: new Date('2029-10-28T07:00:00Z'),
            planned: {
                startDate: new Date('2029-10-28T07:00:00Z'),
                endDate: new Date('2029-10-28T07:00:00Z'),
                duration: 0
            }
        }
    ]

    phaseMarker: MarkerSettingsModel = {
        width: 10,
        height: 10,
        shape:  'InvertedTriangle'
    }

    phases =  [
        {
            id: '26019147-8737-42b6-9b5e-2fbe41becb68',
            prefix: 'F',
            projectName: 'Cerisa test',
            name: 'Feasability',
            progress: 62,
            planned: {
                startDate: new Date('2021-08-21T02:00:00Z'),
                endDate: new Date('2035-09-11T11:00:00Z'),
                duration: 5135
            },
            milestones: []
        },
        {
            id: '65d19a8c-2d37-4187-8da6-597736a248d1',
            prefix: 'D',
            name: 'Concept',
            projectName: 'Cerisa test',
            progress: 29,
            planned: {
                startDate: new Date('2023-08-30T07:00:00Z'),
                endDate: new Date('2029-09-11T11:00:00Z'),
                duration: 2204.5
            },
            milestones: [
                {
                    id: 'd7bd2c4d-2871-4e0c-ab56-2e9b16bd4d37',
                    name: 'Long Lead Equipment AFE JV partnership approval',
                    activityId: 64,
                    planned: {
                        startDate: new Date('2028-08-17T06:00:00Z'),
                        endDate:  new Date('2028-08-17T06:00:00Z'),
                        duration: 0
                    },
                },
                {
                    id: '85b38fee-4d9a-4a34-b9d7-5ecdcf2fe332',
                    name: 'Rig Acceptance Test and Rig Verification',
                    activityId: 111,
                    planned: {
                        startDate:  new Date('2028-08-17T06:00:00Z'),
                        endDate:  new Date('2028-08-17T06:00:00Z'),
                        duration: 0
                    }
                },
                {
                    id: 'a043cfe8-e732-46d4-bde6-8a0d4b96a9e8',
                    name: 'Application for Consent (AfC) Approved by Ptil (PSA)',
                    activityId: 94,
                    planned: {
                        startDate: new Date('2028-09-27T06:00:00Z'),
                        endDate: new Date('2028-09-27T06:00:00Z'),
                        duration: 0
                    }
                },
                {
                    id: '237aa972-69b1-4829-85a0-7c29aab35f42',
                    name: 'Application for Discharge (AfD) Approved by Miljødirektoratet (Mdir)',
                    activityId: 98,
                    planned: {
                        startDate:  new Date('2028-10-31T07:00:00Z'),
                        endDate:  new Date('2028-10-31T07:00:00Z'),
                        duration: 0
                    }
                },
                {
                    id: '577faa9d-c64a-4a9c-b054-fcb7db9c2440',
                    name: 'Obtain Mandatory Pre-Spud Approvals (PLANC)',
                    activityId: 99,
                    planned: {
                        startDate: new Date('2028-11-01T07:00:00Z'),
                        endDate: new Date('2028-11-01T07:00:00Z'),
                        duration: 0
                    }
                },
                {
                    id: 'e881ad64-b90f-48b7-b139-9aa3853727e5',
                    name: 'Rig HSE Plan',
                    activityId: 112,
                    planned: {
                        startDate: new Date('2028-08-17T06:00:00Z'),
                        endDate: new Date('2028-08-17T06:00:00Z'),
                        duration: 0
                    }
                },
            ]
        },
        {
            id: 'ff76c077-a982-4779-8bff-3d8ddc0e0a8e',
            prefix: 'E',
            name: 'Execute',
            projectName: 'Cerisa test',
            progress: 17,
            planned: {
                startDate: '2029-06-19T06:00:00Z',
                endDate: '2029-10-28T16:00:00Z',
                duration: 132
            },
            milestones: [
                {
                    id: 'cffcab8c-bf3e-4b79-869c-14ae1c31a3f2',
                    name: 'Rig Demobilization',
                    activityId: 134,
                    planned: {
                        startDate: new Date('2029-10-28T07:00:00Z'),
                        endDate: new Date('2029-10-28T07:00:00Z'),
                        duration: 0
                    }
                }
            ]
        },
        {
            id: '7df38da3-9eea-4abb-812c-ae7464863fa2',
            prefix: 'O',
            name: 'Operate',
            projectName: 'Cerisa test',
            progress: 0,
            planned: {
                startDate: '2029-11-18T07:00:00Z',
                endDate: '2031-02-21T16:00:00Z',
                duration: 461
            },
            milestones: []
        },
    ]

    timelineDataSource = [
      {
        id: '5863e10f-528a-41f5-bc0a-3b0252da63c3',
        name: 'Cerisa test',
        spudDate: {
          planned: {
            startDate: new Date('2023-05-11T00:00:00'),
            endDate: new Date('2023-05-11T00:00:00'),
            duration: 1
          }
        },
        startDate: new Date('2021-08-21T02:00:00Z'),
        endDate: new Date('2035-09-11T11:00:00Z'),
        duration: 5134.375,
        phases: [
          {
            id: '26019147-8737-42b6-9b5e-2fbe41becb68',
            prefix: 'F',
            projectName: 'Cerisa test',
            name: 'Feasability',
            progress: 62,
            date: new Date('2021-08-21T02:00:00Z'),
            color: '#EE7516',
            // planned: {
            //   startDate: new Date('2021-08-21T02:00:00Z'),
            //   endDate: new Date('2035-09-11T11:00:00Z'),
            //   duration: 5135
            // },
            milestones: []
          },
          {
              id: '26019147-8737-42b6-9b5e-2fbe41becb68',
              prefix: 'F',
              projectName: 'Cerisa test',
              name: 'Feasability',
              progress: 62,
              color: 'red',
              date: new Date('2035-09-11T11:00:00Z'),
              // planned: {
              //   startDate: new Date('2021-08-21T02:00:00Z'),
              //   endDate: new Date('2035-09-11T11:00:00Z'),
              //   duration: 5135
              // },
              milestones: []
          }
        ]
      },
      {
        id: '0aa19d2c-b282-4ce8-a36b-58bef2a22897',
        name: 'Uk test case',
        spudDate: {},
        startDate: new Date('2023-03-13T00:00:00'),
        endDate: new Date('2024-03-16T00:00:00'),
        duration: 369
      },
      {
        id: '1bd1d3cd-9e54-43ba-b74f-c821f4daf5b5',
        name: 'Erlend UK test 4',
        spudDate: {
          planned: {
            startDate: new Date('2023-09-20T00:00:00'),
            endDate: new Date('2023-09-21T00:00:00'),
            duration: 2
          }
        },
        startDate: new Date('2023-03-13T00:00:00'),
        endDate: new Date('2024-07-11T00:00:00'),
        duration: 486
      },
      {
        id: '0d09c677-7917-40e7-9eb6-5330fd5662e5',
        name: 'Test project with template 2',
        spudDate: {},
        startDate: new Date('2023-12-21T00:00:00'),
        endDate: new Date('2025-07-04T00:00:00'),
        duration: 561
      },
      {
        id: '816be293-012b-41f5-80fc-d5ba837c369c',
        name: 'Test project with template',
        spudDate: {},
        startDate: new Date('2023-12-01T06:00:00'),
        endDate: new Date('2027-02-03T16:00:00'),
        duration: 1160.4166666666667
      },
      {
        id: '4854d8d4-9a85-4fcf-8883-c34c4be1d160',
        name: 'Project with Existing project',
        spudDate: {},
        startDate: new Date('2023-07-13T00:00:00Z'),
        endDate: new Date('2033-01-12T14:00:00Z'),
        duration: 471.5833333333335
      },
      {
        id: '9105f7c8-ddcf-41f2-8fb1-cb72146df08a',
        name: 'Existing Project Test 01',
        spudDate: {},
        startDate: new Date('2023-10-07T02:00:00Z'),
        endDate: new Date('2033-07-05T14:00:00Z'),
        duration: 3559.5
      },
      {
        id: '5f49256b-6900-4a1a-b02c-68333bad4ff9',
        name: ' Existing Project Test 07',
        spudDate: {},
        startDate: new Date('2023-10-11T02:00:00Z'),
        endDate: new Date('2024-06-25T09:00:00Z'),
        duration: 258.2916666666667
      },
      {
        id: '4a11c455-92f6-4ce5-8643-9d4ea0174282',
        name: 'T7 Project',
        spudDate: {},
        startDate: new Date('2023-08-31T00:00:00Z'),
        endDate: new Date('2026-08-13T09:00:00Z'),
        duration: 1078.375
      },
      {
        id: 'ed68ebc5-bdaa-45ac-8c6b-bb476594827c',
        name: 'Vår test project',
        spudDate: {},
        startDate: new Date('2023-09-01T06:00:00Z'),
        endDate: new Date('2026-11-04T16:00:00Z'),
        duration: 1160.4166666666667
      },
    ]

  seriesBarWithSimpleData: any[] = [
    {
      name: 'Erlend Test 09.06',
      endDate: new Date('2023-06-14T06:00:00.000Z'),
      startDate:  new Date('2022-06-09T07:00:00.000Z')
    },
    {
      name: 'Erlend Germany',
      endDate:  new Date('2023-05-26T15:00:00.000Z'),
      startDate:  new Date('2022-03-05T07:00:00.000Z')
    },
    {
      name: 'Cerisa test',
      endDate:  new Date('2035-09-11T11:00:00.000Z'),
      startDate:  new Date('2021-08-21T02:00:00.000Z')
    },
    {
      name: 'Test project',
      startDate:  new Date('2022-06-19T18:00:00.000Z')
    },
    {
      name: 'Test new fast track',
      startDate:  new Date('2022-06-13T18:00:00.000Z')
    },
    {
      name: 'Rig Schedule',
      startDate:  new Date('2022-06-23T18:00:00.000Z')
    },
    {
      name: 'Test Project 27.06 2',
      endDate:  new Date('2023-07-17T18:00:00.000Z'),
      startDate:  new Date('2022-06-18T18:00:00.000Z')
    },
    {
      name: 'Erlend Test 05.07',
      startDate:  new Date('2022-06-30T18:00:00.000Z')
    },
    {
      name: 'Erlend Test 05.07 2',
      startDate:  new Date('2022-06-30T18:00:00.000Z')
    },
    {
      name: 'Erlend Test 05.07 3',
      startDate:  new Date('2022-06-30T18:00:00.000Z')
    },
    {
      name: 'Erlend Empty',
      startDate:  new Date('2022-06-30T18:00:00.000Z')
    },
    {
      name: 'Erlend Retest',
      endDate:  new Date('2024-01-17T18:00:00.000Z'),
      startDate:  new Date('2022-07-31T02:00:00.000Z')
    },
    {
      name: 'Test 1242',
      startDate:  new Date('2022-08-31T18:00:00.000Z')
    },
    {
      name: 'Test Egypt',
      startDate:  new Date('2021-12-31T18:00:00.000Z')
    },
    {
      name: 'NEw Egypt PCAP tested',
      startDate:  new Date('2022-10-31T18:00:00.000Z')
    }
  ]

  seriesBarWithSimpleData2: any[]  = [
    {
      name: 'Erlend Test 09.06',
      endDate: new Date('2024-09-14T06:00:00.000Z'),
      startDate:  new Date('2023-06-14T06:00:00.000Z')
    },
  ]
  scatterSeries: any = [
    {
      name: 'Erlend Test 09.06',
      startDate:  new Date('2022-08-09T07:00:00.000Z')
    }
  ]

  phaseSeries1 = [
    {
      projectName: 'Cersa',
      name: 'Phase 1',
      date: new Date('2021-05-09T06:00:00Z'),
    },
    {
      projectName: 'Cersa',
      name: 'Phase 1',
      date: new Date('2021-06-25T15:00:00Z')
    }
  ]

  phaseSeries2 = [
    {
      projectName: 'Cersa',
      name: 'Phase 2',
      date: new Date('2021-05-25T15:00:00Z'),
    },
    {
      projectName: 'Cersa',
      name: 'Phase 2',
      date: new Date('2021-09-25T15:00:00Z')
    }
  ]

  phaseSeries3 = [
    {
      projectName: 'Cersa',
      name: 'Phase 3',
      date: new Date('2021-09-25T15:00:00Z'),
    },
    {
      projectName: 'Cersa',
      name: 'Phase 3',
      date: new Date('2021-11-25T15:00:00Z')
    }
  ]

  completionPercentage = [
    {
      projectName: 'Cersa',
      date: new Date('2021-05-09T06:00:00Z'),
    },
    {
      projectName: 'Cersa',
      date: new Date('2021-05-25T15:00:00Z')
    }
  ]

  scatterSeries3: any = [
    {
      name: 'Cersa',
      startDate:  new Date('2021-05-19T06:00:00Z')
    }
  ]
  scatterSeries4: any = [
    {
      name: 'Cersa',
      startDate:  new Date('2021-06-25T15:00:00Z')
    }
  ]
  scatterSeries5: any = [
    {
      name: 'Cersa',
      startDate:  new Date('2021-09-25T15:00:00Z')
    }
  ]

  scatterSeries2: any = [
    {
      name: 'Erlend Test 09.06',
      startDate:  new Date('2022-10-09T07:00:00.000Z')
    }
  ]

  xAxis: AxisModel = {
    valueType: 'Category',
    majorGridLines: {width: 2, color: '#2E3A47'},
    majorTickLines: {width: 0},
    interval: 1,
    isInversed: true,
  }

  yAxis: AxisModel = {
    valueType: 'DateTime',
    labelFormat: 'yMMM',
    intervalType: 'Months',
    lineStyle: { width: 1 },
    majorGridLines: { width: 0 },
    majorTickLines: { width: 1 },
    opposedPosition: true,
  }

  tooltip: TooltipSettingsModel = {
    enable: true
  };

  zoom: ZoomSettingsModel = {
      mode: 'X',
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableSelectionZooming: true,
      enableScrollbar: true
  }

  title: string = 'Phases';

  markerCircle: MarkerSettingsModel= {
    width: 16,
    height: 16,
    shape:  'Circle', offset: {
        y: 10,
        x: 0
      }
  }

  markerVerticalLine: MarkerSettingsModel= {
    width: 12,
    height: 12,
    shape: 'InvertedTriangle',
    fill: '#EE7516'
  }

    identify(index: number, item: any){
        return item.id;
    }

  marker = { visible: true, width: 10, height: 10 };
}
