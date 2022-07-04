import { View, TextInput, StyleSheet } from 'react-native';

import PrimaryButton from '../component/PrimaryButton';

function HiringScreen() {
    return (
        <View >
            <TextInput
                placeholder='Name'
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputContainer}
            />
            <TextInput
                placeholder='Contact Number'
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputContainer}
            />
            <TextInput
                placeholder='Staff or Rider'
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputContainer}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>

        </View>
    )
}

export default HiringScreen;

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 9,
        paddingVertical: 20,
        marginHorizontal: 35,
        marginVertical: 20,
        fontSize: 20,
        textAlign: 'center',
    },
})