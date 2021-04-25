import React from "react";
import { StyleSheet } from "react-native";
import { LandingScreen } from "./src/screens/LandingScreen";
import { HomeScreen } from "./src/screens/HomeScreen";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";

import { store } from "./src/redux";

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator(
      {
        Landing: LandingScreen,
      },
      {
        defaultNavigationOptions: {
          headerShown: false,
        },
      }
    ),
  },

  homeStack: createBottomTabNavigator({
    home: {
      screen: createStackNavigator(
        {
          HomePage: HomeScreen,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
    },
  }),
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
