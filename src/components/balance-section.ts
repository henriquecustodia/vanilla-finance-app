import { createPageSection } from "../shared/elements/page-section";
import { createElement } from "../shared/functions/create-element";
import { formatValue } from "../shared/functions/resolve-value";
import { resoveValueClass } from "../shared/functions/resolve-value-class";
import { Item } from "../shared/interfaces/item";

export function createBalanceSection(items: Item[]) {
    const sectionEl = createPageSection(['flex-row']);

    sectionEl.appendChild(
        createExpenseItem(
            sumAllExpenses(items)
        )
    );

    sectionEl.appendChild(
        createBalanceItem(
            calcBalance(items)
        )
    );

    sectionEl.appendChild(
        createIncomeItem(
            sumAllIncomes(items)
        )
    );

    return sectionEl;
}

function sumAllExpenses(items: Item[]) {
    return items
        .filter(({ value }) => value < 0)
        .map(({ value }) => value)
        .reduce((acc, value) => acc + value, 0)
}

function sumAllIncomes(items: Item[]) {
    return items
        .filter(({ value }) => value > 0)
        .map(({ value }) => value)
        .reduce((acc, value) => acc + value, 0)
}

function calcBalance(items: Item[]) {
    return sumAllIncomes(items) - (sumAllExpenses(items) * -1) ;
}

function createExpenseItem(value: number) {
    const containerEl = createElement('div', {
        classList: [
            'flex-column',
            'flex-grow'
        ]
    });

    appendContent({
        containerEl,
        labelText: 'Gastos',
        value,
    });

    return containerEl;
}

function createBalanceItem(value: number) {
    const containerEl = createElement('div', {
        classList: [
            'flex-column',
            'align-center',
            'flex-grow'
        ]
    });

    appendContent({
        containerEl,
        labelText: 'Saldo',
        value,
    });

    return containerEl;
}

function createIncomeItem(value: number) {
    const containerEl = createElement('div', {
        classList: [
            'flex-column',
            'align-end',
            'flex-grow'
        ]
    });

    appendContent({
        containerEl,
        labelText: 'Receita',
        value
    });

    return containerEl;
}

interface ContentParam {
    containerEl: HTMLElement;
    labelText: string;
    value: number;
}

function appendContent(data: ContentParam) {
    const titleEl = createElement('span');
    titleEl.textContent = data.labelText;

    const valueClass = resoveValueClass(data.value);
    const valueText = formatValue(data.value);

    const valueEl = createElement('strong', {
        classList: [valueClass]
    });
    valueEl.textContent = valueText;

    data.containerEl.appendChild(titleEl);
    data.containerEl.appendChild(valueEl);
}