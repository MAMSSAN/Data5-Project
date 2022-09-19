import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import authApi from "../Apis/auth";
import useAuth from "../auth/useAuth";

const SignInScreen = ({ route, navigation }) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const auth = useAuth();

  const handleSubmit = async () => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Bienvenue !</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "orange",
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: "black",
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Votre email"
            placeholderTextColor="#05375a"
            style={[
              styles.textInput,
              {
                color: "black",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(email) => SetEmail(email)}
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: "black",
              marginTop: 35,
            },
          ]}
        >
          Mot de passe
        </Text>
        <View style={styles.action}>
          <Feather name="lock" size={20} />
          <TextInput
            placeholder=" Votre mot de passe"
            placeholderTextColor="#05375a"
            style={[
              styles.textInput,
              {
                color: "black",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(password) => SetPassword(password)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[
            styles.test,
            {
              borderColor: "black",
              borderWidth: 1,
              marginTop: 35,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "white",
              },
            ]}
          >
            Connexion
          </Text>
        </TouchableOpacity>

        <Text
          onPress={() => navigation.navigate("SignUpScreen")}
          style={{
            alignSelf: "center",
            color: "black",
            paddingVertical: 30,
            marginRight: 200,
          }}
        >
          Vous êtes nouveau ?
        </Text>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  test: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    width: 150,
    marginLeft: 210,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
