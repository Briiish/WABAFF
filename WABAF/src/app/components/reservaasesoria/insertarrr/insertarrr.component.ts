import { Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { ReservaAsesoria } from '../../../models/reservaasesoria';
import { ReservaasesoriaService } from '../../../services/reservaasesoria.service';

@Component({
  selector: 'app-insertarrr',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './insertarrr.component.html',
  styleUrl: './insertarrr.component.css'
})
export class InsertarrrComponent {

  form: FormGroup = new FormGroup({});
  reservaasesoria: ReservaAsesoria = new ReservaAsesoria();
  id: number = 0;
  edicion: boolean = false;

  listaTipos: { value: string; viewValue: string }[] = [
    { value: 'Meet', viewValue: 'Meet' },
    { value: 'Zoom', viewValue: 'Zoom' },
  ];

  constructor(
    private rrS: ReservaasesoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });
    this.form = this.formBuilder.group({
      hcodigores: [''],
      hfechares: ['', Validators.required],
      hinicio: [new Date().setHours(0, 0), Validators.required], 
      hfin: [new Date().setHours(0, 0), Validators.required], 
      hviares: ['', Validators.required],
    });

  }

  insertar(): void {
    if (this.form.valid) {
      this.reservaasesoria.idRes = this.form.value.hcodigores;
      this.reservaasesoria.fechaRes = this.form.value.hfechares;
      this.reservaasesoria.hInicioRes = this.form.value.hinicio;
      this.reservaasesoria.hFinRes = this.form.value.hfin;
      this.reservaasesoria.viaRes = this.form.value.hviares;
    }
    if (this.edicion) {
      //update
      this.rrS.update(this.reservaasesoria).subscribe((data) => {
        this.rrS.list().subscribe((data) => {
          this.rrS.setList(data);
        });
      });
    } else {
      //insert
      this.rrS.insert(this.reservaasesoria).subscribe((data) => {
        this.rrS.list().subscribe((data) => {
          this.rrS.setList(data);
        });
      });
    }
    this.router.navigate(['reservas']);
  }

  init() {
    if (this.edicion) {
      this.rrS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigores: new FormControl(data.idRes),
          hfechares: new FormControl(data.fechaRes),
          hinicio: new FormControl(data.hInicioRes),
          hfin: new FormControl(data.hFinRes),
          hviares: new FormControl(data.viaRes),
        });
      });
    }
  }
}
