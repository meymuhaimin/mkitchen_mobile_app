import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';

import PrimaryButton from '../component/PrimaryButton';

function SignupScreen({onSkrinNumber}) {
    function pressHandler() {
        var skrinNum = 0;
        onSkrinNumber(skrinNum);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.emailInput}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <TextInput 
                style={styles.emailInput}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <TextInput 
                style={styles.emailInput}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <TextInput 
                style={styles.emailInput}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Login</PrimaryButton>
            <View>
                <Pressable onPress={pressHandler} >
                    <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 2,
        padding: 16,
        backgroundColor: '#62FAC8',
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