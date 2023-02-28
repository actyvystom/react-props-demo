import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }
  return (
    <div>
      <Pet sound="Meow" emoji="🐈" name="cat" onPet={handlePet} isHungry />
      <Pet sound="Wow" emoji="🐕" name="dog" onPet={handlePet} />
    </div>
  );
}

function Pet({ sound, emoji, name, onPet, isHungry }) {
  console.log(name);
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
      <input type="checkbox" checked={isHungry} />
    </div>
  );
}
