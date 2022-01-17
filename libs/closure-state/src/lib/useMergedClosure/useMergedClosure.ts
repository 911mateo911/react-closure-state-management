import { useState, useEffect, useCallback } from "react";
import { createClosureReturnType } from "../createClosure";

export const useMergedClosure = (...closures: createClosureReturnType<any>[]) => {
    const generateInitialValue = () => {

        const initialObj: { [key: string]: unknown } = {};

        closures.map(({ getValue, name }) => initialObj[name] = getValue());

        // TODO: handle name duplication
        // TODO: handle typing

        return initialObj;
    }

    const [mergedState, setMergedState] = useState(generateInitialValue());

    const handleSetMergedState = useCallback(<T>(value: T, name: string) => setMergedState(prevState => ({ ...prevState, [name]: value })), []);

    useEffect(() => {
        closures.map(({ subscribe }) => subscribe(handleSetMergedState));

        return () => { closures.map(({ unsubscribe }) => unsubscribe(handleSetMergedState)) };
    }, [])

    return [mergedState]
}
