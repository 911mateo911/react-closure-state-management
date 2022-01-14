import { FC } from 'react';
import { useClosure } from 'closure-state';
import { inputState } from './input.state';

export const Input: FC = () => {
    const [state, setState] = useClosure(inputState);
    return (<input
        type='text'
        onChange={({ target }) => setState(target.value)}
        value={state}
    />)
}
