import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarrrComponent } from './listarrr/listarrr.component';

@Component({
  selector: 'app-reservaasesoria',
  standalone: true,
  imports: [RouterOutlet, ListarrrComponent],
  templateUrl: './reservaasesoria.component.html',
  styleUrl: './reservaasesoria.component.css'
})
export class ReservaasesoriaComponent {

  constructor(public route:ActivatedRoute){}

}
