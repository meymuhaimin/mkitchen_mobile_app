import { View, Pressable, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
        
            <View style={styles.outer}>
                
                <Pressable style={styles.button}>
                    <View style={styles.hiring}>
                        <Text style={styles.title}>We Are Hiring</Text>
                    </View>
                </Pressable>
                
                <View style={styles.sec}>
                    <Pressable style={styles.button}>
                        <Text style={styles.title}>Vendors</Text>
                    </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Conference')}
                    >
                        <Text style={styles.title}>Food</Text>
                    </Pressable>
                </View>
                
                <Pressable style={styles.button}>
                    <View style={styles.donate}>
                        <Text style={styles.title}>Donate</Text>
                    </View>    
                </Pressable>
                
                
            </View>
        )    
}

export default HomeScreen;

const styles = StyleSheet.create({
    outer: {
        flex: 1,
    },
    hiring: {
        flex: 1,
        margin: 15,
        padding: 80,
        backgroundColor: 'white',
        borderWidth:1

    },
    button: {
        flex: 1
    },
    sec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        padding: 80,
        borderWidth:1
    },
    donate: {
        flex: 1,
        margin: 15,
        padding: 40,
        borderWidth:1
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontSize: 30,
        fontWeight: 'bold'
    }
})