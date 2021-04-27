import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { MovieCard } from "../components/MovieCard";
import { ApplicationState, MoviesState } from "../redux";
import { useNavigation } from "../utils";

interface HomeProps {
  movieReducer: MoviesState;
}

const screenWidth = Dimensions.get("screen").width;

export const _HomeScreen: React.FC<HomeProps> = ({ movieReducer }) => {
  const { results } = movieReducer.moviesList;
  const { navigate } = useNavigation();
  const handlleOnTap = (id: number) => {
    navigate("DetailPage", { id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.title}>Movies</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={results}
          renderItem={({ item }) => (
            <MovieCard item={item} onTap={handlleOnTap} />
          )}
          keyExtractor={(item) => `${item["id"]}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginLeft: 10,
    color: "#858585",
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    flex: 1.5,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: screenWidth,
    display: "flex",
    flexDirection: "column",
  },
});

const mapToStateProps = (state: ApplicationState) => ({
  movieReducer: state.movieReducer,
});

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export { HomeScreen };
