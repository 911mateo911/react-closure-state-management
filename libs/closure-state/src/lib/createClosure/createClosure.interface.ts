export type createClosureProps<T> = {
    initialValue: T;
    key: string;
}

export type createClosureReturnType<T> = {
    getValue: () => T,
    setValue: (newValue: T) => void;
    key: string;
}
