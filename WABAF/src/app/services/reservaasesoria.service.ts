import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservaAsesoria } from '../models/reservaasesoria';
import { Cantidadmodalidad } from '../models/Cantidadmodalidad';
import { Cantidadturnos } from '../models/Cantidadturnos';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ReservaasesoriaService {

  private url = `${base_url}/reservas`;
  private listaCambio = new Subject<ReservaAsesoria[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<ReservaAsesoria[]>(this.url);
  }
  insert(rr: ReservaAsesoria) {
    return this.http.post(this.url, rr);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: ReservaAsesoria[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<ReservaAsesoria>(`${this.url}/${id}`);
  }
  update(reserva: ReservaAsesoria) {
    return this.http.put(this.url, reserva);
  }
getCantidad(): Observable<Cantidadmodalidad[]> {
    return this.http.get<Cantidadmodalidad[]>(
      `${this.url}/cantidades`
    );
  }
  getTurnos(): Observable<Cantidadturnos[]> {
    return this.http.get<Cantidadturnos[]>(
      `${this.url}/turnos`
    );
  }
}
