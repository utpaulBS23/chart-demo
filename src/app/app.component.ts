import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AccumulationChartAllModule,
  AxisModel,
  ChartAllModule,
  ChartTheme, DateTimeService,
  ILoadedEventArgs, MultiLevelLabelService,
  RangeNavigatorAllModule, ScrollBarService, TooltipService, TooltipSettingsModel, ZoomService
} from '@syncfusion/ej2-angular-charts';
import { NgIf } from '@angular/common';

@Component({
  imports: [RouterOutlet, ChartAllModule, NgIf],
  providers: [ ScrollBarService, ZoomService, DateTimeService, MultiLevelLabelService, TooltipService, ScrollBarService ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  type: string = 'bar';
  phaseData: any[] = [{
    name: 'Feasability',
    startDate: '2021-08-21T02:00:00Z',
    endDate: '2035-09-11T11:00:00Z'
  }];
  tooltipRange: TooltipSettingsModel = {
    enable: true
  };

  activityData1: any[] = [
    {
      phaseName: 'Feasability',
      activityName: 'Kick off Meeting to develop the Well/Project Initiation Note (WIN/PIN)',
      startDate: '2023-07-22T02:00:00Z',
      color: '#EE7516'
    },
    {
      phaseName: 'Feasability',
      activityName: 'Kick off Meeting to develop the Well/Project Initiation Note (WIN/PIN)',
      startDate: '2023-08-30T11:00:00Z',
      color: '#000'
    }
  ];

  activityData2: any[] = [
    {
      phaseName: 'Feasability',
      activityName: 'Well/Project Initation Note document update test',
      startDate: '2023-08-30T07:00:00Z',
      color: '#ff0097'
    },
    {
      phaseName: 'Feasability',
      activityName: 'Well/Project Initation Note document update test',
      startDate: '2029-09-11T11:00:00Z',
      color: '#000'
    }
  ];

  public triangelData: Object[] = [
    { x: new Date(2016, 3, 7), y: 8 }
  ];

  triangleMarker: any = {
    shape: 'InvertedTriangle',
    width: 10, height: 10
  };

  public data1: Object[] = [
    { x: new Date(2016, 2, 7), y: 6.3 },
    { x: new Date(2017, 3, 15), y: 6.3 }
  ];
  public data2: Object[] = [
    { x: new Date(2016, 2, 7), y: 6.3 },
    { x: new Date(2016, 3, 15), y: 6.3 }
  ];

  public data3: Object[] = [
    { x: new Date(2016, 3, 7), y: 6.3 },
    { x: new Date(2017, 1, 15), y: 6.3 }
  ];
  //Initializing Primary X Axis
  public primaryXAxis1: Object = {
    valueType: 'DateTime',
    intervalType: 'Days',
    labelFormat: 'MMM d',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  //Initializing Primary X Axis
  public primaryYAxis1: Object = {
    minimum: -20,
    maximum: 30,
    interval: 10,
    edgeLabelPlacement: 'Shift',
    labelFormat: '{value}°C',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
  };

  public data: Object[] = [
    { Month : 'Jan', CA_LowTemp : 28, CA_HighTemp : 72, Text : 'January', CO_LowTemp : 38, CO_HighTemp : 78,CA1_LowTemp : 50, CA1_HighTemp : 100, CA2_LowTemp : 100, CA2_HighTemp : 200},
    { Month : 'Feb', CA_LowTemp : 25, CA_HighTemp : 75, Text : 'February', CO_LowTemp : 38, CO_HighTemp : 78 },
    { Month : 'Mar', CA_LowTemp : 18, CA_HighTemp : 65, Text : 'March', CO_LowTemp : 27, CO_HighTemp : 78 },
    { Month : 'Apr', CA_LowTemp : 22, CA_HighTemp : 69, Text : 'April', CO_LowTemp : 38, CO_HighTemp : 78 },
    { Month : 'May', CA_LowTemp : 56, CA_HighTemp : 87, Text : 'May', CO_LowTemp : 28, CO_HighTemp : 79 },
    { Month : 'Jun', CA_LowTemp : 48, CA_HighTemp : 75, Text : 'June', CO_LowTemp : 38, CO_HighTemp : 78 },
    { Month : 'Jul', CA_LowTemp : 40, CA_HighTemp : 78, Text : 'July', CO_LowTemp : 37, CO_HighTemp : 66 },
    // { Month : 'Aug', CA_LowTemp : 35, CA_HighTemp : 73, Text : 'August', CO_LowTemp : 38, CO_HighTemp : 78 },
    // { Month : 'Sep', CA_LowTemp : 43, CA_HighTemp : 64, Text : 'September', CO_LowTemp : 25, CO_HighTemp : 52 },
    // { Month : 'Oct', CA_LowTemp : 38, CA_HighTemp : 77, Text : 'October', CO_LowTemp : 38, CO_HighTemp : 78 },
    // { Month : 'Nov', CA_LowTemp : 28, CA_HighTemp : 54, Text : 'November', CO_LowTemp : 20, CO_HighTemp : 60 },
    // { Month : 'Dec', CA_LowTemp : 29, CA_HighTemp : 56, Text : 'December', CO_LowTemp : 20, CO_HighTemp : 60 }
  ];
  public series1 = [
    { Month : 'Jan', CA_HighTemp : 80 }
  ]
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: 'Temperature (In Fahrenheit)',
    labelFormat: '{value}˚F',
    edgeLabelPlacement: 'Shift',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 }
  };
  public title: string = 'Temperature Variation';
  public tooltip: Object = {
    enable: true,
    header: '<b>${point.tooltip}</b>',
    format: 'Temperature : <b>${point.low} - ${point.high}</b>'
  };
  public marker: Object = {
    dataLabel:{ visible:true, position:'Outer'}
  }

  public marker2: Object = {
    width: 20,
    height: 20,
    shape:  'Circle'
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
  };
  // custom code end
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  constructor() {
    //code
  };

  public dataStepLine: Object[] = [
    { Period : new Date(1975, 1, 1), CHN_UnemploymentRate : 16, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 3.4 , color: 'red' },
    { Period : new Date(1978, 1, 1), CHN_UnemploymentRate : 12.5, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 4.4, color: 'green' },
    { Period : new Date(1981, 1, 1), CHN_UnemploymentRate : 19, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 6, color: '#ff0097' },
    { Period : new Date(1984, 1, 1), CHN_UnemploymentRate : 14.4, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 7 },
    { Period : new Date(1987, 1, 1), CHN_UnemploymentRate : 11.5, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 11.3 },
    { Period : new Date(1990, 1, 1), CHN_UnemploymentRate : 14, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 10.1 },
    { Period : new Date(1993, 1, 1), CHN_UnemploymentRate : 10, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 7.8 },
    { Period : new Date(1996, 1, 1), CHN_UnemploymentRate : 16, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 8.5 },
    { Period : new Date(2000, 1, 1), CHN_UnemploymentRate : 16, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 8.5 },
    { Period : new Date(2005, 1, 1), CHN_UnemploymentRate : 16, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 8.5 },
    { Period : new Date(2010, 1, 1), CHN_UnemploymentRate : 16, AUS_UnemploymentRate : 35, ITA_UnemploymentRate : 8.5 }
  ];
  public chartAreaStepLine: Object = {
    border: {
      width: 0
    }
  };

  //Initializing Primary X Axis
  public primaryXAxisStepLine: Object = {
    minimum : new Date(1971,6,11),
    maximum : new Date(2012,6,11), valueType: 'DateTime', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxisStepLine: Object = {
    title: 'Production(In Percentage)',
    lineStyle: { width: 0 },
    interval: 10,
    majorTickLines: { width: 0 },
    labelFormat: '{value}%'
  };
  public markerStepLine: Object = {
    visible: true,
    width: 7,
    height: 7
  };
  public tooltipStepLine: Object = {
    enable: true,
    header: '<b>Fruit Production</b>',
    shared: true,
    format: '${point.x} : <b> ${point.y} </b>',
  };
  public legendStepLine: Object = {
    visible: true,
    enableHighlight : true
  }

  public series2 = [
    { Period : new Date(1975, 1, 1), AUS_UnemploymentRate : 35 },
    { Period : new Date(1979, 1, 1), AUS_UnemploymentRate : 35 },
  ]

  onClickToShowChart(): void {
    this.type = this.type === 'bar' ? 'line' : 'bar';
  }
}
