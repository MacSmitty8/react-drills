import Objects from './Objects'
import { useState } from 'react';


function App() {


  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleDecrement}> - </button>
      <button onClick={() => {setCounter(0)}}>Reset</button>
    </div>
  );
}

export default App;
