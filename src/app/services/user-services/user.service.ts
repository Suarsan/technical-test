import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { UserDaoService } from 'src/app/daos/user-daos/user-dao.service';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userDaoService: UserDaoService) { }

  public signin(user: string, password: string): Observable<UserModel | any> {
    return this.userDaoService.signin(user, password).pipe(
      tap((o: UserModel) => !isDevMode() || console.dir(o)),
      delay(3000),
      map((o: UserModel) => o),
      catchError(error => { console.dir(error); return error; })
    );
  }
}
