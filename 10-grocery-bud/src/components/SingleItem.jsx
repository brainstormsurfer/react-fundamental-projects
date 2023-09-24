import { useEffect, useState } from "react";

const SingleItem = ({ item, removeItem, save }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  // Using 'save' function (drilled from App) to keep the checkbox state in sync
  const onChangeClick = () => {
    setIsChecked(prev => !prev)
    save(item)
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
