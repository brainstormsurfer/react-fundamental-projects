import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./ACTIONS";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART: {
      return { ...state, cart: new Map() };
    }

    case REMOVE_ITEM:
    case INCREASE:
    case DECREASE: {
      return handleCartUpdate(state, action);
    }

    default: {
      throw new Error(`no matching action type : ${action.type}`);
    }
  }
};

const handleCartUpdate = (state, { type, payload }) => {
  const updatedCart = new Map(state.cart);

  if (type === REMOVE_ITEM) {
    if (updatedCart.delete(payload.id)) return { ...state, cart: updatedCart };
    else return state;
  }

  if (updatedCart.has(payload.id)) {
    const item = updatedCart.get(payload.id);
    let updatedItem;
    if (item) {
      if (type === INCREASE) {
        updatedItem = { ...item, amount: item.amount + 1 };
      } else if (type === DECREASE) {
        updatedItem = { ...item, amount: item.amount - 1 };
      }
      if (updatedItem) updatedCart.set(payload.id, updatedItem);
      return { ...state, cart: updatedCart };
    }
  } else {
    return state;
  }
};

export default reducer;
