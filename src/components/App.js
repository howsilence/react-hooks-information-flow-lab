import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
function App() {
  
  //state for light mode in the app
  const [isDarkMode, setIsDarkMode] = useState(false);

  // change the function to "on" dark mode click because this is the action we want our passed down function to take
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
     <Header // passed down function
     onDarkModeClick={onDarkModeClick}
     isDarkMode={isDarkMode}
        />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
