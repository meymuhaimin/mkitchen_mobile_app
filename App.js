import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import HomeScreen from "./screen/HomeScreen";
import FoodScreen from "./screen/FoodScreen";
import HiringScreen from "./screen/HiringScreen";
import DonateScreen from "./screen/DonateScreen";
import FoodOverviewScreen from "./screen/FoodOverviewScreen";
import CartScreen from "./screen/CartScreen";
import CartContextProvider from "./context/cart-context";
import { Button } from "react-native-web";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    sceneContainerStyle: { backgroundColor: "#8CE8BC" }
  }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Cart" component={CartScreen} />
  </Drawer.Navigator>
}

export default function App() {

  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          contentStyle: { backgroundColor: "#8CE8BC" }
        }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "login",
              headerShown: false
            }}
          />
          <Stack.Screen name="Sign Up" component={SignupScreen} />
          <Stack.Screen name="HomeScreen" component={DrawerNavigator} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="FoodScreen" component={FoodScreen} options={{
            title: "Menu",
          }} />
          <Stack.Screen name="Hiring" component={HiringScreen} options={{
            title: "Join Us"
          }} />
          <Stack.Screen name="Donate" component={DonateScreen} options={{
            title: "Donate Through Us"
          }} />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} options={{
            title: "About The Meal"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  oriScreen: {
    flex: 1,
    backgroundColor: "#8CE8BC",
    justifyContent: "center",
  },
});
