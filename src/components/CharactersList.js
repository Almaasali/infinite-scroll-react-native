import React from "react";
import { FlatList, Text } from "react-native";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ characters, loadCharacters }) => {
  return characters ? (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CharacterListItem item={item} />}
      onEndReached={() => loadCharacters()}
      onEndReachedThreshold={0.2}
    />
  ) : (
    <Text>No data ....</Text>
  );
};
export default CharacterList;
