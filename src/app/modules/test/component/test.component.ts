import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from "../../../service/form.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
  }

  ngOnInit(): void {
    // this.testInfo$ = this.formService.testInfo$;
    this.form = this.fb.group({
      text: [''],
      email: [''],
      textarea: [''],
      select: ['']
    });
    this.initForm();
  }
  initForm(): void{
    this.form = this.fb.group({
      text: [null, [Validators.required, Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      textarea: [null, [Validators.required, Validators.maxLength(10)]],
    })
}
  enable(): void {
    this.form.enable();
  }

  disable(): void {
    this.form.disable();
  }

  subscribe(): void {
    this.form.valueChanges.subscribe(console.log);
  }

  setValue(value: string): void {
    // this.form.patchValue(value);
  }

  resetForm(): void {
    this.form.reset();
  }
  resetValidationField(): void {
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
  }
  submit():void {
    this.formService.testInfo$.next(this.form.value)
  }
}
