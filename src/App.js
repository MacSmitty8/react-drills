import Objects from './Objects'
import { useState } from 'react';
import Arrays from './Arrays';
import Form from './Form';

function App() {


  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  const addByFive = () => {
    setCounter(counter + 5)
  }

  const subtractByFive = () => {
    setCounter(counter - 5)
  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleDecrement}> - </button>
      <button onClick={() => {setCounter(0)}}>Reset</button>
      <button onClick={addByFive}>+ 5</button>
      <button onClick={subtractByFive}>- 5</button>
      <h1>Form</h1>
      <Form />
    </div>
  );
}

export default App;
