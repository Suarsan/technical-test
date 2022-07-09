import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-services/user.service';
import { passwordValidator } from 'src/app/validators/password.validator';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserStorageService } from 'src/app/modules/browser-storage/browser-storage.service';

@Component({
  selector: 'app-signin-card',
  templateUrl: './signin-card.component.html',
  styleUrls: ['./signin-card.component.scss']
})
export class SigninCardComponent implements OnInit {

  signInForm = new FormGroup({
    user: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, passwordValidator])
  });
  loading: boolean;
  error!: string;

  constructor(private userService: UserService,
              private browserStorageService: BrowserStorageService,
              private router: Router) { 
    this.loading = false;
    this.browserStorageService.deleteAll();
  }

  ngOnInit(): void { }

  public signIn(e: any) {
    e.stopPropagation();
    if (this.signInForm.valid) {
      this.loading = true;
      this.userService.signin(this.signInForm.get('user')!.value, this.signInForm.get('password')!.value).pipe(
        tap((o: UserModel) => this.loading = false),
        tap((o: UserModel) => this.router.navigate([''])),
        catchError((o: HttpErrorResponse) => { this.loading = false; this.error = o.message; return EMPTY; })
      ).subscribe();
    } else {
      this.signInForm.markAsTouched();
    }
  }
}
