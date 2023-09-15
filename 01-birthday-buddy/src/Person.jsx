import React from "react";

const Person = ({ name, age, image}) => {
  return (
    <>
      <article className="person">
        <img className="img" src={image} alt={name} />
        <h4>
          {name}
          <p>{age} years</p>{" "}
        </h4>
      </article>
    </>
  );
};

export default Person;
