export type createClosureProps<T> = {
    initialValue: T;
    name: string;
}

export type createClosureReturnType<T> = {
    getValue: () => T,
    setValue: (newValue: T) => void;
    subscribe: (cb: closureCallback<T>) => void;
    unsubscribe: (cb: closureCallback<T>) => void;
    name: string;
}

export type closureCallback<T> = (value: T, name: string) => void;

export type closureCallbacksStore<T> = closureCallback<T>[]
