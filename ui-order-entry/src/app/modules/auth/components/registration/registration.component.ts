import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less', '../login/login.component.less']
})

export class RegistrationComponent implements OnInit {
  private registerFormGroup: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    const formBuilder: FormBuilder = new FormBuilder();
    this.registerFormGroup = formBuilder.group({
      email: formBuilder.control('', [Validators.required, Validators.email]),
      login: formBuilder.control('', Validators.required),
      password: formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit(): void {
    console.log(this.registerFormGroup.value);
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
