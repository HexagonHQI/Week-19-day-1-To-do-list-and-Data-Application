// src/templates/ListTemplate.ts

import { ListItem } from '../model/ListItem';

export class ListTemplate {
    private listElement: HTMLElement;

    constructor(listElementId: string) {
        this.listElement = document.getElementById(listElementId)!;
    }

    render(items: ListItem[]) {
        this.listElement.innerHTML = ''; // Clear the list
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" ${item.checked ? 'checked' : ''} data-id="${item.id}">
                <label>${item.item}</label>
                <button class="delete" data-id="${item.id}">X</button>
            `;
            this.listElement.appendChild(li);
        });
    }
}
