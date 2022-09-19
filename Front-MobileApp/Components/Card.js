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

const Card = () => {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <TouchableOpacity>
          <FontAwesome
            name="edit"
            size={20}
            style={{ top: 5, marginBottom: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(true)}>
          <FontAwesome
            name="money-bill-wave"
            size={30}
            style={{ bottom: 10 }}
          />
        </TouchableOpacity>

        <Modal visible={show} animationType="slide">
          <Button title="Close" onPress={() => setShow(false)} />
          <View style={{ marginTop: 250 }}>
            <CreditCardInput />
          </View>
        </Modal>

        <TouchableOpacity>
          <MaterialIcons name="cancel" size={25} style={{ top: 5 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

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
