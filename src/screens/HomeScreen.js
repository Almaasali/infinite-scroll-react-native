import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import CharacterListItem from "../components/CharacterListItem";
import Spinner from "../components/Spinner";
import { loadCharacters } from "../redux/actions";

class HomeScreen extends Component {
  componentDidMount = () => {
    this.props.loadCharacters();
  };

  render() {
    const { isLoading, characters } = this.props;
    return isLoading ? (
      <Spinner />
    ) : (
      <View style={styles.container}>
        <Text style={styles.title}>The Rick and Morty API</Text>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CharacterListItem item={item} />}
          // onScrollEndDrag={() => {
          //   this.props.loadCharacters();
          // }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24282f",
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
  console.log("page state : ", state.nextPage);
  return {
    characters: state.characters,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCharacters: () => dispatch(loadCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
