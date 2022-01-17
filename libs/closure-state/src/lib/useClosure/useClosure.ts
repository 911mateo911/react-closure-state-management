import { useCallback, useState, useEffect } from 'react';
import { useClosureReturnType } from './useClosure.interface';
import { createClosureReturnType } from '../createClosure';

export const useClosure = <T>({ setValue, getValue, subscribe, unsubscribe }: createClosureReturnType<T>) => {
    const [value, setStateValue] = useState(getValue());

    useEffect(() => {
        subscribe(setStateValue)

        return () => unsubscribe(setStateValue);
    }, []);

    return [value, setValue] as useClosureReturnType<T>;
}
