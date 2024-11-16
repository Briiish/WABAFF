import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Users } from '../models/users';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Users[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Users[]>(this.url);
  }
  insert(c: Users) {
    return this.http.post(this.url, c);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Users[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Users>(`${this.url}/${id}`);
  }
  update(user: Users) {
    return this.http.put(this.url, user);
  }

}

