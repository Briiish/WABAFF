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
import { Rol } from '../../../models/rol';
import { RolService } from '../../../services/rol.service';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-insertarrl',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule
  ],
  templateUrl: './insertarrl.component.html',
  styleUrl: './insertarrl.component.css'
})
export class InsertarrlComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  rol: Rol = new Rol();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Users[] = [];

  constructor(
    private rlS: RolService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cS: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });

    this.form = this.formBuilder.group({
      codigo: [''],
      rol: ['', Validators.required],
      usuario: ['', Validators.required],
    });
    this.cS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.rol.idRol=this.form.value.codigo;
      this.rol.rol = this.form.value.rol;
      this.rol.user.id = this.form.value.usuario;
      if (this.edicion) {
        //update
        this.rlS.update(this.rol).subscribe((data) => {
          this.rlS.list().subscribe((data) => {
            this.rlS.setList(data);
          });
        });
      } else {
        //insert
        this.rlS.insert(this.rol).subscribe((data) => {
          this.rlS.list().subscribe((data) => {
            this.rlS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['roles']);
  }

  init() {
    if (this.edicion) {
      this.rlS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idRol),
          rol: new FormControl(data.rol),
          usuario: new FormControl(data.user),
        });
      });
    }
  }

}
