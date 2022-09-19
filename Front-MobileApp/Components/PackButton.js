import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

const PackButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.text}>Beginner</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide">
        <Button title="Close" onPress={() => setShowModal(false)} />
        <View style={{ marginTop: 250 }}>
          <Text>Test</Text>
        </View>
      </Modal>
    </View>
  );
};

export default PackButton;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 90,
    borderRadius: 15,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
