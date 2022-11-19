export function append(host: HTMLElement | null, elements: HTMLElement | HTMLElement[]) {
    if(!host) {
        return;
    }

    if (!Array.isArray(elements)) {
        host.appendChild(elements);
    } else {
        elements.forEach((el) => {
            host.appendChild(el);
        });
    }
}