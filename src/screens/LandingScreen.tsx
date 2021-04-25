import React, { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import { connect, useSelector } from "react-redux";
import { ApplicationState, MoviesState } from "../redux";

import { useNavigation } from "../utils";

const screenWidth = Dimensions.get("screen").width;

interface LandingProps {
  movieReducer: MoviesState;
}

const _LandingScreen: React.FC<LandingProps> = (props) => {
  const { movieReducer } = props;

  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      console.log("movieReducer", movieReducer);
      console.log("homeStack push");
      navigate("homeStack");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Hi! Nice to see you!</Text>
        </View>
        <Text style={styles.addressText}> </Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7D7D7D",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
  },

  footer: {
    flex: 1,
  },
});

const mapToStateProps = (state: ApplicationState) => ({
  movieReducer: state.movieReducer,
});

const LandingScreen = connect(mapToStateProps)(_LandingScreen);

export { LandingScreen };
