import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  public signin(user:string, password: string) {
    const options = {};
    const item = { user, password };
    return this.http.get<UserModel>(this.BASE_URL + 'login', options);
  }
}
