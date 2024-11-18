import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Profesor } from '../../../models/Profesor';
import { Comentario } from '../../../models/comentario';
import { ProfesorService } from '../../../services/profesor.service';
import { ComentarioService } from '../../../services/comentario.service';

@Component({
  selector: 'app-insertarcm',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './insertarcm.component.html',
  styleUrl: './insertarcm.component.css'
})
export class InsertarcmComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  id: number = 0;
  comentario: Comentario = new Comentario();
  listaProfesores: Profesor[] = [];
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cmS: ComentarioService,
    private router: Router,
    private pS: ProfesorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      codigo: [''],
      puntos: ['', Validators.required],
      resena: ['', Validators.required],
      profesor: ['', Validators.required],
    });
    this.pS.list().subscribe((d) => {
      this.listaProfesores = d;
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.comentario.idCo = this.form.value.codigo;
      this.comentario.puntosCo = this.form.value.puntos;
      this.comentario.resenaCo = this.form.value.resena;
      this.comentario.pro.idProfe = this.form.value.profesor;
      if (this.edicion) {
        this.cmS.update(this.comentario).subscribe((data) => {
          this.cmS.list().subscribe((data) => {
            this.cmS.setList(data);
          });
        });
      } else {
        this.cmS.insert(this.comentario).subscribe((data) => {
          this.cmS.list().subscribe((d) => {
            this.cmS.setList(d);
          });
        });
      }
      this.router.navigate(['comentarios']);
    }
  }

  init() {
    if (this.edicion) {
      this.cmS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idCo),
          puntos: new FormControl(data.puntosCo),
          resena: new FormControl(data.resenaCo),
          profesor: new FormControl(data.pro),
        });
      });
    }
  }
  
}
