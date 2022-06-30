import { Text, View } from 'react-native';
import {useContext} from "react";
import {CartContext} from "../context/cart-context";

import { MENU } from "../data/food-data"

function CartScreen() {
    const cartCtx = useContext(CartContext);

    const {orders} = cartCtx;

    console.log(orders);

    const getTotal = () => {
        let total = 0;
        orders.forEach(order => {
            const food = MENU.find(food => food.id === order.id);
            total += food.price * order.quantity;
        }
        );
        return total;
    }

    return <View>
        {orders.map((order, index) => {
            const food = MENU.find(menu => menu.id === order.id)
            const price = food.price * order.quantity;

            return <Text key={index}>{food.name} * {order.quantity}: RM {price}</Text>
        })}
        <Text>Total: RM {getTotal()}</Text>
    </View>
}

export default CartScreen;
