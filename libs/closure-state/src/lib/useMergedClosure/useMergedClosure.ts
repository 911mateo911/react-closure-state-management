import { useState, useEffect, useCallback } from "react";
import { StoreInstance } from "..";
import { createClosureReturnType } from "../createClosure";

export const useMergedClosure = (...closures: createClosureReturnType<any>[]) => {
    const generateInitialValue = () => {
        const initialObj: { [key: string]: unknown } = {};

        closures.map(({ key, getValue }) => initialObj[key] = getValue());

        return initialObj;
    }

    const [mergedState, setMergedState] = useState(generateInitialValue());

    const handleMergedStateChange = useCallback((value: { [key: string]: unknown }) => setMergedState(value), []);

    useEffect(() => {
        StoreInstance.batchSubscribe(closures.map(closure => closure.key), handleMergedStateChange);

        return () => StoreInstance.batchUnsubscribe(closures.map(closure => closure.key), handleMergedStateChange);
    }, [])

    return [mergedState]
}
