import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ReservaasesoriaService } from '../../../services/reservaasesoria.service';


@Component({
  selector: 'app-cantidadmodalidad',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './cantidadmodalidad.component.html',
  styleUrl: './cantidadmodalidad.component.css'
})
export class CantidadmodalidadComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'doughnut';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private reS: ReservaasesoriaService) {}
  ngOnInit(): void {
    this.reS.getCantidad().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.modailidad);
      this.barChartData = [
        {
          data: data.map((item) => item.cantModalidad),
          label: 'Cantidad de papeletas',
          backgroundColor: ['#FF0000', '#ffac33', '#FF6347', '#FF7F50'],
          borderColor:'rgba(173,216,230,1)',
          borderWidth:1
        },
      ];
    });
  }
}