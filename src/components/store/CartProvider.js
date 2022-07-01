import React, { useReducer } from "react"
import CartContext from "./cart-context";




const CartProvider = (props) => {

    const defaultValue = {
        items: [],
        totalAmount: 0,
    }

    const cartReducer = (state, action) => {

        if (action.type === 'ADD_ITEMS') {

            let updatedItems;

            const existsItemInCart = state.items.findIndex(item => item.id === action.item.id)

            const existsItem = state.items[existsItemInCart];

            if (existsItem) {
                let latestItem = {...existsItem, amount: existsItem.amount + action.item.amount}
                updatedItems = [...state.items]
                updatedItems[existsItemInCart] = latestItem;
            }
            else {
                updatedItems = state.items.concat(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: state.totalAmount + action.item.price * action.item.amount
            }
        }

        if (action.type === "REMOVE_ITEM") {

            let updatedItems;

            const existsItemInCart = state.items.findIndex(item => item.id === action.id)

            const existsItem = state.items[existsItemInCart];

            

            if(existsItem.amount===1){
                updatedItems = state.items.filter(item => item.id !== action.id)
            }
            else{
                let latestItem = {...existsItem, amount: existsItem.amount-1}
                updatedItems = [...state.items]
                updatedItems[existsItemInCart] = latestItem;
            }

            return {
                items: updatedItems,
                totalAmount: state.totalAmount - existsItem.price
            }

        }
        return defaultValue;
    }

    const [cartState, dispatchCartHandler] = useReducer(cartReducer, defaultValue);

    const addItemIntoCartHandler = (item) => {
        dispatchCartHandler({ type: "ADD_ITEMS", item: item })
    }
    const removeItemIntheCartHandler = (id) => {
        dispatchCartHandler({ type: "REMOVE_ITEM", id: id })
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemIntoCartHandler,
        removeItem: removeItemIntheCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;