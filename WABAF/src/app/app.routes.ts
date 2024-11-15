import { Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { InsertarcursoComponent } from './components/curso/insertarcurso/insertarcurso.component';
import { ReservaasesoriaComponent } from './components/reservaasesoria/reservaasesoria.component';
import { InsertarreservaasesoriaComponent } from './components/reservaasesoria/insertarreservaasesoria/insertarreservaasesoria.component';
import { ReporteslinoComponent } from './components/reporteslino/reporteslino.component';
import { CantidadturnosComponent } from './components/reporteslino/cantidadturnos/cantidadturnos.component';

export const routes: Routes = [
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
];
