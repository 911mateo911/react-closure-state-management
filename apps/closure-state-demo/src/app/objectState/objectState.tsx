import { useClosure } from 'closure-state';
import { FC } from 'react';
import { objectState } from './objectState.state';

export const ObjectState: FC = () => {
    const [objects, setObjects] = useClosure(objectState);

    return (
        <div>
            <input
                type='text'
                value={objects.object1}
                onChange={({ target }) => setObjects({ ...objects, object1: target.value })} />
        </div>
    )
}
