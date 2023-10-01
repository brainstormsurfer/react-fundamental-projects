import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./ACTIONS";
import cartItems from "./data";
// console.log('cartItems' , cartItems)

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_CART: {
      return { ...state, cart: new Map() };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cart: new Map(
          Array.from(state.cart.entries()).filter(
            ([_, item]) => item.id !== payload.id
          )
        ),
      };
    }
    case INCREASE: {
      return {
        ...state,
        cart: new Map(
          Array.from(state.cart.entries()).map(([id, item]) => {
            if (item.id === payload.id) {
              return [id, { ...item, amount: payload.amount + 1 }];
            } else return [id, item];
          })
        ),
      };
    }
    case DECREASE: {
      return {
        ...state,
        cart: new Map(
          Array.from(state.cart.entries()).map(([id, item]) => {
            if (item.id === payload.id) {
              return [id, { ...item, amount: payload.amount - 1 }];
            } else return [id, item];
          })
        ),
      };
    }
    default: {
      throw new Error(`no matching action type : ${type}`);
    }
  }
};

export default reducer;
