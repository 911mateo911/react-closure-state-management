import { useCallback, useState, useEffect } from 'react';
import { useClosureReturnType } from './useClosure.interface';
import { createClosureReturnType } from '../createClosure';
import { StoreInstance } from '../store';

export const useClosure = <T>({ setValue, getValue, key }: createClosureReturnType<T>) => {
    const [value, setStateValue] = useState(getValue());

    const handleStateChange = useCallback((value: unknown) => setStateValue(value as T), [])

    useEffect(() => {
        StoreInstance.subscribe(key, handleStateChange);

        return () => StoreInstance.unsubscribe(key, handleStateChange);
    }, [key, handleStateChange])

    return [value, setValue] as useClosureReturnType<T>;
}
