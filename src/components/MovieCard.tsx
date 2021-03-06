import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  Dimensions,
} from "react-native";
import { MovieItem } from "../redux";

interface CardProps {
  item: MovieItem;
  onTap: Function;
}

const screenWidth = Dimensions.get("screen").width;
const marginHorisontal = screenWidth/16 
const heightItem = screenWidth/2.5

const MovieCard: React.FC<CardProps> = ({ item, onTap }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item.id)}>
      <ImageBackground
        source={require("../images/x-men.jpeg")}
        imageStyle={{ borderRadius: 20 }}
        style={styles.img}
      >
        <View style={styles.view}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.text}>
            {item.title}
          </Text>
          <Text style={styles.year}>{item.release_date.split("-")[0]}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#1C1C1C",
    borderRadius: 20,
    width: screenWidth/3,
    height: heightItem,
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginBottom: 10,
    marginHorizontal: marginHorisontal ,
    
  },
  img: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#000",
    width: "90%",
  },
  year: {
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#000",
  },
  view: {
    display: "flex",
    height: "35%",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, .7)",
  },
});

export { MovieCard };
