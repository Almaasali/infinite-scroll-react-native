import React, { Component, lazy, Suspense } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import Spinner from "../components/Spinner";
import { loadCharacters } from "../redux/actions";

const CharacterList = lazy(() => import("../components/CharactersList"));
class HomeScreen extends Component {
  componentDidMount = () => {
    this.props.loadCharacters();
  };

  render() {
    const { characters } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The Rick and Morty API</Text>
        <Suspense fallback={<Spinner />}>
          <CharacterList
            loadCharacters={this.props.loadCharacters}
            characters={characters}
          />
        </Suspense>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24282f",
    paddingBottom: 60,
  },
  title: {
    alignSelf: "center",
    color: "#f5f5f5",
    fontSize: 24,
    paddingVertical: 10,
    margin: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    nextPage: state.nextPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCharacters: () => dispatch(loadCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
