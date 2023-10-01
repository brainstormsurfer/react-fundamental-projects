import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./ACTIONS";
import cartItems from "./data";
import { getTotals } from "./utils";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const displayItems = () => {
    dispatch({ type: DISPLAY_ITEMS });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        displayItems,
        totalAmount,
        totalCost
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
