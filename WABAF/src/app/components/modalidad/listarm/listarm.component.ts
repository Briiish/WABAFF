import { Component, OnInit } from '@angular/core';
import { Modalidad } from '../../../models/Modalidad';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ModalidadService } from '../../../services/modalidad.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listarm',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './listarm.component.html',
  styleUrl: './listarm.component.css'
})
export class ListarmComponent implements OnInit{
  
  datasource: MatTableDataSource<Modalidad> = new MatTableDataSource();
  displayedColumns: string[] = ['m1', 'm2', 'accion01','accion02'];

  constructor(private mS: ModalidadService) {}
  ngOnInit(): void {      
    this.mS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.mS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.mS.delete(id).subscribe((data) => {
      this.mS.list().subscribe((data) => {
        this.mS.setList(data);
      });
    });
  }
}
