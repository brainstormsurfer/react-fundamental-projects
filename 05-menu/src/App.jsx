import menu from "./data";
import Title from "./components/Title";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(["Our Menus"])

  useEffect(() => {
    if (menu.length > 0) {
      setMenuItems(menu);

      const menuCategories = new Set();
      menuCategories.add("All");
      for (const item of menu) {
        menuCategories.add(item.category);
      }
      setCategories(menuCategories);
    }
  }, []);

  const onCategoryClick = (e) => {
    const filteredItems = menu.filter((item) => {
        if (e.target.textContent === "All") {
          setCurrentCategory("Our Menus")
          return item
        } else {                 
            setCurrentCategory(e.target.textContent)
           return item.category === e.target.textContent
        }        
    })
    setMenuItems(filteredItems)
  }


  return (
    <main>
      <Title category={currentCategory} />      
      <Menu menuItems={menuItems} categories={categories} onCategoryClick={onCategoryClick} />      
    </main>
  );
};
export default App;
