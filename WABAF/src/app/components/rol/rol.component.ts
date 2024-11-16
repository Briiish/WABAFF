import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarrlComponent } from './listarrl/listarrl.component';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [RouterOutlet, ListarrlComponent],
  templateUrl: './rol.component.html',
  styleUrl: './rol.component.css'
})
export class RolComponent {

  constructor(public route:ActivatedRoute){}

}
