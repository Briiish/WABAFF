import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChartDataset, ChartOptions, ChartType } from './../../../../../node_modules/chart.js/dist/types/index.d';

import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { UsersService } from '../../../services/users.service';
Chart.register(...registerables);

@Component({
  selector: 'app-reporteaxrt',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    CommonModule,
    BaseChartDirective,
  ],
  templateUrl: './reporteaxrt.component.html',
  styleUrl: './reporteaxrt.component.css'
})
export class ReporteaxrtComponent {
  form: FormGroup = new FormGroup({});

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  //barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private cS: UsersService, private formBuilder: FormBuilder) {}

  handleSubmit() {
    const startDate = this.form.value.finicio as Date;
    const endDate = this.form.value.ffin as Date;

    this.cS.getaxrt(startDate, endDate).subscribe((data) => {
      console.log('Data received:', data);
      this.barChartLabels = ['Total de estudiantes registrados'];
      this.barChartData = [
        {
          data: [data.cantidadUser],
          label: 'Usuarios',
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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      finicio: ['', Validators.required],
      ffin: ['', Validators.required],
    });
  }

}
