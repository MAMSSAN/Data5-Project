import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input-view";

const ResHistorique = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>17/02/2022</Text>
        <Text style={{ margin: 5, fontWeight: "100", fontSize: 15 }}>
          15h00
        </Text>
        <Text style={{ margin: 5, fontWeight: "bold", fontSize: 15 }}>
          Centre X
        </Text>
      </View>
    </View>
  );
};

export default ResHistorique;

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "#fff",
    shadowColor: "#fa6531",
    borderRadius: 30,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
});
