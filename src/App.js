import React, { useState } from "react";
import Todo from "./components/ToDo";

// Как работает useState?
// useState возвращает массив из двух элементов:

// Текущее значение состояния.
// Функция для обновления этого значения.

// const [state, setState] = useState(initialValue);
// state — переменная состояния, которая содержит текущее значение.
// setState — функция, которая обновляет значение переменной state.
// initialValue — начальное значение состояния (может быть любым типом данных)

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Todo />
    </div>
  );
}

export default App;
