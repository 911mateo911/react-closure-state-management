import React from 'react';
import { useTransformedClosure } from 'closure-state';
import { objectState } from '.';

export const Dumb = () => {
    const [state] = useTransformedClosure(objectState, (obj) => obj.object2);

    return (
        <div>
            {state}
        </div>
    )
}
