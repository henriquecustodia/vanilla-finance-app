import { Item } from "../../shared/interfaces/item";
import { createListItem } from "./list-item";

export function createList(items: Item[]) {
    return items.map(item => createListItem(item));
}