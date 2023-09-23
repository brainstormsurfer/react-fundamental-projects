import { useState } from "react";

const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newItemName)
        if (!newItemName) {
            console.log("enter a name")
            return
        }
        addItem(newItemName)
        setNewItemName('')
    }

    return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          placeholder="Add Item..."
          value={newItemName}          
          onChange={(event) => setNewItemName(event.target.value)}
        />
      <button className="btn" type="submit">
        add item
      </button>
</div>
    </form>

  );
};

export default Form;
