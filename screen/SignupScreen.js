import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';

import PrimaryButton from '../component/PrimaryButton';

function SignupScreen({onSkrinNumber}) {
    function pressHandler() {
        var skrinNum = 0;
        onSkrinNumber(skrinNum);
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={{textAlign: 'center', fontSize: 40}}>
                Create New Account
            </Text>
            <TextInput 
                placeholder='Name'
                style={styles.emailInput}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <TextInput 
                placeholder='Email'
                style={styles.emailInput}
                keyboardType="default"
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
            <TextInput 
                placeholder='Re-enter Password'
                style={styles.emailInput}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false} 
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Sign Up</PrimaryButton>
            <View>
                <Pressable onPress={() => navigation.navigate('Login')} >
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