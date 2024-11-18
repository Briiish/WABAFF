import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { InsertaruComponent } from './components/users/insertaru/insertaru.component';
import { RolComponent } from './components/rol/rol.component';
import { InsertarrlComponent } from './components/rol/insertarrl/insertarrl.component';
import { LoginComponent } from './components/login/login.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { ModalidadComponent } from './components/modalidad/modalidad.component';
import { RegistrarmComponent } from './components/modalidad/registrarm/registrarm.component';

import { RegistarpComponent } from './components/profesor/registarp/registarp.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { InsertarcmComponent } from './components/comentario/insertarcm/insertarcm.component';
import { ReservaasesoriaComponent } from './components/reservaasesoria/reservaasesoria.component';
import { InsertarrrComponent } from './components/reservaasesoria/insertarrr/insertarrr.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ReportehrxpComponent } from './components/reportes/reportehrxp/reportehrxp.component';
import { ReportecpxpComponent } from './components/reportes/reportecpxp/reportecpxp.component';
import { ReportehrxaComponent } from './components/reportes/reportehrxa/reportehrxa.component';
import { ReporteaxrtComponent } from './components/reportes/reporteaxrt/reporteaxrt.component';
import { Cantidadmodalidad } from './models/Cantidadmodalidad';
import { CantidadmodalidadComponent } from './components/reportes/cantidadmodalidad/cantidadmodalidad.component';
import { CantidadturnosComponent } from './components/reportes/cantidadturnos/cantidadturnos.component';
import { CursoComponent } from './components/curso/curso.component';
import { InsertarcursoComponent } from './components/curso/insertarcurso/insertarcurso.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'usuarios',
    component: UsersComponent,
    children: [
      { 
         path: 'nuevo', component: InsertaruComponent 
      },
      {
         path:'ediciones/:id',component:InsertaruComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'roles',
    component: RolComponent,
    children: [
      { 
        path: 'nuevo', component: InsertarrlComponent 
      },
      {
         path:'ediciones/:id',component:InsertarrlComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'profesores',
    component: ProfesorComponent,
    children: [
      { 
        path: 'nuevo', component: RegistarpComponent
      },
      {
        path:'ediciones/:id',component:RegistarpComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'modalidades',
    component: ModalidadComponent,
    children: [
      { 
        path: 'nuevo', component: RegistrarmComponent
      },
      {
        path:'ediciones/:id',component:RegistrarmComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'comentarios',
    component: ComentarioComponent,
    children: [
      { 
        path: 'nuevo', component: InsertarcmComponent
      },
      {
        path:'ediciones/:id',component:InsertarcmComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'reservas',
    component: ReservaasesoriaComponent,
    children: [
      { 
        path: 'nuevo', component: InsertarrrComponent
      },
      {
        path:'ediciones/:id',component:InsertarrrComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'cursos',
    component: CursoComponent,
    children: [
      { 
        path: 'nuevo', component: InsertarcursoComponent
      },
      {
        path:'ediciones/:id',component:InsertarcursoComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path:'reportes',component:ReportesComponent,
    children:[
      {
        path:'hrxp',component:ReportehrxpComponent
      },
      {
        path:'cpxp',component:ReportecpxpComponent
      },
      {
        path:'hrxa',component:ReportehrxaComponent
      },
      {
        path:'axrt',component:ReporteaxrtComponent
      },
{
        path:'cantidades',component:CantidadmodalidadComponent,
      },
{
        path:'turnos',component:CantidadturnosComponent,
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'homes',
    component: HomeComponent,
    canActivate: [seguridadGuard],  
  },

];

