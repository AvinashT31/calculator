import { useState } from "react";
import './App.css';

function App() {

  const [result, setResult] = useState("");

  function handclick (e){
   setResult(result.concat(e.target.name));
  }

  function clear(){
    setResult ("");
  }

  function backspace(){
     setResult(result.slice(0, -1));
  }

  function calculate(){
    setResult(eval(result).toString())
  }



  return (
    <div className="App">
      <div id='calculator'>
        <input type="text" placeholder="0" value={result} />
        <div>
          <button onClick={() => clear()}>Clear</button>
          <button onClick={() => backspace()}>C</button>
          <button name="M+">M+</button>
        </div>
        <div>
          <button name="7" onClick={handclick}>7</button>
          <button name="8" onClick={handclick}>8</button>
          <button name="9" onClick={handclick}>9</button>
          <button name="/" onClick={handclick}>/</button>
        </div>
        <div>
          <button name="4" onClick={handclick}>4</button>
          <button name="5" onClick={handclick}>5</button>
          <button name="6" onClick={handclick}>6</button>
          <button name="*" onClick={handclick}>*</button>
        </div>
        <div>
          <button name="1" onClick={handclick}>1</button>
          <button name="2" onClick={handclick}>2</button>
          <button name="3" onClick={handclick}>3</button>
          <button name="-" onClick={handclick}>-</button>
        </div>
        <div>
          <button name="0" onClick={handclick}>0</button>
          <button name="." onClick={handclick}>.</button>
          <button name="+"  onClick={handclick}>+</button>
          <button name="=" onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
