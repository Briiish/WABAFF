import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ReportecpxpComponent } from "./reportecpxp/reportecpxp.component";
import { ReportehrxpComponent } from "./reportehrxp/reportehrxp.component";

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RouterOutlet, ReportehrxpComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  constructor(public route: ActivatedRoute) {}
}
