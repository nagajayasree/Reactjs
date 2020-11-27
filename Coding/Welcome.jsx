import React from "react";

//function
export const Welcome = () => {
  return <div>Welcome to React!</div>;
};

//function to welcome user given in props
export const WelcomeUser = (props) => {
  return <div>Welcome {props.user}</div>;
};

//function to return lastName if provided in props,if not returns firstName
export const WelcomeMessage = (props) => {
  if (props.lastName) {
    return <div>Welcome Mr.{props.lastName}</div>;
  } else {
    return <div>Welcome Mr.{props.firstName}</div>;
  }
};
