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

// The function updateLocalStorageOnCheckboxChange triggered by 
// The checkbox change event in(/from) SingleItem 
// ----- (Inside:)
// It's getting the (existing) Local Storage, 
// Assigning the relevant item (parameter) with its new checkbox state,
// And signaling 'useEffect' to do the rest
// By saving the new items state to Local Storage while re-rendering
const updateLocalStorageOnCheckboxChange = (itemToUpdate) => {
  const storedItems = JSON.parse(localStorage.getItem("items"))
  const updatedItems = storedItems.map((item) => {
    if (item.id === itemToUpdate.id) {      
      return { ...item, completed: !item.completed }
    } else return item
  })
    setItems(updatedItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} save={updateLocalStorageOnCheckboxChange}/>
    </section>
  );
};

export default App;
