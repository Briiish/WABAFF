import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Profesor } from '../models/Profesor';
import { ProfesorQ1DTO } from '../models/ProfesorQ1DTO';
import { Q2cpxprofDTO } from '../models/Q2cpxprofDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private url = `${base_url}/profesores`;
  private listaCambio = new Subject<Profesor[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Profesor[]>(this.url);
  }
  insert(p: Profesor) {
    return this.http.post(this.url, p);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Profesor[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Profesor>(`${this.url}/${id}`);
  }
  update(profesor: Profesor) {
    return this.http.put(this.url, profesor);
  }
  gethrxp():Observable<ProfesorQ1DTO[]>{
    return this.http.get<ProfesorQ1DTO[]>(`${this.url}/hrxp`)
  }
  getcpxp():Observable<Q2cpxprofDTO[]>{
    return this.http.get<Q2cpxprofDTO[]>(`${this.url}/cpxp`)
  }
}
