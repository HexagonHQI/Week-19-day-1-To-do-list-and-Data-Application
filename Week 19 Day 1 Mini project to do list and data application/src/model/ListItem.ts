// src/model/ListItem.ts

export interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

export class ListItem {
    private _id: string;
    private _item: string;
    private _checked: boolean;

    constructor(item: string) {
        this._id = crypto.randomUUID();
        this._item = item;
        this._checked = false;
    }

    get id() {
        return this._id;
    }

    get item() {
        return this._item;
    }

    get checked() {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
}
