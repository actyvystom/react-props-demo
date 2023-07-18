import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }
  return (
    <div>
      <Pet sound="Meow " name="cat" emoji="🐈" onPet={handlePet} />
      <Pet sound="Woof " name="dog" emoji="🐕" onPet={handlePet} isHungry />
      <Pet sound="Squeak " name="mouse" emoji="🐁" onPet={handlePet} />
    </div>
  );
}

function Pet({ sound, emoji, name, onPet, isHungry }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}
