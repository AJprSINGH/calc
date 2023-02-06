import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = button => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="calculator-container">
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => handleClick("CE")}>CE</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>X</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
