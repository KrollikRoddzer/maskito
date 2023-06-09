!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[8929],{38929:function(e){e.exports="/**\n * This example demonstrates Angular way.\n * But this behaviour can be achieved via vanilla JavaScript too\n * (it just requires more code).\n */\n\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {MaskitoOptions} from '@maskito/core';\nimport {tuiPure} from '@taiga-ui/cdk';\n\nimport {getMaskitoOptions} from './mask';\n\n@Component({\n    selector: 'number-mask-doc-example-5',\n    template: `\n        <label tuiLabel=\"Enable decimal zero padding by typing dot\">\n            <tui-input\n                [tuiTextfieldLabelOutside]=\"true\"\n                [style.max-width.rem]=\"30\"\n                [(ngModel)]=\"value\"\n            >\n                <input\n                    tuiTextfield\n                    inputmode=\"decimal\"\n                    [maskito]=\"getMaskOptions(decimalZeroPadding)\"\n                    (beforeinput.capture)=\"handleBeforeInput($event)\"\n                />\n            </tui-input>\n        </label>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class NumberMaskDocExample5 {\n    value = '42';\n    decimalZeroPadding = this.value.includes('.');\n\n    @tuiPure // Decorator for memoization\n    getMaskOptions(decimalZeroPadding: boolean): MaskitoOptions {\n        return getMaskitoOptions(decimalZeroPadding);\n    }\n\n    handleBeforeInput(event: Event): void {\n        const {inputType, target, data} = event as InputEvent;\n\n        if (inputType.includes('delete')) {\n            const element = target as HTMLInputElement;\n            const [from, to] = this.getNotEmptySelection(\n                [element.selectionStart || 0, element.selectionEnd || 0],\n                inputType.includes('Forward'),\n            );\n            const dotWasRemoved = this.value.slice(from, to).includes('.');\n\n            this.decimalZeroPadding = this.decimalZeroPadding && !dotWasRemoved;\n        } else {\n            this.decimalZeroPadding = ['.', ',', '\u0431', '\u044e'].some(\n                sep => data?.includes(sep) || this.value.includes(sep),\n            );\n        }\n    }\n\n    private getNotEmptySelection(\n        [from, to]: [number, number],\n        isForward: boolean,\n    ): [number, number] {\n        if (from !== to) {\n            return [from, to];\n        }\n\n        return isForward ? [from, to + 1] : [Math.max(from - 1, 0), to];\n    }\n}\n"}}])}();