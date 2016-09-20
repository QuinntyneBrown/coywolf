import { Injectable } from "@angular/core";
import { LOCALSTORAGE_ID } from "../constants";

@Injectable()
export class LocalStorageService {
    constructor() {
        window.onbeforeunload = () => localStorage.setItem(LOCALSTORAGE_ID, JSON.stringify(LocalStorageService.items))
    }


    private static _items = null;

    private static get items() {
        if (this._items === null) {
            var storageItems = localStorage.getItem(LOCALSTORAGE_ID);
            if (storageItems === "null") {
                storageItems = null;
            }
            this._items = JSON.parse(storageItems || "[]");
        }

        return this._items;
    }

    private static set items(value: Array<any>) {
        this._items = value;
    }

    public static get = (options: { name:string }) => {
        var storageItem = null;
        for (var i = 0; i < LocalStorageService.items.length; i++) {
            if (options.name === LocalStorageService.items[i].name)
                storageItem = LocalStorageService.items[i].value;
        }
        return storageItem;
    }

    public static put = (options: any) => {
        var itemExists = false;

        LocalStorageService.items.forEach((item: any) => {
            if (options.name === item.name) {
                itemExists = true;
                item.value = options.value
            }
        });

        if (!itemExists) {
            var items = LocalStorageService.items;
            items.push({ name: options.name, value: options.value });
            LocalStorageService.items = items;
            items = null;
        }
    }

    public static clear = () => {
        LocalStorageService._items = [];
    }


}
