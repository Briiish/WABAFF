import { Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ReservaAsesoria } from '../../../models/reservaasesoria';
import { ReservaasesoriaService } from '../../../services/reservaasesoria.service';

@Component({
  selector: 'app-listarrr',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule],
  templateUrl: './listarrr.component.html',
  styleUrl: './listarrr.component.css'
})
export class ListarrrComponent {

  datasource:MatTableDataSource<ReservaAsesoria> = new MatTableDataSource();
  displayedColumns:string[]=['id','fecha', 'inicio','fin','medio','accion02']

  constructor(private rrS: ReservaasesoriaService) {}

  ngOnInit(): void {
    this.rrS.list().subscribe(data=>{
      this.datasource=new MatTableDataSource(data)
    })
    this.rrS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }
}
