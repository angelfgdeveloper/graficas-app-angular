import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  public barChartOptions: ChartConfiguration['options'] = { responsive: true };

  proveedoresData: ChartDataset<'bar'>[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  public barChartData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: this.proveedoresData
  };

  productoData: ChartDataset<'bar'>[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];

  constructor() {}

}
