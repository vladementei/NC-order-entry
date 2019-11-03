import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  private loginFormGroup: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    const formBuilder: FormBuilder = new FormBuilder();
    this.loginFormGroup = formBuilder.group({
      email: formBuilder.control('', [Validators.required, Validators.email]),
      password: formBuilder.control('', Validators.required)
    });
  }
  public onSubmit(): void {
    console.log(this.loginFormGroup.value);
  }

  getEmailError(elemName: string): string {
      return this.loginFormGroup.get(elemName).hasError('email') ? 'Not a valid email' : '';
  }
  getRequiredError(elemName: string): string {
    return this.loginFormGroup.get(elemName).hasError('required') ? 'You must enter a value' : '';
  }
}
