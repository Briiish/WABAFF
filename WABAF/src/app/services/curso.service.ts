import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Curso } from '../models/Curso';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private url = `${base_url}/cursos`;
  private listaCambio = new Subject<Curso[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Curso[]>(this.url);
  }
  insert(c: Curso) {
    return this.http.post(this.url, c);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Curso[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Curso>(`${this.url}/${id}`);
  }
  update(cu: Curso) {
    return this.http.put(this.url, cu);
  }
}
