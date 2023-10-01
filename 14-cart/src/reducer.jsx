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
// console.log('state.cart', (state.cart))
// console.log('Array.from(state.cart)', Array.from(state.cart.entries()))
  const {payload} = action
  switch (action.type) {
    case CLEAR_CART: {
      return { ...state, cart: new Map() };
    }
    case REMOVE_ITEM: { 
        const updateCart = Array.from(state.cart.entries())
        console.log('updateCart',updateCart)
        console.log('updateCart[0][1]',updateCart[0][1])
        // ? why item[0] is not return id ?
        const items = updateCart.map((item) => item[1])
        console.log('items',items)
        const filteredCart = items.filter((item) => item.id !== payload.id)
        console.log('filteredCart',filteredCart)
        const cartMap = new Map(filteredCart.map((item) => [item.id, item]))
        console.log('cartMap', cartMap)
        return {...state, cart: cartMap}
    }
    default: {
      throw new Error(`no matching action type : ${action.type}`);
    }
  }
};

export default reducer;
