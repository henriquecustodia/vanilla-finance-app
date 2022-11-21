import { append } from "../functions/append";
import { createElement } from "../functions/create-element";
import { ElementEvent } from "../interfaces/element-event";

interface RadioParam {
    name: string,
    label: string,
    groupName: string,
    value: any,
    checked?: boolean,
    events: ElementEvent
}

interface RadioLabelParam {
    label: string,
    for: string,
}

export function createRadio(data: RadioParam) {
    const radioEl = createRadioElement(data);

    const radioLabelEl = createRadioLabel({
        for: data.name,
        label: data.label,
    });

    const radioContainerEl = createElement('div', {
        classList: ['flex-row']
    });

    append(radioContainerEl, [radioEl, radioLabelEl])

    return radioContainerEl;
}

function createRadioElement(data: RadioParam) {
    const radioEl = createElement('input', {
        events: data.events
    }) as HTMLInputElement;
    
    radioEl.type = 'radio';
    radioEl.id = data.name;
    radioEl.name = data.groupName;
    radioEl.value = data.value;
    radioEl.checked = Boolean(data.checked);

    return radioEl;
}

function createRadioLabel(data: RadioLabelParam) {
    const radioElLabelEl = createElement('label') as HTMLLabelElement;
    radioElLabelEl.setAttribute('for', data.for);
    radioElLabelEl.textContent = data.label;
    return radioElLabelEl;
}