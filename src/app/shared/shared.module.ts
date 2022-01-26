import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { CustomSelectComponent } from "./custom-select/custom-select.component";
import { CustomTextareaComponent } from "./custom-textarea/custom-textarea.component";
import {MatExpansionModule} from '@angular/material/expansion';
import { MaterialExampleModule } from  'src/matirial.module'


@NgModule({
  declarations: [
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatExpansionModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule
  ],
  exports: [
    CustomTextareaComponent,
    CustomSelectComponent,
    CustomInputComponent
  ]
})
export class SharedModule { }
