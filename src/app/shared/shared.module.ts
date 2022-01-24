import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputComponent } from "./custom-input/custom-input.component";
import { CustomSelectComponent } from "./custom-select/custom-select.component";
import { CustomTexareaComponent } from "./custom-texarea/custom-texarea.component";


@NgModule({
  declarations: [
    CustomTexareaComponent,
    CustomSelectComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomTexareaComponent,
    CustomSelectComponent,
    CustomInputComponent
  ]
})
export class SharedModule { }
