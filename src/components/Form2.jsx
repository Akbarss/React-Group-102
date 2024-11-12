import React, { useState } from "react";

function ExampleComponent() {
  const [name, setName] = useState(""); // Строка
  const [age, setAge] = useState(0); // Число

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Введите возраст" />
      <p>
        Привет, {name}! Тебе {age} лет.
      </p>
    </div>
  );
}

export default ExampleComponent;
