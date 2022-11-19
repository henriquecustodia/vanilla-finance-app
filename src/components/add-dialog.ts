import { createButton } from "../shared/elements/buttons";
import { append } from "../shared/functions/append";
import { createElement } from "../shared/functions/create-element";
import { Item } from "../shared/interfaces/item";

interface DialogEvents {
    onSave: (item: Item) => void,
    onCancel: () => void
}

export function createAddDialog(events: DialogEvents) {
    let registerType: string;
    let value: number = 0;
    let description: string = '';

    const backdropEl = createElement('div');
    backdropEl.classList.add('backdrop');

    const dialogEl = createElement('div', {
        classList: ['flex-column']
    });
    dialogEl.classList.add('dialog');

    const h1El = createElement('h1');
    h1El.textContent = 'Movimentação';

    const expenseRadioEl = createElement('input') as HTMLInputElement;
    expenseRadioEl.type = 'radio';
    expenseRadioEl.id = 'expense';
    expenseRadioEl.name = 'register-type';
    expenseRadioEl.value = 'expense';
    expenseRadioEl.textContent = 'Gasto';

    expenseRadioEl.addEventListener('input', () => {
        registerType = expenseRadioEl.value;
    });

    const expenseRadioElLabelEl = createElement('label') as any;
    expenseRadioElLabelEl.for = 'expense';
    expenseRadioElLabelEl.name = 'register-type';
    expenseRadioElLabelEl.textContent = 'Gasto';

    const incomeRadioEl = createElement('input') as HTMLInputElement;
    incomeRadioEl.type = 'radio';
    incomeRadioEl.id = 'income';
    incomeRadioEl.name = 'register-type';
    incomeRadioEl.value = 'income';
    incomeRadioEl.textContent = 'Receita';

    incomeRadioEl.addEventListener('input', () => {
        registerType = incomeRadioEl.value;
    });

    const incomeRadioLabelEl = createElement('label') as any;
    incomeRadioLabelEl.for = 'income';
    incomeRadioLabelEl.name = 'register-type';
    incomeRadioLabelEl.textContent = 'Receita';

    const valueEl = createElement('input') as HTMLInputElement;
    valueEl.type = 'number';
    valueEl.value = String(value);
    valueEl.placeholder = 'value';
    valueEl.classList.add('mt-3');

    valueEl.addEventListener('input', () => {
        value = Number(valueEl.value);
    });

    const descriptionEl = createElement('input') as HTMLInputElement;
    descriptionEl.type = 'text';
    descriptionEl.value = String(description);
    descriptionEl.placeholder = 'Descrição';
    descriptionEl.classList.add('mt-3');

    descriptionEl.addEventListener('input', () => {
        description = descriptionEl.value;
    });

    const buttonContainerEl = createElement('div', {
        classList: [
            'flex-row',
            'mt-3'
        ]
    });

    const cancelButtonEl = createButton('secondary', 'Cancelar');
    const saveButtonEl = createButton('primary', 'Salvar', { classList: ['ml-2'] });

    saveButtonEl.addEventListener('click', () => {

        if (registerType === 'expense') {
            value = value * -1;
        }

        events.onSave({
            value,
            text: description
        });
    });

    append(buttonContainerEl, [
        cancelButtonEl,
        saveButtonEl
    ]);

    append(dialogEl, h1El);
    append(dialogEl, [
        expenseRadioEl,
        expenseRadioElLabelEl, 
        incomeRadioEl,
        incomeRadioLabelEl
    ]);
    append(dialogEl, valueEl);
    append(dialogEl, descriptionEl);
    append(dialogEl, buttonContainerEl);

    return [backdropEl, dialogEl];
}