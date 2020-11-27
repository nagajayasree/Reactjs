import React from "react";
import "./App.css";
import Message from "./Coding/Message";
import { Welcome, WelcomeMessage, WelcomeUser } from "./Coding/Welcome";
import Ticketing, { Rating, Result, Tickets } from "./Coding/Ticketing";

function App() {
  return (
    <div className="App">
      <Message />
      <Welcome />
      <WelcomeUser user="js" />
      <WelcomeMessage lastName="LastName" firstName="FirstName" />
      <Ticketing age="20" />
      <Result marks="550" />
      <Rating score="25" />
      <Tickets age="15" session="afternoon" />
    </div>
  );
}

export default App;
