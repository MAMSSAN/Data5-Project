import React from "react";
import { StyleSheet, Text, View, image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";

const Calories = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [552, 912, 676, 845],
      },
    ],
    legend: ["Calories"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calories</Text>

      <View style={styles.last}>
        <FontAwesome5
          name="burn"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>845</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}> 689</Text>
          <Text style={{ fontSize: 12, color: "white" }}>calories</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>912 </Text>
          <Text style={{ fontSize: 12, color: "white" }}>calories</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>552 </Text>
          <Text style={{ fontSize: 12, color: "white" }}>calories</Text>
        </View>
      </View>
    </View>
  );
};
const Acceleration = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [18, 25, 16, 10],
      },
    ],
    legend: ["Accélérations"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accélérations</Text>

      <View style={styles.last}>
        <MaterialCommunityIcons
          name="speedometer"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>10</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}> 17</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Acc</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>25 </Text>
          <Text style={{ fontSize: 12, color: "white" }}>Acc</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>10</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Acc</Text>
        </View>
      </View>
    </View>
  );
};

const Vitesse = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [22, 21, 19, 23],
      },
    ],
    legend: ["Vitesses"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vitesses</Text>

      <View style={styles.last}>
        <MaterialIcons
          name="shutter-speed"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>23</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}> 20</Text>
          <Text style={{ fontSize: 12, color: "white" }}>km/h</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>23 </Text>
          <Text style={{ fontSize: 12, color: "white" }}>km/h</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>19</Text>
          <Text style={{ fontSize: 12, color: "white" }}>km/h</Text>
        </View>
      </View>
    </View>
  );
};
const Puissance = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [127, 121, 135, 110],
      },
    ],
    legend: ["Puissances"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>puissances</Text>

      <View style={styles.last}>
        <Entypo
          name="controller-volume"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>110 </Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}> 117</Text>
          <Text style={{ fontSize: 12, color: "white" }}>mètres</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>135</Text>
          <Text style={{ fontSize: 12, color: "white" }}>mètres</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>110</Text>
          <Text style={{ fontSize: 12, color: "white" }}>mètres</Text>
        </View>
      </View>
    </View>
  );
};
const Dribble = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [150, 262, 161, 322],
      },
    ],
    legend: ["Dribbles"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dribbles</Text>

      <View style={styles.last}>
        <Ionicons
          name="logo-dribbble"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>322</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}> 212</Text>
          <Text style={{ fontSize: 12, color: "white" }}>dribbles</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>322</Text>
          <Text style={{ fontSize: 12, color: "white" }}>dribbles</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>150</Text>
          <Text style={{ fontSize: 12, color: "white" }}>dribbles</Text>
        </View>
      </View>
    </View>
  );
};
const Tir = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [22, 14, 25, 26],
      },
    ],
    legend: ["Tirs"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tirs</Text>

      <View style={styles.last}>
        <Ionicons
          name="logo-dribbble"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>26</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}> 23</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Tirs</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>26</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Tirs</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>14</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Tirs</Text>
        </View>
      </View>
    </View>
  );
};

const Distance = ({ route }) => {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
    datasets: [
      {
        data: [6.2, 7.3, 8.6, 7.9],
      },
    ],
    legend: ["Distances"], // optional
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distances</Text>

      <View style={styles.last}>
        <Ionicons
          name="logo-dribbble"
          size={80}
          color="white"
          style={{ marginRight: 30 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.lastMatch}>Dernier Match</Text>
          <Text style={styles.lastperformance}>7.9</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          height={220}
          width={400}
          chartConfig={{
            backgroundGradientFrom: "#ff9c63",
            backgroundGradientTo: "#f97224",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      <View style={styles.stat}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Moyenne
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>7.3</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Km</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Maximum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>8.6</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Km</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 15,
              color: "orange",
            }}
          >
            Minimum
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>6.2</Text>
          <Text style={{ fontSize: 12, color: "white" }}>Km</Text>
        </View>
      </View>
    </View>
  );
};

const StatsDetails = ({ route }) => {
  const type = route.params.params;
  console.log(type);
  if (type == "calories") return <Calories />;
  if (type == "acceleration") return <Acceleration />;
  if (type == "tir") return <Tir />;
  if (type == "vitesse") return <Vitesse />;
  if (type == "puissance") return <Puissance />;
  if (type == "dribble") return <Dribble />;
  if (type == "distance") return <Distance />;
};

export default StatsDetails;

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    margin: 20,
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 80,
    color: "#f47510",
  },

  last: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  stat: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 45,
  },
  lastMatch: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 15,
    color: "white",
  },
  lastperformance: {
    alignSelf: "center",
    fontSize: 27,
    fontWeight: "bold",
    color: "#f47510",
  },
  container: {
    backgroundColor: "black",
    height: "100%",
  },
});
