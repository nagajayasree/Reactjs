import React from "react";

export const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <p key={user.id}>
          Name:{user.name},Age:{user.age}
        </p>
      ))}
    </div>
  );
};

export const PersonDetails = (props) => {
  return (
    <div>
      {Object.keys(props.persons).map((key) => (
        <div key={key}>
          {key}:{props.persons[key]}
        </div>
      ))}
    </div>
  );
};
