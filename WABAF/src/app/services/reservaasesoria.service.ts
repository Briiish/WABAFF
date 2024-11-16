import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Reservaasesoria } from '../models/Reservaasesoria';
import { Cantidadturnos } from '../models/Cantidadturnos';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ReservaasesoriaService {
  private url = `${base_url}/reservaasesorias`;
  private listaCambios = new Subject<Reservaasesoria[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Reservaasesoria[]>(this.url);
  }
  insert(ra: Reservaasesoria) {
    return this.http.post(this.url, ra);
  }
  getList() {
    return this.listaCambios.asObservable();
  }

  setList(listaNueva: Reservaasesoria[]) {
    this.listaCambios.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Reservaasesoria>(`${this.url}/${id}`);
  }
  update(ras: Reservaasesoria) {
    return this.http.put(this.url, ras);
  } 
  getCantidad(): Observable<Cantidadturnos[]> {
    return this.http.get<Cantidadturnos[]>(
      `${this.url}/cantidades`
    );
  }
}
