import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['']
    });
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
}
