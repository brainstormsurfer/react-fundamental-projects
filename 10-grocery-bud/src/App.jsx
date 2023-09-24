import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";


function setLocalStorage(id) {
  console.log("in Ls")
  const storedItems = JSON.parse(localStorage.getItem("items"))
  if (storedItems) {
   const updatedItems = storedItems.map((item) => {
      if (item.id === id) {      
        return { ...item, completed: !item.completed }
      } else return item
    })
    localStorage.setItem("items", JSON.stringify(updatedItems))
  }   
}

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    localStorage.setItem("items", JSON.stringify([...items, newItem]))
    setItems([...items, newItem])
  };

  const removeItem = (id) => {      
    const filteredItems = items.filter((item) => item.id !== id)
    if (filteredItems) {
      localStorage.setItem("items", JSON.stringify(filteredItems))
      setItems(filteredItems)
    }    
}

const editItem = (id) => {
  setLocalStorage(id)
}

  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  );
};

export default App;
