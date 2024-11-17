import { ChartDataset, ChartOptions, ChartType } from './../../../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ProfesorService } from '../../../services/profesor.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-reportecpxp',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportecpxp.component.html',
  styleUrl: './reportecpxp.component.css'
})
export class ReportecpxpComponent {
  
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
    this.pS.getcpxp().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nombreProfe);
      this.barChartData = [
        {
          data: data.map((item) => item.Puntos),
          label: 'cantidad de puntos por profesor',
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
