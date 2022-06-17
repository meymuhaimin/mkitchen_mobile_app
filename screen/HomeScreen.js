import { View, Pressable, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.outer}>
            <View style={styles.hiring}>
                <Pressable style={styles.button}>
                    <Text style={styles.title}>We Are Hiring</Text>
                </Pressable>
            </View>
            <View style={styles.sec}>
                <Pressable style={styles.button}>
                    <Text style={styles.title}>Vendors</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.title}>Food</Text>
                </Pressable>
            </View>
            <View style={styles.donate}>
                <Pressable style={styles.button}>
                    <Text style={styles.title}>Donate</Text>
                </Pressable>
            </View>
            
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
        backgroundColor: 'white'

    },
    button: {
        flex: 1
    },
    sec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        padding: 40
    },
    donate: {
        flex: 1,
        margin: 15,
        padding: 40
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontSize: 30,
        fontWeight: 'bold'
    }
})