import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native';

import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';
import FoodScreen from './screen/FoodScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  // const [screenNumber, setScreenNumber] = useState();

  // function screenNumberHandler(skrinNumber) {
  //   setScreenNumber(skrinNumber);
  // }

  // let screen = <LoginScreen onSkrinNumber={screenNumberHandler} />;

  // if (screenNumber === 1) {
  //   //screen=<HomeScreen/>
  //   screen=<SignupScreen onSkrinNumber={screenNumberHandler}/>
  // } else if (screenNumber === 0) {
  //   screen=<LoginScreen onSkrinNumber={screenNumberHandler}/>
  // } else if (screenNumber === 2) {
  //   screen=<HomeScreen onSkrinNumber={screenNumberHandler}/>
  // }

  // return (
  //   <SafeAreaView style = {styles.oriScreen}>
  //     {screen}
  //   </SafeAreaView>
    
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  oriScreen: {
    flex: 1,
    backgroundColor: '#8CE8BC',
    justifyContent: 'center'
  }
});
