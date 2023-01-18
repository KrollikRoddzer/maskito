"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[92],{2092:e=>{e.exports="```ts\nimport {Maskito} from '@maskito/core';\n\nconst numberInput = new Maskito(element, {\n  mask: /^\\d+(,\\d*)?$/, // digits and dot (as decimal separator)\n  preprocessor: ({elementState, data}, actionType) => {\n    const {value, selection} = elementState;\n\n    return {\n      elementState: {\n        selection,\n        value: value.replace(',', '.'),\n      },\n      data: data.replace(',', '.'),\n    };\n  },\n});\n```\n"}}]);