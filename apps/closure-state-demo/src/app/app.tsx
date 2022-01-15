import { useClosure } from "closure-state";
import { Input, inputState } from "./input";
import { ObjectState } from './objectState';
import { Dumb } from "./objectState/dumb";
import { Paragraph } from "./objectState/paragraph";
import { SetDumb } from "./objectState/setDumb";

export function App() {
  const [state] = useClosure(inputState);

  return (
    <div>
      <Input />
      <ObjectState />
      <Paragraph />
      <Dumb />
      <SetDumb />
      <p>{state}</p>
    </div>
  );
}

export default App;
