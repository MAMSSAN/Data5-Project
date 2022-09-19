import React, { useState } from "react";
import AuthNavigator from "./navigation/AuthNavigator";
import DrawerStack from "./navigation/AppNavigator";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";
//import { AppLoading } from "expo";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  //   );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <DrawerStack /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}
