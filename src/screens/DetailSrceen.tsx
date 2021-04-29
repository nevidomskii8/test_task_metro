import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { SimilarVideoCard } from "../components/SimilarMoveCard";
import { ApplicationState, MoviesState, onGetDetailMovie } from "../redux";

const screenWidth = Dimensions.get("screen").width;

interface DetailProps {
  movieReducer: MoviesState;
  navigation: { getParam: Function };
  onGetDetailMovie: Function;
}

export const _DetailScreen: React.FC<DetailProps> = ({
  navigation,
  movieReducer,
  onGetDetailMovie,
}) => {
  const { movieItem } = movieReducer;
  const { getParam } = navigation;
  const id = getParam("id");

  useEffect(() => {
    onGetDetailMovie(id);
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../images/X-men_Movie-_X-men.png")}
        />
        <View style={styles.percent}>
          <Text style={styles.percentText}>61%</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.text}>
            {movieItem.release_date?.split("-")[0]}
          </Text>
          <Text style={styles.name}>{movieItem.original_title}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.discribeTitle}>overviev:</Text>
          <Text style={styles.text}>{movieItem.overview}</Text>
        </View>
        <View>
          <Text style={styles.discribeTitle}>similar movies</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movieItem.production_companies}
            renderItem={({ item }) => <SimilarVideoCard name={item.name} />}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  img: {
    width: screenWidth,
    height: "100%",
  },
  box: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imgContainer: {
    height: "35%",
    position: "relative",
  },
  percent: {
    zIndex: 1,
    position: "absolute",
    height: 58,
    width: 58,
    borderRadius: 58 / 2,
    bottom: -29,
    right: 20,
    backgroundColor: "#484848",
    alignItems: "center",
    justifyContent: "center",
  },
  percentText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  discribeTitle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    color: "#D3E1F5",
  },
});

const mapToStateProps = (state: ApplicationState) => ({
  movieReducer: state.movieReducer,
});

const DetailScreen = connect(mapToStateProps, { onGetDetailMovie })(
  _DetailScreen
);

export { DetailScreen };
