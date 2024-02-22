import React, { useState } from "react";
import "../App.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Talha");

  /*


    In React, we can not re-render our UI with typical (traditional) variables.

    For achiving this, we need to use useStateHook()

    const [variableName, setVariableName] = useState(initialValue)
  */

  const handleChange = () => {
    if (name === "Talha") setName("Javier");
    else {
      setName("Talha");
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Plus btn , value of count: ", count);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    console.log("Minus btn , value of count: ", count);
  };

  return (
    <div className="counter-container">
      <button onClick={handleDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <p>updated by: {name}</p>

      <button onClick={handleChange}>Change Name</button>
    </div>
  );
};

export default Counter;
