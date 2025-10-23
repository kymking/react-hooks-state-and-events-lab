import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add a handler function to toggle the value
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  // Use the state variable to change className
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>

        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;