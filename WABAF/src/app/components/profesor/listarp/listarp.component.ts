import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Profesor } from '../../../models/Profesor';
import { ProfesorService } from '../../../services/profesor.service';


@Component({
  selector: 'app-listarp',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './listarp.component.html',
  styleUrl: './listarp.component.css'
})
export class ListarpComponent implements OnInit{

  datasource: MatTableDataSource<Profesor> = new MatTableDataSource();
  displayedColumns: string[] = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'accion01','accion02'];

  constructor(private pS: ProfesorService) {}
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.pS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.pS.delete(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }
}
