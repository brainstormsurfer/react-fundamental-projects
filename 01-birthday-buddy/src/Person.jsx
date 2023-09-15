import React from "react";

const Person = ({ name, age, image, removePerson, id }) => {
  return (
    <>
      <article className="person">
        <img className="img" src={image} alt={name} />
        <h4>
          {name}
          <p>{age} years</p>{" "}
        </h4>
        <button className="btn btn-hipster" onClick={() => removePerson(id)}>
          remove
        </button>
      </article>
    </>
  );
};

export default Person;
