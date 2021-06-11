import { useRef, useState } from "react";
import "./App.css";
import { sum } from "./helpers/calculator";

const App = () => {
  const number1 = useRef(0);
  const number2 = useRef(0);
  const [result, setResult] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    setResult(sum(number1.current.value, number2.current.value));
  };

  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="number1">Número 1</label>
          <input
            id="number1"
            type="number"
            name="number1"
            placeholder="Insira o primeiro número"
            required
            ref={number1}
          />
        </div>

        <div>
          <label htmlFor="number2">Número 2</label>
          <input
            id="number2"
            type="number"
            name="number2"
            placeholder="Insira o segundo número"
            required
            ref={number2}
          />
        </div>

        <div>
          <button onClick={submitHandler}>Somar</button>
        </div>
      </form>

      <h2>{result}</h2>
    </div>
  );
};

export default App;
