import { FC } from 'react';
import { useMergedClosure } from 'closure-state';
import { inputState } from '../input';
import { objectState } from '../objectState';

export const MergedState: FC = () => {
    const [state] = useMergedClosure(inputState, objectState);

    console.log(state)

    return (
        <div>

        </div>
    )
}
