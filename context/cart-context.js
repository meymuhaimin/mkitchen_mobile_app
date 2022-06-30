import { createContext, useState } from "react";

export const CartContext = createContext({
    ids: [],
    addToCart: (id) => { },
    removeFromCart: (id) => { },
})

function CartContextProvider({ children }) {
    const [cartMenuId, setCartFoodId] = useState([]);

    function addToCart(id) {
        setCartFoodId((currentInCartId) => [...currentInCartId, id]);
    }

    function removeFromCart(id) {
        setCartFoodId((currentInCartId) =>
            currentInCartId.filter((foodId) => foodId !== id))
    }

    const value = {
        ids: cartMenuId,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;