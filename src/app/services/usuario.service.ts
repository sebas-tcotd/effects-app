import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuariosResponse } from '../interfaces/usuarios-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<UsuariosResponse>(`${this.url}/users?per_page=6`)
      .pipe(map(({ data }) => data));
  }
}
