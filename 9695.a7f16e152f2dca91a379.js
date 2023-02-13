"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[9695],{9695:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\nimport mask from './mask';\n\n@Component({\n    selector: 'phone-doc-example-2',\n    templateUrl: './template.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PhoneRUDocExample2 {\n    readonly maskitoOptions = mask;\n\n    readonly control = new FormControl('');\n\n    onFocus(): void {\n        if (!this.control.value) {\n            this.control.patchValue('+7 ');\n        }\n    }\n\n    onBlur(): void {\n        if (this.control.value === '+7 ') {\n            this.control.patchValue('');\n        }\n    }\n}\n"}}]);