import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import authApi from "../Apis/auth";

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();
  const handleSubmit = async (userInfo) => {
    const result = await registerApi(userInfo);
    if (!result.ok) {
      if (result.data) MediaStreamErrorEvent(result.data.error);
      else {
        setError("une erreur inattendue s'est produite");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };
  return (
    <View>
      <Text>Salut</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
