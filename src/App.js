import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    alert("Thanks for caressing me!");
  }
  return (
    <div>
      <Pet name="Cat" emoji="🐈" sound="Meow" onPet={handlePet} isHungry />
      <Pet name="Dog" emoji="🐕" sound="Wuff" onPet={handlePet} />
      <Pet name="Mouse" emoji="🐁" sound="ieek" onPet={handlePet} isHungry />
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
