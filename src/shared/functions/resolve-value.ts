import { toCurrency } from "./to-currency";

export function formatValue(value: number) {
    return value >= 0 ? `+${toCurrency(value)}` : `${toCurrency(value)}`;
}