import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Switch } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProfileScreen = () => {
  const [clickedMail, setClickedMail] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [clickedPassword, setClickedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={{ alignSelf: "center", margin: 30 }}>
        <Avatar
          rounded
          size={150}
          title="HS"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          titleStyle={{ color: "orange" }}
          containerStyle={{ borderWidth: 3, borderColor: "orange" }}
        />
        <Avatar.Accessory color="white" size={35} />
      </View>

      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Nom
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Hicham SBIHI
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: "white",
            borderBottomWidth: 3,
            width: "90%",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Adresse e-mail
          </Text>
          <TouchableOpacity
            onPress={() => {
              setClickedMail(!clickedMail);
              setShowMail(!showMail);
            }}
          >
            {clickedMail ? (
              <AntDesign name="caretdown" color="orange" />
            ) : (
              <AntDesign name="caretright" color="orange" />
            )}
          </TouchableOpacity>
        </View>
        <View>
          {showMail ? (
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 15,
                paddingRight: 15,
                color: "white",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              sbihi.hicham96@gmail.com
            </Text>
          ) : null}
        </View>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: "white",
            borderBottomWidth: 3,
            width: "90%",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Mot de passe
          </Text>
          <TouchableOpacity
            onPress={() => {
              setClickedPassword(!clickedPassword);
              setShowPassword(!showPassword);
            }}
          >
            {clickedPassword ? (
              <AntDesign name="caretdown" color="orange" />
            ) : (
              <AntDesign name="caretright" color="orange" />
            )}
          </TouchableOpacity>
        </View>
        <View>
          {showPassword ? (
            <View>
              <TextInput
                style={styles.input}
                placeholder=" nouveau mot de passe"
              />
              <TextInput
                style={styles.input}
                placeholder=" confirmer votre mot de passe"
              />
            </View>
          ) : null}
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: "white",
          borderBottomWidth: 3,
          width: "90%",
        }}
      />
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Notifications push
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: "white",
            borderBottomWidth: 3,
            width: "90%",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Conditions de Service
          </Text>
          <AntDesign name="caretright" />
        </View>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: "white",
            borderBottomWidth: 3,
            width: "90%",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Politique de confidentialité
          </Text>
          <AntDesign name="caretright" color="orange" />
        </View>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: "white",
            borderBottomWidth: 3,
            width: "90%",
            marginBottom: 30,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "70%",
    alignSelf: "center",
  },
});
