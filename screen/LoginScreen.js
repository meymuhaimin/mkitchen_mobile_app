import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';

import PrimaryButton from '../component/PrimaryButton';

function LoginScreen({ navigation }) {
    // function pressHandler() {
    //     var skrinNum = 1;
    //     onSkrinNumber(skrinNum);
    // }

    // function loginPressHandler() {
    //     var skrinNum = 2;
    //     onSkrinNumber(skrinNum);
    // }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Email'
                style={styles.emailInput}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <TextInput 
                placeholder='Password'
                style={styles.emailInput}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton onPress={() => navigation.navigate('HomeScreen')}>Login</PrimaryButton>
            <View>
                <Text style={{textAlign: 'center'}}>Not registered yet?</Text>
                <Pressable onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export  default LoginScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 2,
        padding: 16,
        backgroundColor: '#8CE8BC',
    },
    emailInput: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 9,
        paddingVertical: 20,
        marginHorizontal: 35,
        marginVertical: 20,
        fontSize: 20,
        textAlign: 'center'
    },
})