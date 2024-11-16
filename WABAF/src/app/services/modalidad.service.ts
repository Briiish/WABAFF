import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Modalidad } from '../models/Modalidad';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {
  private url = `${base_url}/modalidades`;
  private listaCambio = new Subject<Modalidad[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Modalidad[]>(this.url);
  }
  insert(m: Modalidad) {
    return this.http.post(this.url, m);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Modalidad[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Modalidad>(`${this.url}/${id}`);
  }
  update(mo: Modalidad) {
    return this.http.put(this.url, mo);
  }
}
