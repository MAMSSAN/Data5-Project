import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "../Screens/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen";
import DrawerStack from "./AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Home" component={DrawerStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
