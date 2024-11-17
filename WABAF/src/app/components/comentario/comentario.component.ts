import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarcmComponent } from "./listarcm/listarcm.component";

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [ListarcmComponent, RouterOutlet],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent {

  constructor(public route:ActivatedRoute){}
  
}
