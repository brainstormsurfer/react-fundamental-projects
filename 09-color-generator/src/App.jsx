import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from 'values.js'
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));  
  
  const addColor = (color) => {
    try {
        const newColors = new Values(color).all(10)
        setColors(newColors)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors}/>
      <ToastContainer style={{position: "top-center"}} />
    </main>
  );
};
export default App;
