import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.less']
})
export class DeliveryComponent implements OnInit {
  deliveryForm: FormGroup;
  @Output() deliveryEmitter = new EventEmitter<FormGroup>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      login: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
    this.deliveryEmitter.emit(this.deliveryForm);
  }

  getEmailError(elemName: string): string {
    return this.deliveryForm.get(elemName).hasError('email') ? 'Not a valid email' : '';
  }
  getMinLengthError(elemName: string, minLength: number): string {
    return this.deliveryForm.get(elemName).hasError('minlength') ? 'Minimum length is ' + minLength : '';
  }
  getRequiredError(elemName: string): string {
    return this.deliveryForm.get(elemName).hasError('required') ? 'You must enter a value' : '';
  }

  saveDeliveryInfo() {

  }
}
