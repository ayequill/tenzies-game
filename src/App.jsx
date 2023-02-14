import "./styles/App.scss";
import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [dieState, setDieState] = useState(generateNewRandomDice());

  /* function to generate 6 random numbers. used '~~'
  which is a short form Math.floor */
  // function generateNewRandomDice(length) {
  //   return Array(length)
  //     .fill()
  //     .map((num) => {
  //       const randomNum = Math.ceil(Math.random() * 6);
  //       return newDie ()
  //     });
  // }

  function newDie() {
    return { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() };
  }
  function generateNewRandomDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(newDie());
    }
    return newDice;
  }

  function rollDice() {
    // setDieState((prev) => {

    //  return  prev.map((die)=>{
    //     // return {...die, value: die.isHeld ? die.value : generateNewRandomDice(10,6)}
    //     return die.isHeld ? {...die, value : die.value } : generateNewRandomDice ()
    //   })
    // });

    // setDieState(state => {
    //   return
    // })

    setDieState((state) => state.map((die) => (die.isHeld ? die : newDie())));

    // setDieState(
    //   prev => prev.map((die) => {
    //     return {...die,
    //     value: die.isHeld ? die.value : generateNewRandomDice()}
    //   })
    // );
  }

  function holdDice(id) {
    // console.log(id);
    setDieState((prev) =>
      prev.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <div className="App">
      <main className="main">
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die__elements">
          {dieState.map((num) => (
            <Die
              key={num.id}
              value={num.value}
              isHeld={num.isHeld}
              holdDice={() => holdDice(num.id)}
            />
          ))}
        </div>
        <button onClick={rollDice} className="roll__btn">
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
