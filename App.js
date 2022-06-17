import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import LoginScreen from './screen/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style = {styles.oriScreen}>
      <LoginScreen />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  oriScreen: {
    flex: 1,
    backgroundColor: '#62FAC8',
    justifyContent: 'center'
  }
});
