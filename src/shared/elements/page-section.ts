import { createElement } from "../functions/create-element";

export function createPageSection(classList: string[] = []) {
    return createElement('section', {
        classList: ['page-section', ...classList]
    });
}