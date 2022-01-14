import { createClosure } from "closure-state";

export const inputState = createClosure({
    initialValue: '',
    key: 'input'
})
