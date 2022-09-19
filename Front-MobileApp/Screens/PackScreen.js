import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PackButton from "../Components/PackButton";

const PackScreen = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={[styles.row, { marginTop: 140 }]}>
        <PackButton />
        <PackButton />
      </View>
      <View style={{ alignSelf: "center", marginTop: 50 }}>
        <PackButton />
      </View>
      <View style={[styles.row, { marginTop: 50 }]}>
        <PackButton />
        <PackButton />
      </View>
    </View>
  );
};

export default PackScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
