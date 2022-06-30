import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

import PrimaryButton from '../component/PrimaryButton';

import { MENU } from '../data/food-data';
import { CartContext } from '../context/cart-context';
import IconButton from '../component/IconButton';

function FoodOverviewScreen({ route, navigation }) {
    const foodCartCtx = useContext(CartContext);

    const foodId = route.params.menuId;
    const foodName = route.params.menuName;
    const foodPrice = route.params.menuPrice;
    const foodDefinition = route.params.menuDefinition;
    const foodImage = route.params.menuImage;

    const addedToCart = foodCartCtx.ids.includes(foodId);

    function changeCartStatus() {
        if (addedToCart) {
            foodCartCtx.removeFromCart(foodId);
        } else {
            foodCartCtx.addToCart(foodId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={addedToCart ? 'cart' : 'cart-outline'}
                        color="black"
                        onPress={changeCartStatus}
                    />
                )
            }
        });
    }, [navigation, changeCartStatus]);

    return (
        <View style={styles.outerContainer}>
            <Image source={{ uri: foodImage }} style={styles.image} />
            <View style={styles.innerContainer}>
                <Text style={styles.id}>{foodId}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{foodName}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.about}>{foodDefinition}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{foodPrice}</Text>
            </View>
            <View>
                <PrimaryButton>

                </PrimaryButton>
            </View>
        </View>
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
        textAlign: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    about: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
})

