import { createPageSection } from "../../shared/elements/page-section";
import { createElement } from "../../shared/functions/create-element";
import { formatValue } from "../../shared/functions/resolve-value";
import { resoveValueClass } from "../../shared/functions/resolve-value-class";

export function createListItem(data: { value: number, text: string }) {
    const sectionEl = createPageSection(['flex-row']);

    sectionEl.appendChild(createValueEl(data.value));
    sectionEl.appendChild(createTextEl(data.text));

    return sectionEl;
}

function createValueEl(value: number) {
    const el = createElement('strong');
    
    el.classList.add(resoveValueClass(value))
    el.textContent = formatValue(value);

    return el;
}

function createTextEl(text: string) {
    const el = createElement('span', {
        classList: ['ml-auto']
    });
    el.textContent = text;
    
    return el;
}