import {MaskitoOptions} from './mask-options';
import {MaskitoElement} from './maskito-element';

export type MaskitoPlugin = (
    element: HTMLInputElement | HTMLTextAreaElement | MaskitoElement,
    options: Required<MaskitoOptions>,
) => (() => void) | void;
