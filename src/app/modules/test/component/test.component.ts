import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from "../../../service/form.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomValidators} from "../../../service/form-validators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public signUpForm: FormGroup;
  public messages = {
    required: 'This field is required',
    password: 'This password too short',
    textarea: 'This textarea too short'}

  public formErrors = {
    name: '',
    email: '',
    password: '',
    textarea: '',
    select: '',
  };

  constructor(
    public form: FormBuilder,
    public FormService: FormService,
    public snackbar: MatSnackBar,
  ) {}

  public submit() {

    // mark all fields as touched
    this.FormService.markFormGroupTouched(this.signUpForm);

    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of wether it's touched
    if (this.signUpForm.valid) {

      this.snackbar.open('Succesfully submitted a valid form. yay!', 'Close', {
        duration: 3000,
      });

      this.signUpForm.reset();
    } else {
      this.formErrors = this.FormService.validateForm(this.signUpForm, this.formErrors, false)
    }
  }

  // build the user edit form
  public buildForm() {
    this.signUpForm = this.form.group({
      name: ['', [Validators.required, CustomValidators.validateCharacters]],
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [Validators.minLength(5)]),
      textarea: new FormControl('', [Validators.minLength(10)]),
      select: ['', [Validators.required]]
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.signUpForm.valueChanges.subscribe((data) => {
      this.formErrors = this.FormService.validateForm(this.signUpForm, this.formErrors, true)
    });
  }

  // initiate component
  public ngOnInit() {
    this.buildForm();
  }

  enable(): void {
    this.signUpForm.enable();
  }

  disable(): void {
    this.signUpForm.disable();
  }

  subscribe(): void {
    this.signUpForm.valueChanges.subscribe(console.log);
  }

  setValue(value: string): void {
    // this.form.patchValue(value);
  }

  resetForm(): void {
    this.signUpForm.reset();
  }
  resetValidationField(): void {
    this.signUpForm.markAsPristine();
    this.signUpForm.markAsUntouched();
    this.signUpForm.updateValueAndValidity();
  }
}
