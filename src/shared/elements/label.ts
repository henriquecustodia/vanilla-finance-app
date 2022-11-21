import { createElement } from "../functions/create-element";
import { LabelData } from "../interfaces/label-data";

export function createLabel(data: LabelData) {
    const labelEl = createElement('label') as HTMLLabelElement;
    labelEl.setAttribute('for', data.for);
    labelEl.textContent = data.label;
    return labelEl;
}