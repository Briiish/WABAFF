import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Curso } from '../../../models/Curso';
import { CursoService } from '../../../services/curso.service';
@Component({
  selector: 'app-insertarcurso',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,],
  templateUrl: './insertarcurso.component.html',
  styleUrl: './insertarcurso.component.css'
})
export class InsertarcursoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  curso: Curso = new Curso();
  id:number=0;
  edicion:boolean=false;

  constructor(
    private cS: CursoService,
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
      hcodigo: [''],
      hdescripcion: ['', Validators.required],
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.curso.idCur = this.form.value.hcodigo;
      this.curso.descriCur = this.form.value.hdescripcion;
    }
    if (this.edicion) {
      //update
      this.cS.update(this.curso).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
    } else {
      //insert
      this.cS.insert(this.curso).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
    }
    this.router.navigate(['cursos'])
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idCur),
          hdescripcion: new FormControl(data.descriCur),
        });
      });
    }
  }
}
