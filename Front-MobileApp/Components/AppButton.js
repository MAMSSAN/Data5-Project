import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AppButton = ({ title, style, onPress }) => {
  const styleButton = { ...styles.button, ...style };
  return (
    <TouchableOpacity style={styleButton} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },

  button: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "orange",
  },
});
