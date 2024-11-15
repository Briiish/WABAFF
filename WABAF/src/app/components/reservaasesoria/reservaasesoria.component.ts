import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { ListarreservaasesoriaComponent } from './listarreservaasesoria/listarreservaasesoria.component';

@Component({
  selector: 'app-reservaasesoria',
  standalone: true,
  imports: [RouterOutlet, ListarreservaasesoriaComponent],
  templateUrl: './reservaasesoria.component.html',
  styleUrl: './reservaasesoria.component.css'
})
export class ReservaasesoriaComponent {
  constructor(public route:ActivatedRoute){}
}

