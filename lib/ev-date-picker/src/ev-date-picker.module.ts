import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvDatePickerComponent } from './ev-date-picker.component';
import { EvDatePickerDirective } from './ev-date-picker.directive';
import 'flatpickr';

@NgModule({
    imports: [CommonModule],
    declarations: [
        EvDatePickerComponent,
        EvDatePickerDirective
    ],
    exports: [
        EvDatePickerComponent,
        EvDatePickerDirective
    ]
})
export class EvDatePickerModule { }