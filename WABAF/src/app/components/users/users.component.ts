import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruComponent } from './listaru/listaru.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, ListaruComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(public route:ActivatedRoute){}

}
