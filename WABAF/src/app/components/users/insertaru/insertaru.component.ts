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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Users } from './../../../models/users';
import { UsersService } from '../../../services/users.service';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-insertaru',
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
  templateUrl: './insertaru.component.html',
  styleUrl: './insertaru.component.css',
})
export class InsertaruComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private cS: UsersService,
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
      username: ['', Validators.required],
      password: ['', Validators.required],
      enabled: ['', Validators.required],
      codUs: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      freg: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fnac: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.user.id=this.form.value.codigo;
      this.user.username = this.form.value.username;
      this.user.password = this.form.value.password;
      this.user.enabled = this.form.value.enabled;
      this.user.codigoUs = this.form.value.codUs;
      this.user.fregUs = this.form.value.freg;
      this.user.nombreUs = this.form.value.nombre;
      this.user.apellidoUs = this.form.value.apellido;
      this.user.fnacUs = this.form.value.fnac;
      this.user.correoUs = this.form.value.correo;
      if (this.edicion) {
        //update
        this.cS.update(this.user).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        //insert
        this.cS.insert(this.user).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['usuarios']);
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.id),
          username: new FormControl(data.username),
          password: new FormControl(data.password),
          enabled: new FormControl(data.enabled),
          codUs: new FormControl(data.codigoUs),
          nombre: new FormControl(data.nombreUs),
          apellido: new FormControl(data.apellidoUs),
          fnac: new FormControl(data.fnacUs),
          correo: new FormControl(data.correoUs),
        });
      });
    }
  }

}
