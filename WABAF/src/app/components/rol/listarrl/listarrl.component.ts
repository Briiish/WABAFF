import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Rol } from '../../../models/rol';
import { RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-listarrl',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './listarrl.component.html',
  styleUrl: './listarrl.component.css'
})
export class ListarrlComponent implements OnInit{

  datasource: MatTableDataSource<Rol> = new MatTableDataSource();
  displayedColumns: string[] = ['rl1', 'rl2', 'rl3', 'accion01','accion02'];

  constructor(private rlS: RolService) {}
  ngOnInit(): void {
    this.rlS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.rlS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.rlS.delete(id).subscribe((data) => {
      this.rlS.list().subscribe((data) => {
        this.rlS.setList(data);
      });
    });
  }

}
