import React from "react";

//conditional operator
const Ticketing = (props) => {
  return <>{props.age >= 18 ? "ticket issued" : "ticket not issued"}</>;
};

export default Ticketing;

export const Result = (props) => {
  let getPercentage = (props.marks / 600) * 100;
  return getPercentage >= 50 ? (
    <div>Well Done!</div>
  ) : (
    <div>Keep Training!</div>
  );
};

//if-else
export const Rating = (props) => {
  if (props.score < 50) {
    return "Poor";
  } else if (props.score >= 50 && props.score < 75) {
    return "Nice";
  }
  return "Excellent";
};

export const Tickets = (props) => {
  //   let session = "afternoon";
  return props.session ? (
    <div>purchase</div>
  ) : props.age <= 18 ? (
    <div>allowed</div>
  ) : (
    <div>not allowed</div>
  );
};
