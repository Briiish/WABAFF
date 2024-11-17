import { Routes } from '@angular/router';
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
<<<<<<< Updated upstream

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
      path: 'homes',
      component: HomeComponent,
      canActivate: [seguridadGuard],  
    },

=======
import { RegistarpComponent } from './components/profesor/registarp/registarp.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { InsertarcmComponent } from './components/comentario/insertarcm/insertarcm.component';
import { ReservaasesoriaComponent } from './components/reservaasesoria/reservaasesoria.component';
import { InsertarrrComponent } from './components/reservaasesoria/insertarrr/insertarrr.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ReportehrxpComponent } from './components/reportes/reportehrxp/reportehrxp.component';
import { ReportecpxpComponent } from './components/reportes/reportecpxp/reportecpxp.component';

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
    path:'reportes',component:ReportesComponent,
    children:[
      {
        path:'hrxp',component:ReportehrxpComponent
      },
      {
        path:'cpxp',component:ReportecpxpComponent
      }
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'homes',
    component: HomeComponent,
    canActivate: [seguridadGuard],  
  },
>>>>>>> Stashed changes
];

