import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarmComponent } from './listarm/listarm.component';

@Component({
    selector: 'app-modalidad',
    standalone: true,
    imports: [RouterOutlet,ListarmComponent],
    templateUrl: './modalidad.component.html',
    styleUrl: './modalidad.component.css'
  })
  export class ModalidadComponent {
    constructor(public route:ActivatedRoute) {}
  }