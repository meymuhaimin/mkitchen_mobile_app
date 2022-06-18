import { View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}){
    

        return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{children}</Text>
            </View>
        </Pressable>
        );
}

export  default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#616161',
        borderRadius: 9,
        paddingVertical: 13,
        elevation: 2,
        marginHorizontal: 35,
        marginVertical: 20
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    }
});