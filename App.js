import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';

export default function App() {
  const [screenNumber, setScreenNumber] = useState();

  function screenNumberHandler(skrinNumber) {
    setScreenNumber(skrinNumber);
  }

  let screen = <LoginScreen onSkrinNumber={screenNumberHandler} />;

  if (screenNumber === 1) {
    screen=<SignupScreen onSkrinNumber={screenNumberHandler}/>
  } else if (screenNumber === 0) {
    screen=<LoginScreen onSkrinNumber={screenNumberHandler}/>
  }

  return (
    <SafeAreaView style = {styles.oriScreen}>
      {screen}
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
