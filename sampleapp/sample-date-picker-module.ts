import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerApp } from './sample-date-picker-app';
import { SampleDatePickerNormal } from './sample-date-picker-normal';
import { SampleDatePickerInline } from './sample-date-picker-inline';
import { DatePickerModule } from '../src/my-date-picker/my-date-picker.module';

@NgModule({
    imports: [BrowserModule, DatePickerModule, FormsModule, ReactiveFormsModule],
    declarations: [MyDatePickerApp, SampleDatePickerNormal, SampleDatePickerInline],
    bootstrap: [MyDatePickerApp]
})
export class SampleDatePickerModule { }