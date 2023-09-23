import { useState, useEffect } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);

    if(items) {
      console.log(items)
    }
    
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem])
  };

  const removeItem = (id) => {      
    const filteredItems = items.filter((item) => item.id !== id)
    if (filteredItems)
    setItems(filteredItems)
}

const save = (itemToUpdate) => {
  const storedItems = JSON.parse(localStorage.getItem("items"))
  const updatedItems = storedItems.map((item) => {
    if (item.id === itemToUpdate.id) {
      console.log("stored items updated within checkbox state")
      return { ...item, completed: !item.completed }
    } else return item
  })
    setItems(updatedItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} save={save}/>
    </section>
  );
};

export default App;
