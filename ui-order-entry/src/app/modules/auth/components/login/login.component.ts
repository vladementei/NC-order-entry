import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../../models/user.model';
import {DialogComponent} from '../../../../components/dialog/dialog.component';
import {AuthFormService} from '../../services/auth-form.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  private loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthFormService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required)
    });
  }
  public onSubmit(): void {
    const answer = this.loginFormGroup.value;
    const user: UserModel = {email: answer.email, login: '', password: answer.password, role: ''};
    this.authService.loginUser(user)
      .then(response => console.log(response))
      .catch(error => {
        this.dialog.open(DialogComponent, {
          width: '250px',
          data: {message: error.toString()}
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
