import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface nAlerts {
  system: string;
  date: string;
  totalToday: string;
  totalYesterday: string;
  totalMonth: string;
  totalLastMonth: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData) {
  }

  public users: nAlerts[] = [
    {
      system: 'SEA-SFP',
      date: 'Jun 11, 2023',
      totalToday: '8',
      totalYesterday: '15',
      totalMonth: '101',
      totalLastMonth: '134',
      color: 'success'
    },
    {
      system: 'SCE',
      date: 'Feb 26, 2023',
      totalToday: '23',
      totalYesterday: '18',
      totalMonth: '250',
      totalLastMonth: '198',
      color: 'success'
    },
    {
      system: 'SCT',
      date: 'Mar 13, 2023',
      totalToday: '3',
      totalYesterday: '7',
      totalMonth: '76',
      totalLastMonth: '89',
      color: 'success'
    },
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
