import {MaskitoOptions} from '@maskito/core';

import {maskitoCaretGuard, maskitoEventHandler} from '../plugins';

export function maskitoWithPlaceholder(
    placeholder: string,
    focusedOnly = false,
): Pick<Required<MaskitoOptions>, 'plugins' | 'postprocessor' | 'preprocessor'> & {
    removePlaceholder: (value: string) => string;
} {
    const removePlaceholder = (value: string): string => {
        for (let i = value.length - 1; i >= 0; i--) {
            if (value[i] !== placeholder[i]) {
                return value.slice(0, i + 1);
            }
        }

        return '';
    };
    const plugins = [maskitoCaretGuard(value => [0, removePlaceholder(value).length])];

    let focused = false;

    if (focusedOnly) {
        const focus = maskitoEventHandler('focus', element => {
            focused = true;
            element.value += placeholder.slice(element.value.length);
            element.dispatchEvent(new Event('input'));
        });

        const blur = maskitoEventHandler('blur', element => {
            focused = false;
            element.value = removePlaceholder(element.value);
            element.dispatchEvent(new Event('input'));
        });

        plugins.push(focus, blur);
    }

    return {
        plugins,
        removePlaceholder,
        preprocessor: ({elementState, data}) => {
            const {value, selection} = elementState;

            return {
                elementState: {
                    selection,
                    value: removePlaceholder(value),
                },
                data,
            };
        },
        postprocessor: ({value, selection}, initialElementState) =>
            initialElementState.value && (focused || !focusedOnly)
                ? {
                      value: value + placeholder.slice(value.length),
                      selection,
                  }
                : {value, selection},
    };
}