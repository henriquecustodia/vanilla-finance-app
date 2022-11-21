import { ElementOptions } from "./element-options";

export interface InputData extends ElementOptions {
    type: 'number' | 'text';
    label: string;
    placeholder?: string;
}
