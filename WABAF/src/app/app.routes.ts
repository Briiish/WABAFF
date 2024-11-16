import { Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { InsertarcursoComponent } from './components/curso/insertarcurso/insertarcurso.component';
import { ReservaasesoriaComponent } from './components/reservaasesoria/reservaasesoria.component';
import { InsertarreservaasesoriaComponent } from './components/reservaasesoria/insertarreservaasesoria/insertarreservaasesoria.component';
import { ReporteslinoComponent } from './components/reporteslino/reporteslino.component';
import { CantidadturnosComponent } from './components/reporteslino/cantidadturnos/cantidadturnos.component';

import { UsersComponent } from './components/users/users.component';
import { InsertaruComponent } from './components/users/insertaru/insertaru.component';
import { RolComponent } from './components/rol/rol.component';
import { InsertarrlComponent } from './components/rol/insertarrl/insertarrl.component';
import { LoginComponent } from './components/login/login.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { RegistrarpComponent } from './components/profesor/registrarp/registrarp.component';
import { ModalidadComponent } from './components/modalidad/modalidad.component';
import { RegistrarmComponent } from './components/modalidad/registrarm/registrarm.component';

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
            path: 'nuevo', component: RegistrarpComponent
          },
          {
            path:'ediciones/:id',component:RegistrarpComponent
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
        path: 'cursos',
        component: CursoComponent,
        children: [
          {
            path: 'nuevo',
            component: InsertarcursoComponent
          },
          {
            path: 'ediciones/:id',
            component: InsertarcursoComponent
          }
        ]
      },
    {
        path: 'reservaasesoria',
        component: ReservaasesoriaComponent,
        children: [
          {
            path: 'nuevoasesoria',
            component: InsertarreservaasesoriaComponent
          },
          {
            path: 'edicionesasesoria/:id',
            component: InsertarreservaasesoriaComponent
          }
        ]
      },
      {
        path:'querys',
        component:ReporteslinoComponent,
        children:[{
          path:'cantreservas',
          component:CantidadturnosComponent,
        }]
      }
    {
      path: 'homes',
      component: HomeComponent,
      canActivate: [seguridadGuard],  
    },

];


