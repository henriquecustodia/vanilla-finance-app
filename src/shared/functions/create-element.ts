import { ElementOptions } from "../interfaces/element-options";

export function createElement(tagName: string, options?: ElementOptions) {
    const el = document.createElement(tagName);

    if (options?.classList) {
        el.classList.add(...options.classList);
    }

    if (options?.events) {
        for (const eventName in options.events) {
            const callbackFn = options.events[eventName];
            el.addEventListener(eventName, callbackFn);
        }
    }

    return el;
}