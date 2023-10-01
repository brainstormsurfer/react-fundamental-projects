import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./ACTIONS";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_CART: {
      return { ...state, cart: new Map() };
    }

    case REMOVE_ITEM: {
      const newCart = new Map(state.cart);
      if (newCart.delete(payload.id)) return { ...state, cart: newCart };
      else return state;
    }

    case INCREASE: {
      const updatedCart = new Map(state.cart);
      if (updatedCart.has(payload.id)) {
        const item = updatedCart.get(payload.id);
        if (item) {
          const updatedItem = { ...item, amount: item.amount + 1 };
          updatedCart.set(payload.id, updatedItem);
          return { ...state, cart: updatedCart };
        }
      } else {
        return state;
      }
    }

    case DECREASE: {
      const updatedCart = new Map(state.cart);
      if (updatedCart.has(payload.id)) {
        const item = updatedCart.get(payload.id);
        if (item) {
          const updatedItem = {
            ...item,
            amount: item.amount - 1,
          };
          updatedCart.set(payload.id, updatedItem);
          return { ...state, cart: updatedCart };
        }
      } else return state;
    }

    default: {
      throw new Error(`no matching action type : ${type}`);
    }
  }
};

export default reducer;
