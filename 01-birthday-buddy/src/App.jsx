import { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";
const App = () => {  
const [people, setPeople] = useState(data);

  
const removePerson = (id) => {
  setPeople(people.filter((person) => id !== person.id))
}

const clearPeople = () => {
    setPeople([])   
  }

const displayPeople = () => {
    setPeople(data)   
  }


  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}  removePerson={removePerson}/>
      <button className="btn btn-block" onClick={() => clearPeople()}>Clear All</button>
      <button className="btn btn-block" onClick={() => displayPeople()}>Display All</button>
      </section>
    </main>
  );
};
export default App;
