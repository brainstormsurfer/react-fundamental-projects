import React from "react";
const Categories = ({ category, onCategoryClick }) => {
  return (
    <>    
      <button className="btn" onClick={onCategoryClick}>{category}</button>
    </>
  );
};

export default Categories;
