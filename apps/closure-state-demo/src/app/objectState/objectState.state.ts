import { createClosure } from "closure-state";

export const objectState = createClosure({
    initialValue: {
        object1: 'hello',
        object2: 'hey'
    },
    name: 'objectState'
})
