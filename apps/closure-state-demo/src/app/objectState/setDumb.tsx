import { useClosure } from 'closure-state';
import { FC } from 'react';
import { objectState } from '.';

export const SetDumb: FC = () => {
    const [state, setState] = useClosure(objectState);

    return (
        <div>
            <input
                value={state.object2}
                onChange={({ target }) => setState({ ...state, object2: target.value })}
            />
        </div>
    )
}
