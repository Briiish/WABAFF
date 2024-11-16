import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Modalidad } from '../../../models/Modalidad';
import { ModalidadService } from '../../../services/modalidad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarm',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './registrarm.component.html',
  styleUrl: './registrarm.component.css'
})
export class RegistrarmComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  modalidad: Modalidad = new Modalidad();
  id: number = 0;         
  edicion: boolean = false;

  constructor(
    private mS: ModalidadService,
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
      mcod: [''],
      desmod: ['', Validators.required],
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.modalidad.idMo = this.form.value.mcod;
      this.modalidad.descriMo = this.form.value.desmod;
      if (this.edicion) {
        //update
        this.mS.update(this.modalidad).subscribe((data) => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      } else {
        //insert
        this.mS.insert(this.modalidad).subscribe((data) => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['modalidades']);
  }

  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          mcod: new FormControl(data.idMo),
          desmod: new FormControl(data.descriMo),
        });
      });
    }
  }
}

