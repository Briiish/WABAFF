import { Component } from '@angular/core';
import { ListarpComponent } from "./listarp/listarp.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [ListarpComponent, RouterOutlet],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent {

  constructor(public route:ActivatedRoute){}
}
