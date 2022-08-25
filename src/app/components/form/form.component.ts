import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup = new FormGroup({
    nameControl: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Zа-яА-ЯёЁ]*'),
    ]),
    addressControl: new FormControl('', [Validators.required]),
    phoneControl: new FormControl('', [Validators.required]),
  });

  name: string = '';
  address: string = '';
  phone: string = '';
  isSubmit: boolean = false;

  submit() {
    if (
      this.form.controls['nameControl'].invalid &&
      this.form.controls['nameControl'].touched
    ) {
      console.log(
        this.form.controls['nameControl'].invalid,
        this.form.controls['nameControl'].touched
      );
      return;
    }
    this.isSubmit = true;
    this.name = this.form.value.nameControl;
    this.address = this.form.value.addressControl;
    this.phone = this.form.value.phoneControl;
    this.form.controls['nameControl'].setValue('');
    this.form.controls['addressControl'].setValue('');
    this.form.controls['phoneControl'].setValue('');
  }
}
