import { createElement } from "../functions/create-element";

export function pageContainer() {
    return createElement('div', {
        classList: ['page-container', 'flex-column', 'align-center']
    });
}