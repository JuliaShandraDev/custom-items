import {Component, forwardRef} from '@angular/core';
import { ICustomSelectParameters } from "./custom-select.interface";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true,
  }],
})
export class CustomSelectComponent {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
  // public value = '';
  // public disabled = false;
  // private onChange = (value: any) => {};
  // public onTouched = () => {};
  //
  // registerOnChange(fn: any) {
  //   // сохранить функцию, через которую сообщать Angular
  //   // об изменении значения внутри компонента
  //   this.onChange = fn;
  // }
  //
  // registerOnTouched(fn: () => {}): void {
  //   this.onTouched = fn;
  // }
  //
  // writeValue(outsideValue: string) {
  //   console.log('outsideValue', outsideValue)
  //   // получить из Forms API
  //   this.value = outsideValue;
  // }
  //
  // setDisabledState(isDisabled: boolean) {
  //   this.disabled = isDisabled;
  // }
  //
  // updateValue(event: Event) {
  //   const value = (event.target as HTMLInputElement).value;
  //   this.value = value;
  //   console.log(value)
  //   this.onChange(value); // уведомить Forms API
  //   this.onTouched();
  // }
  // animalControl = new FormControl('', Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  // animals: ICustomSelectParameters[] = [
  //   {name: 'Dog', sound: 'Woof!'},
  //   {name: 'Cat', sound: 'Meow!'},
  //   {name: 'Cow', sound: 'Moo!'},
  //   {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  // ];

}
