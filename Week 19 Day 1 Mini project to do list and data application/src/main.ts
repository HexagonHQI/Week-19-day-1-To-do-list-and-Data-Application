// src/main.ts

import { FullList } from './model/FullList';
import { ListTemplate } from './templates/ListTemplate';
import { ListItem } from './model/ListItem';

const fullList = new FullList();
const listTemplate = new ListTemplate('listItems');

document.addEventListener('DOMContentLoaded', () => {
    listTemplate.render(fullList.getItems());

    const form = document.getElementById('itemEntryForm') as HTMLFormElement;
    const input = document.getElementById('newItem') as HTMLInputElement;
    const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newItem = new ListItem(input.value);
        fullList.addItem(newItem);
        listTemplate.render(fullList.getItems());
        input.value = '';
    });

    clearButton.addEventListener('click', () => {
        fullList.clearAll();
        listTemplate.render(fullList.getItems());
    });

    document.getElementById('listItems')!.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).classList.contains('delete')) {
            const id = (e.target as HTMLElement).dataset.id!;
            fullList.removeItem(id);
            listTemplate.render(fullList.getItems());
        } else if ((e.target as HTMLElement).tagName === 'INPUT') {
            const id = (e.target as HTMLInputElement).dataset.id!;
            const item = fullList.getItems().find(item => item.id === id);
            if (item) {
                item.checked = !item.checked;
                fullList.save(); // Update localStorage
            }
        }
    });
});
