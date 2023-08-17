"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[9935],{59935:function(n){n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {\n    AbstractControl,\n    FormControl,\n    ValidationErrors,\n    ValidatorFn,\n} from '@angular/forms';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {CountryCode, isValidPhoneNumber} from 'libphonenumber-js/max';\n\nimport mask from './mask';\n\nfunction phoneValidator(countryCode: CountryCode): ValidatorFn {\n    return (control: AbstractControl): ValidationErrors | null => {\n        const valid = isValidPhoneNumber(control.value, countryCode);\n\n        return valid ? null : new TuiValidationError('Invalid number');\n    };\n}\n\n@Component({\n    selector: 'phone-doc-example-2',\n    template: `\n        <tui-input\n            tuiTextfieldCustomContent=\"tuiIconPhoneLarge\"\n            [style.max-width.rem]=\"30\"\n            [formControl]=\"control\"\n        >\n            Basic\n            <input\n                tuiTextfield\n                autocomplete=\"tel\"\n                inputmode=\"tel\"\n                [maskito]=\"mask\"\n            />\n        </tui-input>\n        <tui-error\n            [formControl]=\"control\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PhoneMaskDocExample2 {\n    readonly control = new FormControl('+36 20 123-3122', phoneValidator('HU'));\n    readonly mask = mask;\n}\n"}}]);