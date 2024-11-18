import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/comentario';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url = `${base_url}/comentarios`;
  private listaCambio = new Subject<Comentario[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Comentario[]>(this.url);
  }
  insert(cm: Comentario) {
    return this.http.post(this.url, cm);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Comentario[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Comentario>(`${this.url}/${id}`);
  }
  update(comentario: Comentario) {
    return this.http.put(this.url, comentario);
  }

}
