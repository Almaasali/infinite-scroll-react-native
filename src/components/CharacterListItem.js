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
          <Text style={styles.statusStyle}>{item.status}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}></Text>
          <Text style={styles.locationTextStyle}></Text>
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
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  statusStyle: {
    color: "#ffffff",
    fontSize: 14,
    justifyContent: "center",
    marginTop: 5,
  },
  iconStyle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 10,
  },
  locationContainer: {},
  locationTitle: {},
  locationTextStyle: {},
});

export default CharacterListItem;
