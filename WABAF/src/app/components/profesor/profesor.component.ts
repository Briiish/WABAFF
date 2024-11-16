import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarpComponent } from './listarp/listarp.component';


@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [RouterOutlet,ListarpComponent],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent {
  constructor(public route:ActivatedRoute) {}
}
