import { UsersService } from './../../../services/users.service';
import { ChartDataset, ChartOptions, ChartType } from './../../../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-reportehrxa',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportehrxa.component.html',
  styleUrl: './reportehrxa.component.css'
})
export class ReportehrxaComponent {

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

  constructor(private cS: UsersService) {}

  ngOnInit(): void {
    this.cS.gethrxa().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nombreUser);
      this.barChartData = [
        {
          data: data.map((item) => item.horasReservadas),
          label: 'cantidad de horas reservadas por estudiante',
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
