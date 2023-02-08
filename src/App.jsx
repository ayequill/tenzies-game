import "./styles/App.scss";
import Die from "./components/Die";
import { useState } from "react";

function App() {
  const [dieState, setDieState] = useState(generateNewRandomDice(10,6))
  
  /* function to generate 6 random numbers. used '~~'
  which is a short form Math.floor */
  const generateNewRandomDice = (length, max) => {
    return Array(length)
      .fill()
      .map(() => Math.ceil(Math.random() * max));
  };


  return (
    <div className="App">
      <main className="main">
        <div className="die__elements">
          {dieState.map((num, i) => (
            <Die key={i} value={num} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
