import { useState, useCallback, useEffect } from "react";
import { StoreInstance } from "../store";
import { createClosureReturnType } from "../createClosure";

export const useTransformedClosure = <T>(
    {
        getValue,
        key
    }: createClosureReturnType<T>,
    transformer: (value: T) => any
) => {
    const initialValue = transformer(getValue());

    const [transformedState, setTrasnformedState] = useState<typeof initialValue>(initialValue);

    const handleTransformedStateChange = useCallback(
        (value: unknown) => setTrasnformedState(transformer(value as T)),
        []);

    useEffect(() => {
        StoreInstance.subscribe(key, handleTransformedStateChange);

        return () => StoreInstance.unsubscribe(key, handleTransformedStateChange);
    }, [])

    return [transformedState as typeof initialValue];
}
