import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const StatsButton = ({ title, icon, style, onPress }) => {
  const styleButton = { ...styles.container, ...style };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleButton}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StatsButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 150,
    width: 170,
    borderRadius: 7,

    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
    color: "orange",
  },
});
