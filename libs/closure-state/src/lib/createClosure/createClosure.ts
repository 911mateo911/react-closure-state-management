import { promisify } from "../promisify";
import { createClosureProps, createClosureReturnType, closureCallbacksStore, closureCallback } from './createClosure.interface';

export const createClosure = <T>({ initialValue, name }: createClosureProps<T>): createClosureReturnType<T> => {
    let value = initialValue;
    let callbacks: closureCallbacksStore<T> = [];

    const getValue = () => value;

    const setValue = (newValue: T) => {
        value = newValue;

        Promise.all(callbacks.map(callback => promisify(() => { callback(value, name) })));
    }

    const subscribe = (callback: closureCallback<T>) => { callbacks.push(callback); };

    const unsubscribe = (callback: closureCallback<T>) => { callbacks = callbacks.filter(cb => cb !== callback); };

    return {
        getValue,
        setValue,
        subscribe,
        unsubscribe,
        name
    }
}
