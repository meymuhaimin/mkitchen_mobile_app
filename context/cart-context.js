import { createContext, useState } from "react";

export const CartContext = createContext({
    orders: [],
    addToCart: (id) => { },
    removeFromCart: (id) => { },
})

function CartContextProvider({ children }) {
    const [cartMenuOrders, setCartFoodOrders] = useState([]);

    function addToCart(id, quantity) {
        setCartFoodOrders((currentInCartId) => {
            const newCart = [...currentInCartId];
            const existingOrder = newCart.find(order => order.id === id);

            if (existingOrder) {
                existingOrder.quantity += quantity;
            } else {
                newCart.push({
                    id,
                    quantity
                });
            }

            return newCart;
        });
    }

    function removeFromCart(id) {
        setCartFoodOrders((currentInCartId) =>
            currentInCartId.filter((foodId) => foodId !== id))
    }

    const value = {
        orders: cartMenuOrders,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;
