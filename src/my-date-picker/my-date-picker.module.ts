import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DatePicker } from "./my-date-picker.component";
import { InputFocusDirective } from "./directives/my-date-picker.input.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [DatePicker, InputFocusDirective],
    exports: [DatePicker, InputFocusDirective]
})
export class DatePickerModule {
}
