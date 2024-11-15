import { Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { InsertarcursoComponent } from './components/curso/insertarcurso/insertarcurso.component';

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
];
