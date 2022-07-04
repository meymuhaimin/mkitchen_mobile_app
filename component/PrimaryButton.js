import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

function PrimaryButton({ children, onPress }) {


    return (
        <Pressable onPress={onPress}
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#616161',
        borderRadius: 9,
        paddingVertical: 13,
        elevation: 2,
        marginHorizontal: 35,
        marginVertical: 20,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    buttonPressed: {
        opacity: 0.1,
    },
});