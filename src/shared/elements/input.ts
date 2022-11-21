import { append } from "../functions/append";
import { createElement } from "../functions/create-element";
import { InputData } from "../interfaces/input-data";
import { createLabel } from "./label";

export function createInput(data: InputData) {
    const inputEl = createInputElement(data);

    const id = generateId();

    const labelEl = createLabel({
        for: id,
        label: data.label,
    });

    inputEl.name = id;
    inputEl.id = id;

    const containerEl = createElement('div', {
        classList: ['flex-column', ...(data.classList || [])]
    });

    append(containerEl, [labelEl, inputEl])

    return containerEl;
}

function createInputElement(data: InputData) {
    const radioEl = createElement('input', {
        classList: ['input'],
        events: data.events
    }) as HTMLInputElement;

    radioEl.type = data.type;

    if (data.placeholder) {
        radioEl.setAttribute('placeholder', data.placeholder);
    }

    return radioEl;
}

function generateId() {
    return String(Date.now());
}