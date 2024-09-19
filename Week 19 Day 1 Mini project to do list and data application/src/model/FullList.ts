// src/model/FullList.ts

import { ListItem } from './ListItem';

export class FullList {
    private items: ListItem[] = [];

    constructor() {
        this.load();
    }

    load() {
        const savedItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
        this.items = savedItems.map((item: any) => {
            const listItem = new ListItem(item.item);
            listItem.checked = item.checked;
            return listItem;
        });
    }

    save() {
        localStorage.setItem('todoItems', JSON.stringify(this.items));
    }

    addItem(item: ListItem) {
        this.items.push(item);
        this.save();
    }

    removeItem(id: string) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    }

    clearAll() {
        this.items = [];
        this.save();
    }

    getItems() {
        return this.items;
    }
}
