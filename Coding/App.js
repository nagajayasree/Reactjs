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
    <Users
        users={[
          { id: 1, name: "Abc", age: 38 },
          { id: 2, name: "Hij", age: 42 },
          { id: 3, name: "Xyz", age: 25 },
        ]}
      />
      <PersonDetails
        persons={({ Id: 467, Name: "Sam" }, { name: "dddds", age: 23 })}
      />
      <Text />
      <DisplayMessage name="Nick" />
    </div>
  );
}

export default App;
