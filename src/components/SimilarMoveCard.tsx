import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

interface DetailCardProps {
  name: string;
}

const SimilarVideoCard: React.FC<DetailCardProps> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={require("../images/xmen.jpg")}
        imageStyle={{ borderRadius: 20 }}
        style={styles.img}
      ></ImageBackground>
      <Text  numberOfLines={1} ellipsizeMode={"tail"} style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#1C1C1C",
    borderRadius: 20,
    width: 360,
    height: 260,
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
  },
  img: {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    borderRadius: 20,
    marginRight: "auto",
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
    marginLeft: 10,
    width: "100%",
    textTransform: "uppercase",
  },
});

export { SimilarVideoCard };
