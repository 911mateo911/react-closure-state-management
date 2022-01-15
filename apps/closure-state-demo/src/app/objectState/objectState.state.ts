import { createClosure } from "closure-state";

export const objectState = createClosure({
    initialValue: {
        object1: 'hellomf',
        object2: 'hey'
    },
    key: 'objectState'
})
