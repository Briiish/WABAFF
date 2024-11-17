import { ChartDataset, ChartOptions, ChartType } from './../../../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ProfesorService } from '../../../services/profesor.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-reportehrxp',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportehrxp.component.html',
  styleUrl: './reportehrxp.component.css'
})
export class ReportehrxpComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  //barChartType: ChartType = 'pie';
  //barChartType: ChartType = 'doughnut';
  //barChartType: ChartType = 'line';
  barChartType: ChartType = 'bar';
  //barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private pS: ProfesorService) {}

  ngOnInit(): void {
    this.pS.gethrxp().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nombreProfesor);
      this.barChartData = [
        {
          data: data.map((item) => item.horasReservadas),
          label: 'cantidad de horas reservadas por profesor',
          backgroundColor: [
            '#C0504D',
            '#8064A2',
            '#4BACC6',
            '#9BBB59',
            '#4F81BC',
          ],
          borderColor: 'rgba(173, 216, 230, 1)',
          borderWidth: 1,
        },
      ];
    });
  }
}

