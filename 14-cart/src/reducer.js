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

    case DISPLAY_ITEMS: {
      const { cartData } = action.payload;
      const newCart = new Map(cartData.map((item) => [item.id, item]));
      return { ...state, cart: newCart, loading: false };
    }
    case LOADING: {
      return { ...state, loading: true };
    }

    default: {
      throw new Error(`no matching action type : ${type}`);
    }
  }
};

const handleCartUpdate = (state, { type, payload }) => {
  const updatedCart = new Map(state.cart);
  if (type === REMOVE_ITEM) {
    console.log("Remove", payload.id)
    updatedCart.delete(payload.id);
    // Handling INCREASE or DECREASE :
  } else if (updatedCart.has(payload.id)) {
    const item = updatedCart.get(payload.id);
    let updatedItem = { ...item };
    if (type === INCREASE) {
      updatedItem.amount += 1;
      updatedCart.set(payload.id, updatedItem);
    } else if (type === DECREASE) {
      // deleting the item instead of reducing its amount to 0
      // although confirm with the user before is a better UX
      if (updatedItem.amount === 1) {
        updatedCart.delete(payload.id);
      } else {
        updatedItem.amount -= 1;
        updatedCart.set(payload.id, updatedItem);
      }
    }
  }
  return { ...state, cart: updatedCart };

};

export default reducer;
