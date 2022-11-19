import { createElement } from "../functions/create-element";
import { ElementOptions } from "../interfaces/element-options";

type ButtonType = 'primary' | 'secondary';

export function createButton(type: ButtonType, label: string, options?: ElementOptions) {
    options = options || {};
    options.classList = options.classList || [];

    options.classList.push(`${type}-btn`);

    const el = createElement('button', options);
    el.textContent = label;

    return el;
}