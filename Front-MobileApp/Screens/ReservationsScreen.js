import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import AppPicker from "../Components/AppPicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppButton from "../Components/AppButton";
import Card from "../Components/Card";
import ResHistorique from "../Components/ResHistorique";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeAlert from "react-native-awesome-alerts";

const ReservationsScreen = () => {
  const tests = [
    { label: "Test1", value: 1 },
    { label: "Test2", value: 2 },
    { label: "Test3", value: 3 },
  ];

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [test, setTest] = useState();
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <MaterialCommunityIcons
        name="stadium"
        size={150}
        color="orange"
        style={{ alignSelf: "center" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            padding: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Centre :{" "}
        </Text>
        <AppPicker
          items={tests}
          onSelectItem={(item) => setTest(item)}
          selectedItem={test}
          placeholder="Choisisser un Centre"
          icon="apps"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            padding: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Terrain :{" "}
        </Text>
        <AppPicker
          items={tests}
          onSelectItem={(item) => setTest(item)}
          selectedItem={test}
          placeholder="Test"
          icon="apps"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            padding: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Date :{" "}
        </Text>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            padding: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Heure :{" "}
        </Text>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            padding: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Durée :{""}
        </Text>
        <AppPicker
          items={tests}
          onSelectItem={(item) => setTest(item)}
          selectedItem={test}
          placeholder="Test"
          icon="apps"
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <AppButton
          title="Voir Disponibilité"
          style={{ margin: 10, padding: 10 }}
          onPress={() => setShowAlert(true)}
        />
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="ce créneau est disponible, voulez-vous continuer ?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Non"
          confirmText="Oui"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            setShowAlert(false);
          }}
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
        />
      </View>
    </View>
  );
};

const MesReservations = () => {
  return (
    <View>
      <Card />
    </View>
  );
};

const HistoriqueReservations = () => {
  return (
    <View>
      <ResHistorique />
    </View>
  );
};

export default ReservationsScreen;
export { MesReservations, HistoriqueReservations };

const styles = StyleSheet.create({});
