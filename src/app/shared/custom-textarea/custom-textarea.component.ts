import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomTextareaComponent),
    multi: true,
  }],
})
export class CustomTextareaComponent implements ControlValueAccessor{
  value = '';
  disabled = false;
  private onChange = (value: any) => {};
  public onTouched = () => {};

  registerOnChange(fn: any) {
    // сохранить функцию, через которую сообщать Angular
    // об изменении значения внутри компонента
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string) {
    // получить из Forms API
    this.value = outsideValue;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  updateValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    console.log(value)
    this.onChange(value); // уведомить Forms API
    this.onTouched();
  }
}
