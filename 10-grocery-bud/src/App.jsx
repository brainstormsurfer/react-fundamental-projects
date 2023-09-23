import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem])
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      {items.map((item) => 
            <h3 key={item.id}>{item.name}</h3>        
        )}
    </section>
  );
};

export default App;
