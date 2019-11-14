import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../../models/user.model';
import {DialogComponent} from '../../../../components/dialog/dialog.component';
import {AuthFormService} from '../../services/auth-form.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {DialogType} from '../../../../models/dialog-data.model';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  private loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthFormService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required)
    });
    // для перенаправления пользователя если он залогинен
    // if (localStorage.getItem('user_info') != null) {
    //   switch (JSON.parse(localStorage.getItem('login')).role) {
    //     case 'user':
    //       this.router.navigate(['wizard']);
    //       break;
    //     case 'admin':
    //       this.router.navigate(['admin']);
    //       break;
    //   }
    // }
  }
  public onSubmit(): void {
    const answer = this.loginFormGroup.value;
    const user: UserModel = {email: answer.email, login: '', password: answer.password, role: ''};
    this.authService.loginUser(user)
      .then(response => {
        localStorage.setItem('user_info', JSON.stringify(response));
        switch (response.role) {
          case 'user':
            this.router.navigate(['wizard']);
            break;
          case 'admin':
            this.router.navigate(['admin']);
            break;
        }
      })
      .catch(error => {
        this.dialog.open(DialogComponent, {
          data: {message: error.toString(), type: DialogType.error}
        });
      });
  }

  getEmailError(elemName: string): string {
      return this.loginFormGroup.get(elemName).hasError('email') ? 'Not a valid email' : '';
  }
  getRequiredError(elemName: string): string {
    return this.loginFormGroup.get(elemName).hasError('required') ? 'You must enter a value' : '';
  }
}
