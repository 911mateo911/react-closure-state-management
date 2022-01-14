import { useClosure } from "closure-state";
import { Input, inputState } from "./input";

export function App() {
  const [state] = useClosure(inputState);
  return (
    <div>
      <Input />
      <p>{state}</p>
    </div>
  );
}

export default App;
