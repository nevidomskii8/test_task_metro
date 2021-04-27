import React from "react";
import { StyleSheet, Image } from "react-native";
import { LandingScreen } from "./src/screens/LandingScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { DetailScreen } from "./src/screens/DetailSrceen";

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
          DetailPage: DetailScreen,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = require("./src/images/home_icon.png");
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
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
  tabIcon: {
    width: 30,
    height: 30,
  },
});
