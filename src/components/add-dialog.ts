import { createButton } from "../shared/elements/buttons";
import { createInput } from "../shared/elements/input";
import { createRadio } from "../shared/elements/radio";
import { append } from "../shared/functions/append";
import { createElement } from "../shared/functions/create-element";
import { Item } from "../shared/interfaces/item";

enum RegisterType {
    Expense,
    Income
}

interface DialogEvents {
    onSave: (item: Item) => void,
    onCancel: () => void
}

export function createAddDialog(events: DialogEvents) {
    let registerType: RegisterType = RegisterType.Expense;
    let value: number = 0;
    let description: string = '';

    const backdropEl = createElement('div', {
        classList: ['backdrop']
    });

    const dialogEl = createElement('div', {
        classList: ['dialog', 'flex-column']
    });

    const formEl = createElement('form', {
        classList: ['flex-column']
    });

    const h1El = createElement('h1');
    h1El.textContent = 'Movimentação';

    const expenseRadioEl = createRadio({
        groupName: 'register-type',
        label: 'Gasto',
        name: 'expense',
        value: RegisterType.Expense,
        checked: true,
        events: {
            input: (event) => {
                registerType = event.target.value;
            }
        }
    });

    const incomeRadioEl = createRadio({
        groupName: 'register-type',
        label: 'Receita',
        name: 'income',
        value: RegisterType.Income,
        events: {
            input: (event) => {
                registerType = event.target.value;
            }
        }
    });

    const valueEl = createInput({
        type: 'number',
        label: 'Valor',
        placeholder: 'Digite o valor da movimentação',
        events: {
            input: (event) => {
                value = Number(event.target.value);
            }
        },
        classList: [
            'mt-3'
        ]
    });

    const descriptionEl = createInput({
        type: 'text',
        label: 'Descrição',
        placeholder: 'Digite a descrição da movimentação',
        events: {
            input: (event) => {
                description = event.target.value;
            }
        },
        classList: [
            'mt-3'
        ]
    });

    const buttonContainerEl = createElement('div', {
        classList: [
            'flex-row',
            'justify-end',
            'mt-3'
        ]
    });

    const cancelButtonEl = createButton('secondary', 'Cancelar', {
        events: {
            click: () => events.onCancel()
        }
    });

    const saveButtonEl = createButton('primary', 'Salvar', {
        classList: ['ml-2'],
        events: {
            click: () => {
                if (registerType === RegisterType.Expense) {
                    value = value * -1;
                }

                events.onSave({
                    value,
                    text: description
                });
            }
        }
    });

    append(dialogEl, h1El);

    append(dialogEl, formEl);

    append(formEl, [
        expenseRadioEl,
        incomeRadioEl
    ]);

    append(formEl, valueEl);

    append(formEl, descriptionEl);

    append(buttonContainerEl, [
        cancelButtonEl,
        saveButtonEl
    ]);
    append(formEl, buttonContainerEl);

    return [backdropEl, dialogEl];
}