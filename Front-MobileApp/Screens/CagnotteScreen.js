import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AppButton from "../Components/AppButton";

const CagnotteScreen = () => {
  return (
    <View>
      <View style={{ alignSelf: "center" }}>
        <Text style={styles.niveau}>60</Text>
        <Image source={require("../assets/trone.png")} style={styles.trone} />
        <Text style={styles.niveauTitle}>Novice</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 25,
        }}
      >
        <Text style={styles.dataTitle}>DataXP</Text>
        <Text style={styles.dataNumbers}>22</Text>
        <Text style={{ marginRight: 45, color: "orange", fontWeight: "bold" }}>
          xp
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 25,
        }}
      >
        <Text style={styles.dataTitle}>DataCoins</Text>
        <Text style={styles.dataNumbers}>22</Text>
        <FontAwesome
          name="coins"
          size={20}
          color="orange"
          style={{ marginRight: 55 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 25,
        }}
      >
        <Text style={[styles.dataTitle, { marginLeft: 10 }]}>Cumul DataXP</Text>
        <Progress.Bar
          progress={0.2}
          width={140}
          height={15}
          color="orange"
          style={{ height: 15, marginTop: 3 }}
        />
        <Text style={{ fontSize: 13, marginRight: 15, color: "orange" }}>
          20%
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <AppButton
          title="Objectif niveau"
          style={{ margin: 10, padding: 10 }}
        />
        <AppButton
          title="salle des trophées"
          style={{ margin: 10, padding: 10 }}
        />
        <AppButton
          title="convertion DataCoins"
          style={{ margin: 10, padding: 10 }}
        />
      </View>
    </View>
  );
};

export default CagnotteScreen;

const styles = StyleSheet.create({
  niveau: {
    alignSelf: "center",
    paddingTop: 20,
    fontSize: 55,
    fontWeight: "bold",
    color: "orange",
  },
  trone: {
    position: "absolute",
    top: 5,
    height: 140,
    width: 140,
    alignSelf: "center",
  },
  niveauTitle: {
    fontSize: 20,
    marginTop: 50,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },

  dataNumbers: {
    alignSelf: "center",
    fontSize: 17,
    color: "white",
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
