import { promisify } from '../promisify';
import { SubscribersStore } from './store.interface';

export class Store {
    private static instance: Store;

    subscribers: SubscribersStore = {};

    static get getInstance() {
        if (!Store.instance) {
            Store.instance = new Store();
        }

        return Store.instance;
    }

    add(key: string, value: unknown) {
        this.subscribers[key] = { key, callbacks: [], value };
    }

    notify(key: string, value: unknown) {
        this.subscribers[key].value = value;
        // this.subscribers[key].callbacks.map(callback => callback(this.subscribers[key].value));

        Promise.all(this.subscribers[key].callbacks.map(callback => promisify(() => { callback(this.subscribers[key].value) })))
    }

    subscribe(key: string, callback: (value: unknown) => void) {
        this.subscribers[key].callbacks.push(callback);
    }

    unsubscribe(key: string, callback: (value: unknown) => void) {
        this.subscribers[key].callbacks = this.subscribers[key].callbacks.filter(subscribedCallback => callback !== subscribedCallback);
    }
}

export const StoreInstance = Store.getInstance;
