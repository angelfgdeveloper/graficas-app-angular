import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: never[] = [];
  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private graficasService: GraficasService,
  ) { }

  ngOnInit(): void {
    // SIN RXJS
    // this.graficasService.getUsuariosRedesSociales().subscribe(data => {
    //   console.log(data);

    //   const labels = Object.keys(data) as never[];
    //   const values = Object.values(data);

    //   this.doughnutChartLabels = labels;

    //   this.doughnutChartData = {
    //     labels: labels,
    //     datasets: [{ data: values }]
    //   };
    // });

    // CON RXJS
    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({ labels, values }) => {

      this.doughnutChartLabels = labels;
      this.doughnutChartData = {
        labels: labels,
        datasets: [{ data: values }]
      };

    });



  }

}
