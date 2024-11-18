import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Users } from '../models/users';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Q3hrxaDTO } from '../models/Q3hrxaDTO';
import { Q4axrtDTO } from '../models/Q4axrtDTO';

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
  gethrxa():Observable<Q3hrxaDTO[]>{
    return this.http.get<Q3hrxaDTO[]>(`${this.url}/hrxa`)
  }
  getaxrt(startDate: Date, endDate: Date): Observable<Q4axrtDTO> {
    let params = new HttpParams()
      .set('startDate', startDate.toISOString().split('T')[0])
      .set('endDate', endDate.toISOString().split('T')[0]);
      
    return this.http.get<Q4axrtDTO>(`${this.url}/axrt`, { params });
  }

}

