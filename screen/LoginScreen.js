import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../component/PrimaryButton';

function LoginScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.emailInput}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Login</PrimaryButton>
        </View>
    )
}

export  default LoginScreen;

const styles = StyleSheet.create({
    inputContainer: {
        
        marginTop: 100,
        padding: 16,
        backgroundColor: '#62FAC8',
    },
    emailInput: {
        height: 50,
        fontSize: 32,
        borderColor: 'white',
        borderRadius: 8,
        backgroundColor: 'white'
    }
})