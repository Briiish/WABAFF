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
import { Reservaasesoria } from '../../../models/Reservaasesoria';
import { ReservaasesoriaService } from '../../../services/reservaasesoria.service';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-insertarreservaasesoria',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    CommonModule,],
  templateUrl: './insertarreservaasesoria.component.html',
  styleUrl: './insertarreservaasesoria.component.css'
})
export class InsertarreservaasesoriaComponent implements OnInit {
  formasesoria: FormGroup = new FormGroup({});
  reservaasesoria: Reservaasesoria = new Reservaasesoria();
  id: number = 0;
  edicion: boolean = false;
  listaTipos: { value: string; viewValue: string }[] = [
    { value: 'Presencial', viewValue: 'Presencial' },
    { value: 'Virtual', viewValue: 'Virtual' },
  ];

  constructor(
    private reS: ReservaasesoriaService,
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
    this.formasesoria = this.formBuilder.group({
      hcodigores: [''],
      hfechares: ['', Validators.required],
      hinicio: [new Date().setHours(0, 0), Validators.required], 
      hfin: [new Date().setHours(0, 0), Validators.required], 
      hviares: ['', Validators.required],
    });

  }

  insertar(): void {
    if (this.formasesoria.valid) {
      this.reservaasesoria.idRes = this.formasesoria.value.hcodigores;
      this.reservaasesoria.fechaRes = this.formasesoria.value.hfechares;
      this.reservaasesoria.hInicioRes = this.formasesoria.value.hinicio;
      this.reservaasesoria.hFinRes = this.formasesoria.value.hfin;
      this.reservaasesoria.viaRes = this.formasesoria.value.hviares;
    }
    if (this.edicion) {
      //update
      this.reS.update(this.reservaasesoria).subscribe((data) => {
        this.reS.list().subscribe((data) => {
          this.reS.setList(data);
        });
      });
    } else {
      //insert
      this.reS.insert(this.reservaasesoria).subscribe((data) => {
        this.reS.list().subscribe((data) => {
          this.reS.setList(data);
        });
      });
    }
    this.router.navigate(['reservaasesoria']);
  }

  init() {
    if (this.edicion) {
      this.reS.listId(this.id).subscribe((data) => {
        this.formasesoria = new FormGroup({
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