import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#87D450', '#50D479', '#F29A1D', '#68EB66'],
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'green'
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}
}
