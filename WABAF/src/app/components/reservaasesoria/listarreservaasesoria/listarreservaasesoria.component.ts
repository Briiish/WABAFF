import { Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Reservaasesoria } from '../../../models/Reservaasesoria';
import { ReservaasesoriaService } from '../../../services/reservaasesoria.service';

@Component({
  selector: 'app-listarreservaasesoria',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule],
  templateUrl: './listarreservaasesoria.component.html',
  styleUrl: './listarreservaasesoria.component.css'
})
export class ListarreservaasesoriaComponent implements OnInit {
  datasource:MatTableDataSource<Reservaasesoria> = new MatTableDataSource();
  displayedColumns:string[]=['id','fecha', 'inicio','fin','medio','accion02']

  constructor(private raS: ReservaasesoriaService) {}

  ngOnInit(): void {
    this.raS.list().subscribe(data=>{
      this.datasource=new MatTableDataSource(data)
    })
    this.raS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }
}
