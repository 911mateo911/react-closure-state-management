import { useClosure } from 'closure-state';
import { FC } from 'react';
import { objectState } from '.';

export const Paragraph = () => {
    const [obj] = useClosure(objectState);

    return (
        <div>
            {obj.object1}
        </div>
    )
}
