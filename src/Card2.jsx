// src\components\Card.jsx
import { useState } from "react";
import "./Card2.css";

export default function Card() {
  const [isOn, setisOn] = useState(false);
  function toggleSwitch() {
    setisOn(!isOn);
  }
  return (
    <div>
      <h1>The switch is : {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggleSwitch}>Toggle Switch</button>
    </div>
  );
}

// ------------------------------------ //
