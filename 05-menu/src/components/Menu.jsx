import React from "react";
import MenuItem from "./MenuItem";
import Categories from "./Categories";

const Menu = ({ menuItems, categories, onCategoryClick}) => {
  const categoriesArray = Array.from(categories);
  return (
    <>
        <div className="btn-container">
          {categoriesArray.map((category) => (
            <Categories key={category} category={category} onCategoryClick={onCategoryClick} />
          ))}
        </div>
    <div className="menu">
      <div className="section-center">
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Menu;
