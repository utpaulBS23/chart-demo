import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AxisModel,
  ChartAllModule, ChartAreaModel,
  ChartTheme, DateTimeService,
  ILoadedEventArgs, MultiLevelLabelService,
  ScrollBarService, TooltipService, TooltipSettingsModel, ZoomService, ZoomSettingsModel
} from '@syncfusion/ej2-angular-charts';
import { NgIf } from '@angular/common';

interface Timeline {
  name: string;
  startDate?: Date;
  endDate?: Date;
}
@Component({
  imports: [RouterOutlet, ChartAllModule, NgIf],
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

  seriesBarWithSimpleData: Timeline[] = [
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

  scatterSeries: any = [
    {
      name: 'Erlend Test 09.06',
      startDate:  new Date('2022-08-09T07:00:00.000Z')
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
    enableSelectionZooming: true,
    mode: 'X'
  }

  title: string = 'Active Projects';

  markerCircle: any= {
    width: 10,
    height: 10,
    shape:  'Circle'
  }
}
