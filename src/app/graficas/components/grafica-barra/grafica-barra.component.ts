import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() datasets: ChartDataset<'bar'>[] = [];
  @Input() labels: string[] = [];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartData!: ChartData<'bar'>;

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      //Para invertir las barras y colocarlas horizontalmente necesitamos cambiar el "indexAxis"
      this.barChartOptions!.indexAxis = 'y';
      //Para que se nos muestren todos los datos horizontalmente también debemos retirar el
      //"min" que tenemos en el barChartOptions.
      this.barChartOptions!.scales!["y"]!.min = 0;
    }

    this.barChartData = { labels: this.labels, datasets: this.datasets };
  }

}
