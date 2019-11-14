import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../../models/user.model';
import {AuthFormService} from '../../services/auth-form.service';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../../../components/dialog/dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less', '../login/login.component.less']
})

export class RegistrationComponent implements OnInit {
  private registerFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthFormService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      login: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit(): void {
    const answer = this.registerFormGroup.value;
    const user: UserModel = {email: answer.email, login: answer.login, password: answer.password, role: 'user'};
    this.authService.addUser(user)
      .then(response => {
        this.dialog.open(DialogComponent, {
          width: '250px',
          data: {message: 'Registration success, please log in'}
        });
        this.router.navigate(['auth/login']);
      })
      .catch(error => {
        this.dialog.open(DialogComponent, {
          width: '250px',
          data: {message: error.toString()}
        });
      });
  }

  getEmailError(elemName: string): string {
    return this.registerFormGroup.get(elemName).hasError('email') ? 'Not a valid email' : '';
  }
  getMinLengthError(elemName: string, minLength: number): string {
    return this.registerFormGroup.get(elemName).hasError('minlength') ? 'Minimum length is ' + minLength : '';
  }
  getRequiredError(elemName: string): string {
    return this.registerFormGroup.get(elemName).hasError('required') ? 'You must enter a value' : '';
  }
}
