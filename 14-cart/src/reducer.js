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
    case LOADING: {
      return {
        
      }
    }

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
    updatedCart.delete(payload.id)
  }
  
  if (updatedCart.has(payload.id)) {
    const item = updatedCart.get(payload.id);
    let updatedItem;
    if (item) {
      if (type === INCREASE) {
        updatedItem = { ...item, amount: item.amount + 1 };
      } else if (type === DECREASE) {
        // delete the item instead of reduce amount to 0 
        // but verifying with user before delete is a better UX
        if (item.amount === 1) {
          updatedCart.delete(payload.id)
        } else updatedItem = { ...item, amount: item.amount - 1 };
      }
       updatedCart?.set(payload.id, updatedItem);
      return { ...state, cart: updatedCart };
    }
  } else {
    return state;
  }
};

export default reducer;
