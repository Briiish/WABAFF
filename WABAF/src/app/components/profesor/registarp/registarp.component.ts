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
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Profesor } from '../../../models/Profesor';
import { ProfesorService } from '../../../services/profesor.service';


@Component({
  selector: 'app-registarp',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './registarp.component.html',
  styleUrl: './registarp.component.css'
})
export class RegistarpComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  profesor: Profesor = new Profesor();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private pS: ProfesorService,
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
      codigo: [''],
      pcod: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      pnombre: ['', Validators.required],
      papellido: ['', Validators.required],
      pcurso: ['', Validators.required],
      pdia: ['', Validators.required],
      pturno: ['', Validators.required],
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.profesor.idProfe=this.form.value.codigo;
      this.profesor.codProfe = this.form.value.pcod;
      this.profesor.nombreProfe = this.form.value.pnombre;
      this.profesor.apellidoProfe = this.form.value.papellido;
      this.profesor.cursoProfe = this.form.value.pcurso;
      this.profesor.diaProfe = this.form.value.pdia;
      this.profesor.turnoProfe = this.form.value.pturno;
      if (this.edicion) {
        //update
        this.pS.update(this.profesor).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        //insert
        this.pS.insert(this.profesor).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['profesores']);
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idProfe),
          pcod: new FormControl(data.codProfe),
          pnombre: new FormControl(data.nombreProfe),
          papellido: new FormControl(data.apellidoProfe),
          pcurso: new FormControl(data.cursoProfe),
          pdia: new FormControl(data.diaProfe),
          pturno: new FormControl(data.turnoProfe),
        });
      });
    }
  }

}
