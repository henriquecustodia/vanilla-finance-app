import { createButtonSection } from './components/button-section';
import { header } from './components/header';

import './../styles/main.scss';
import { pageContainer } from './shared/elements/page-container';
import { createBalanceSection } from './components/balance-section';
import { createList } from './components/list/list';
import { append } from './shared/functions/append';
import { createAddDialog } from './components/add-dialog';
import { Item } from './shared/interfaces/item';

interface Data {
  openDialog?: boolean,
  items?: Item[]
}

const appEl = document.querySelector<HTMLDivElement>('#app');

let items: Item[] = [];

const onOpenDialog = () => {
  bootstrap({ openDialog: true, items });
};

const onSave = (item: Item) => {
  items = [item, ...items];
  bootstrap({ openDialog: false, items });
};

const onCancel = () => {
  bootstrap({ openDialog: false, items });
};

function bootstrap(data: Data) {
  destroy();

  const pageContainerEl = pageContainer();

  append(pageContainerEl, header());
  append(pageContainerEl, createButtonSection({ click: onOpenDialog }));
  append(pageContainerEl, createBalanceSection(items));

  append(pageContainerEl, createList(data.items as Item[]));

  if (data.openDialog) {
    append(appEl, createAddDialog({ onSave, onCancel }));
  }

  append(appEl, pageContainerEl);
}

function destroy() {
  while (appEl?.firstChild) {
    appEl?.removeChild(appEl.firstChild);
  }
}

bootstrap({ items });


