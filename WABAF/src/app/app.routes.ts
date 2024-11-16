import { Routes } from '@angular/router';
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
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
      path: 'homes',
      component: HomeComponent,
      canActivate: [seguridadGuard],  
    },

];
>>>>>>> Stashed changes
