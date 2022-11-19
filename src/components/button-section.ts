import { createButton } from "../shared/elements/buttons";
import { ElementEvent } from "../shared/interfaces/element-event";
import { createPageSection } from "./../shared/elements/page-section";

export function createButtonSection(events: ElementEvent) {
    const pageSectionEl = createPageSection(['flex-row', 'justify-end']);

    const btnEl = createButton('primary', 'Adicionar', { events });
    
    pageSectionEl.appendChild(btnEl);

    return pageSectionEl;
}