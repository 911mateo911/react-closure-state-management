import { useClosure } from "closure-state";
import { useState } from "react";
import { Input, inputState } from "./input";
import { MergedState } from "./mergedState";
import { ObjectState } from './objectState';
import { Dumb } from "./objectState/dumb";
import { Paragraph } from "./objectState/paragraph";
import { SetDumb } from "./objectState/setDumb";

export function App() {
  const [state] = useClosure(inputState);
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <MergedState />}
      <Input />
      <ObjectState />
      <Paragraph />
      <Dumb />
      <SetDumb />
      <p>{state}</p>
      <button onClick={() => setShow(p => !p)} >Show</button>
    </div>
  );
}

export default App;
