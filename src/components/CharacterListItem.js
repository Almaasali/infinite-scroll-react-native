import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

const window = Dimensions.get("window");

const CharacterListItem = ({ item }) => {
  const iconColor =
    item.status === "Alive"
      ? "#55cc44"
      : item.status === "Dead"
      ? "#d63d2e"
      : "#9e9e9e";
  return (
    <View style={styles.cardStyle}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.imageStyle} />
      </View>

      <View style={styles.infoStyle}>
        <Text style={styles.nameStyle}> {item.name}</Text>
        <View style={styles.statusContainer}>
          <View
            style={[styles.iconStyle, { backgroundColor: iconColor }]}
          ></View>
          <Text
            style={styles.statusStyle}
          >{`${item.status} - ${item.species}`}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Last known location:</Text>
          <Text style={styles.locationTextStyle}>{item.origin.name}</Text>
        </View>

        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>First seen in:</Text>
          <Text style={styles.locationTextStyle}>{item.location.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: window.width,
    height: window.height / 2,
    backgroundColor: "#3c3e44",
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
    paddingBottom: 30,
  },
  imageContainer: {
    width: window.width,
    height: window.height / 4,
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    aspectRatio: 2,
    alignSelf: "center",
    resizeMode: "cover",
  },
  infoStyle: {
    width: window.width,
    height: window.height / 2,
    flex: 1,
  },
  nameStyle: {
    color: "#f5f5f5",
    fontSize: 18,
    paddingTop: 10,
  },
  statusContainer: {
    flexDirection: "row",
  },
  statusStyle: {
    color: "#ffffff",
    fontSize: 14,
    justifyContent: "center",
    marginTop: 7,
  },
  iconStyle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 10,
  },
  locationContainer: {},
  locationTitle: {
    color: "#9e9e9e",
    fontSize: 16,
    paddingLeft: 10,
  },
  locationTextStyle: {
    fontSize: 18,
    color: "#ffffff",
    paddingLeft: 10,
  },
});

export default CharacterListItem;
