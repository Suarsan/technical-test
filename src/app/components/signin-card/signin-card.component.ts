import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-services/user.service';
import { passwordValidator } from 'src/app/validators/password.validator';
import { tap } from 'rxjs/operators';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  public signIn(e: any) {
    e.stopPropagation();
    if (this.signInForm.valid) {
      console.dir(this.signInForm.get('user')!.value);
      console.dir(this.signInForm.get('password')!.value);
      this.userService.signin(this.signInForm.get('user')!.value, this.signInForm.get('password')!.value).pipe(
        tap((o: UserModel) => console.dir(o))
      ).subscribe();
    } else {
      this.signInForm.markAsTouched();
    }
  }
}
