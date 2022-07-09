import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  private BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public signin(user:string, password: string) {
    const options = {};
    const item = { user, password };
    return this.http.get<UserModel>(this.BASE_URL + 'login', options);
  }
}
