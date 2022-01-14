import { StoreInstance } from "../store";
import { createClosureProps, createClosureReturnType } from './createClosure.interface';

export const createClosure = <T>({ initialValue, key }: createClosureProps<T>): createClosureReturnType<T> => {
    let value = initialValue;
    StoreInstance.add(key, value as T);

    const getValue = () => value;
    const setValue = (newValue: T) => {
        value = newValue;
        StoreInstance.notify(key, value);
    }

    return {
        getValue,
        setValue,
        key
    }
}
