import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                    onPress={() => navigation.navigate('FoodScreen')}>
                    <View style={styles.icon}>
                        <Ionicons name='fast-food' size={80} color="#F77162" />
                    </View>
                    <View style={styles.inner1Container}>
                        <Text style={styles.title}>Food</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}>
                    <View style={styles.icon}>
                        <Ionicons name='pricetags' size={80} color="#626BF7" />
                    </View>
                    <View style={styles.inner1Container}>
                        <Text style={styles.title}>Vendors</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                    onPress={() => navigation.navigate('Hiring')}>
                    <View style={styles.icon}>
                        <Ionicons name='body' size={80} color="#DE62F7" />
                    </View>
                    <View style={styles.inner1Container}>
                        <Text style={styles.title}>We Are Hiring</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                    onPress={() => navigation.navigate('Donate')}>
                    <View style={styles.icon}>
                        <Ionicons name='cash-outline' size={80} color="#71F762" />
                    </View>
                    <View style={styles.inner1Container}>
                        <Text style={styles.title}>Donate</Text>
                    </View>
                </Pressable>
            </View>
        </View>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center",
    },
    innerContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        width: 200,
        elevation: 4,
        borderRadius: 8,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: '#616161',
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.1,
    },
    inner1Container: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: 'white'
    },
})
