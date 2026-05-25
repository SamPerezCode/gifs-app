import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1); // Cuando no tengamos un valor inicial de el estado, osea en este caso si no nos dan el counter, usamos este callback de prevState
  };

  const handleReset = () => {
    setCounter(5);
  };

  return {
    // Values
    counter,

    // Methods / Actions
    handleAdd,
    handleReset,
    handleSubtract,
  };
};

// NO se puede hacer un hooks condicional
