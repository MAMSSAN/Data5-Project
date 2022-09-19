import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import StatsButton from "../Components/StatsButton";
import Apis from "../Apis/statsApis";

const StatScreen = ({ navigation }) => {
  const [statsSpec, setStatsSpec] = useState({});
  const [allStats, setAllStats] = useState({});

  const ApiMaxMinMoy = useApi(Apis.MaxMinMoyData);
  const Apistats = useApi(Apis.AllStatsPlayer);

  useEffect(() => {
    ApiMaxMinMoy.request().then((result) => {
      setStatsSpec(result.data);
    });
    Apistats.request().then((result) => {
      setAllStats(result.data);
    });
  }, []);

  useEffect(() => {
    console.log("//////////////");
    console.log(Apistats.loading);
    console.log(allStats);
    console.log("//////////////");
  }, [allStats]);
  if (Apistats.loading) return null;
  return (
    <View>
      <ImageBackground
        source={require("../assets/action-athlete-ball-159636.png")}
        resizeMode="cover"
        style={styles.coverImage}
      >
        <View style={styles.row}>
          <StatsButton
            style={styles.button}
            title="Calorie"
            icon={require("../assets/stats/cookie.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "calories",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
          <StatsButton
            style={styles.button}
            title="Distance"
            icon={require("../assets/stats/Distance.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "distance",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
        </View>
        <View style={styles.row}>
          <StatsButton
            style={styles.button}
            title="Tir"
            icon={require("../assets/stats/Tir.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "tir",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
          <StatsButton
            style={styles.button}
            title="Vitesse"
            icon={require("../assets/stats/run.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "vitesse",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
        </View>
        <View style={styles.row}>
          <StatsButton
            style={styles.button}
            title="temps jeu"
            icon={require("../assets/stats/timer.png")}
          />
          <StatsButton
            style={styles.button}
            title="Puissance"
            icon={require("../assets/stats/puissance.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "puissance",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
        </View>
        <View style={styles.row}>
          <StatsButton
            style={styles.button}
            title="Dribble"
            icon={require("../assets/stats/tshirt.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "dribble",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
          <StatsButton
            style={styles.button}
            title="Acceleration"
            icon={require("../assets/stats/urgency.png")}
            onPress={() =>
              navigation.navigate("StatsDetailsScreen", {
                params: "acceleration",
                data: allStats,
                dataSpec: statsSpec,
              })
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StatScreen;

const styles = StyleSheet.create({
  coverImage: {
    width: "100%",
    height: "100%",
  },
  row: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
