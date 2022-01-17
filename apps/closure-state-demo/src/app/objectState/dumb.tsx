import { memo } from 'react';
import { useTransformedClosure } from 'closure-state';
import { objectState } from '.';

export const Dumb = memo(() => {
    const [state] = useTransformedClosure(objectState, (obj) => obj.object2);

    console.log(state)

    return (
        <div>
            {state}
        </div>
    )
})
