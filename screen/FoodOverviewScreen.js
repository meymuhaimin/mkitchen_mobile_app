import { Text, ScrollView, StyleSheet, Image, View } from 'react-native';
import { useContext, useLayoutEffect, useState } from 'react';

import PrimaryButton from '../component/PrimaryButton';

import { MENU } from '../data/food-data';
import { CartContext } from '../context/cart-context';
import IconButton from '../component/IconButton';

function FoodOverviewScreen({ route, navigation }) {
    const [quantity, setQuantity] = useState(0);
    const foodCartCtx = useContext(CartContext);

    const foodId = route.params.menuId;
    const foodName = route.params.menuName;
    const foodPrice = route.params.menuPrice;
    const foodDefinition = route.params.menuDefinition;
    const foodImage = route.params.menuImage;

    const addedToCart = foodCartCtx.orders.includes(foodId);

    function addQuantity() {
        setQuantity(quantity + 1);
    }

    function removeQuantity() {
        setQuantity(quantity - 1);
    }

    function addToCart() {
        foodCartCtx.addToCart(foodId, quantity);
    }

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => {
    //             return (
    //                 <IconButton
    //                     icon={addedToCart ? 'cart' : 'cart-outline'}
    //                     color="black"
    //                     onPress={changeCartStatus}
    //                 />
    //             )
    //         }
    //     });
    // }, [navigation, changeCartStatus]);

    return (
        <ScrollView style={styles.outerContainer}>
            <Image source={{ uri: foodImage }} style={styles.image} />
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{foodName}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.about}>{foodDefinition}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.name}>RM{foodPrice}</Text>
            </View>
            <View>
                <PrimaryButton onPress={addQuantity}>
                    <Text style={styles.buttonText}>+</Text>
                </PrimaryButton>
                <Text style={styles.id}>{quantity}</Text>
                <PrimaryButton onPress={removeQuantity}>
                    <Text style={styles.buttonText}>-</Text>
                </PrimaryButton>
            </View>
            <PrimaryButton onPress={addToCart}>Add to Cart</PrimaryButton>
        </ScrollView>
    )

}

export default FoodOverviewScreen;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        margin: 10,
        borderRadius: 8,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: '#616161',
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    id: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        padding: 20
    },
    about: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
})

