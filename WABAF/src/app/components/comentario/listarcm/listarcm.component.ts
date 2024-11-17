import { Component } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Comentario } from '../../../models/comentario';
import { ComentarioService } from '../../../services/comentario.service';

@Component({
  selector: 'app-listarcm',
  standalone: true,
  imports: [MatTableModule, MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './listarcm.component.html',
  styleUrl: './listarcm.component.css'
})
export class ListarcmComponent{

  dataSource: MatTableDataSource<Comentario> = new MatTableDataSource();
  displayedColumns: string[] = ['cm1', 'cm2', 'cm3', 'cm4', 'accion01','accion02'];

  constructor(private cmS: ComentarioService) {}
  ngOnInit(): void {
    this.cmS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cmS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.cmS.delete(id).subscribe((data) => {
      this.cmS.list().subscribe((data) => {
        this.cmS.setList(data);
      });
    });
  }

}
