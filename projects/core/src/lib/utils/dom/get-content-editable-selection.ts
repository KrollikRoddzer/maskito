import {SelectionRange} from '../../types';

// TODO: add multi-line support later
export function getContentEditableSelection(element: HTMLElement): SelectionRange {
    const {anchorOffset = 0, focusOffset = 0} =
        element.ownerDocument.getSelection() || {};

    const from = Math.min(anchorOffset, focusOffset);
    const to = Math.max(anchorOffset, focusOffset);

    return [from, to];
}
