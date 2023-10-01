import { createContext, useContext, useEffect, useReducer } from "react";
import  reducer from './reducer';
import {
    CLEAR_CART,
    REMOVE_ITEM,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
  } from "./ACTIONS";
import cartItems from "./data";


const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: {id}})
  }

  const increase = (id, amount) => {
    dispatch({ type: INCREASE, payload: {id, amount} })      
  }

  const decrease = (id, amount) => {
    dispatch({ type: DECREASE, payload: {id, amount} })      
  }

  return (
    <AppContext.Provider
     value={{ ...state, clearCart, removeItem, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
