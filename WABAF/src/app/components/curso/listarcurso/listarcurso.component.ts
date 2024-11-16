import { Component, OnInit} from '@angular/core';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Curso } from '../../../models/Curso';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-listarcurso',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './listarcurso.component.html',
  styleUrl: './listarcurso.component.css'
})
export class ListarcursoComponent {
  datasource:MatTableDataSource<Curso> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2', 'accion01','accion02']

  constructor(private cS: CursoService) {}
  
  ngOnInit(): void {
    this.cS.list().subscribe(data=>{
      this.datasource=new MatTableDataSource(data)
    })
    this.cS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.datasource.data = data;
        this.cS.setList(data);
      });
    });
  }
}
