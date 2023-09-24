import { useState } from "react"

const SingleItem = ({ item, removeItem, editItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  const onChangeClick = () => {
    setIsChecked(prev => !prev)
    editItem(item.id)
  }

  return (
    <div className="single-item">
      <input        
        type="checkbox"
        checked={isChecked}
        onChange={onChangeClick}
      />
      <p autoFocus={true}
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
