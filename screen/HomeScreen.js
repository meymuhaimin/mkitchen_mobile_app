import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}>
                    <View style={styles.inner1Container}>
                        <Text style={styles.title}>We Are Hiring</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.innerContainer}>
                <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}>
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
                    onPress={() => navigation.navigate('FoodScreen')}>
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
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: 'white'
    },
})