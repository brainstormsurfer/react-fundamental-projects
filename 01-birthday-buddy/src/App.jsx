import { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";
const App = () => {  
const [people, setPeople] = useState(data);

const removePerson = (id) => {
  const filteredPeople = people.filter((person) => id !== person.id)
  setPeople(filteredPeople)
}

const clearPeople = () => {
    setPeople([])   
  }
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}  removePerson={removePerson}/>
      <button className="btn btn-block" onClick={() => clearPeople()}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
