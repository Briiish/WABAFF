import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CantidadturnosComponent } from './cantidadturnos/cantidadturnos.component';

@Component({
  selector: 'app-reporteslino',
  standalone: true,
  imports: [RouterOutlet,CantidadturnosComponent],
  templateUrl: './reporteslino.component.html',
  styleUrl: './reporteslino.component.css'
})
export class ReporteslinoComponent {
  constructor(public route: ActivatedRoute) {}
}
