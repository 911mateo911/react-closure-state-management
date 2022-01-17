import { useState, useEffect, useCallback } from "react";
import { createClosureReturnType } from "../createClosure";

export const useTransformedClosure = <K, T>(
    {
        getValue,
        subscribe,
        unsubscribe
    }: createClosureReturnType<T>,
    transformer: (value: T) => K
) => {
    const [transformedState, setTrasnformedState] = useState<K>(transformer(getValue()));

    const handleTransformedStateChange = useCallback((value: T) => setTrasnformedState(transformer(value)), []);

    useEffect(() => {
        subscribe(handleTransformedStateChange);

        return () => unsubscribe(handleTransformedStateChange);
    }, [])

    return [transformedState];
}
