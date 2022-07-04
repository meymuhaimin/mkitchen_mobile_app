import { Text, View, StyleSheet } from 'react-native';
import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { Ionicons } from "@expo/vector-icons";

import { MENU } from "../data/food-data"
import PrimaryButton from '../component/PrimaryButton';

function CartScreen() {
    const cartCtx = useContext(CartContext);

    const { orders } = cartCtx;

    const getTotal = () => {
        let total = 0;
        orders.forEach(order => {
            const food = MENU.find(food => food.id === order.id);
            total += food.price * order.quantity;
        }
        );
        return total;
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Ionicons name='cart' size={100} color='black' />
            </View>
            <View style={styles.innerContainer}>
                {orders.map((order, index) => {
                    const food = MENU.find(menu => menu.id === order.id)
                    const price = food.price * order.quantity;

                    return <Text style={styles.reciept} key={index}>{food.name} * {order.quantity}: RM {price}</Text>
                })}
            </View>
            <View style={styles.innerContainer}>
                <Text>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>
                <Text style={styles.reciept}>Total: RM {getTotal()}</Text>
            </View>
            <View style={styles.payment}>
                <PrimaryButton>Cash On Delivery</PrimaryButton>
                <PrimaryButton>Online Payment</PrimaryButton>
            </View>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    innerContainer: {
        padding: 15
    },
    reciept: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    payment: {
        flexDirection: 'row'
    },
})
