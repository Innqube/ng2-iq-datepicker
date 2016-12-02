import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

declare var require:any;
const inlineSampleTpl: string = require('./sample-date-picker-inline.html');

@Component({
    selector: 'sample-date-picker-inline',
    template: inlineSampleTpl
})

export class SampleDatePickerInline implements OnInit {

    private myDatePickerInlineOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        inline: true,
        disableUntil: {year: 0, month: 0, day: 0},
        disableDays: [{year: 0, month: 0, day: 0}]
    };
    private selectedDateInline: string = '';

    private selectedTextInline: string = '';
    private border: string = 'none';
    private locale:string = '';
    private form: FormGroup;

    private locales:Array<string> = new Array('en', 'fr', 'ja', 'fi', 'es', 'hu', 'sv', 'nl', 'ru', 'no', 'tr', 'pt-br', 'de');
    
    constructor(
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        console.log('onInit(): SampleDatePickerInline');
        this.form = this.formBuilder.group({
            test: '',
            fecha: ''
        });
    }

    onChangeLocale(locale:string) {
        this.locale = locale;
    }

    onDisablePast(checked:boolean) {
        let date = new Date();

        // Disable/enable dates from 5th backward
        date.setDate(date.getDate() - 5);

        let copy = this.getCopyOfOptions();
        copy.disableUntil = checked ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : {};
        this.myDatePickerInlineOptions = copy;
    }

    onDisableFuture(checked:boolean) {
        let date = new Date();

        // Disable/enable dates from 5th forward
        date.setDate(date.getDate() + 5);

        let copy = this.getCopyOfOptions();
        copy.disableSince = checked ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : {};
        this.myDatePickerInlineOptions = copy;
    }

    onDisableSingleDates(checked:boolean) {
        let date = new Date();

        // Disable/enable next month 1st and 3rd days
        let copy = this.getCopyOfOptions();
        copy.disableDays = checked ? [{year: date.getFullYear(), month: date.getMonth() + 2, day: 1}, {year: date.getFullYear(), month: date.getMonth() + 2, day: 3}] : [];
        this.myDatePickerInlineOptions = copy;
    }

    onDisableWeekends(checked:boolean) {
        // Disable/enable weekends
        let copy = this.getCopyOfOptions();
        copy.disableWeekends = checked;
        this.myDatePickerInlineOptions = copy;
    }

    onMarkCurrentDay(checked:boolean) {
        // Mark current day
        let copy = this.getCopyOfOptions();
        copy.markCurrentDay = checked;
        this.myDatePickerInlineOptions = copy;
    }

    onDateChanged(event:any) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if(event.formatted !== '') {
            this.selectedTextInline = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';
        }
        else {
            this.selectedTextInline = '';
            this.border = 'none';
        }
    }

    getCopyOfOptions() {
        return JSON.parse(JSON.stringify(this.myDatePickerInlineOptions));
    }

    save(value: any) {
        console.log(value);
    }

}
