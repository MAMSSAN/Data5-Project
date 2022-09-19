import React from "react";
import {
  Button,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import StatScreen from "../Screens/StatSceen";
import StatsDetails from "../Screens/StatsDetails";
import ProfileScreen from "../Screens/ProfileScreen";
import CagnotteScreen from "../Screens/CagnotteScreen";
import ReservationsScreen, {
  MesReservations,
  HistoriqueReservations,
} from "../Screens/ReservationsScreen";
import PackScreen from "../Screens/PackScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import useAuth from "../auth/useAuth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={35}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          title: "Home",
          headerStyle: {
            backgroundColor: "#ff8423",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function StatStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="StatScreen">
      <Stack.Screen
        name="StatScreen"
        component={StatScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={35}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          title: "Statistiques",
          headerStyle: {
            backgroundColor: "#ff8423",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
      />
      <Stack.Screen
        name="StatsDetailsScreen"
        component={StatsDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={35}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          title: "Profile",
          headerStyle: {
            backgroundColor: "#ff8423",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ReservationTabStack({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Résérver Terrain" component={ReservationsScreen} />
      <Tab.Screen name="Résérvations en cours" component={MesReservations} />
      <Tab.Screen
        name="Historique Résérvations"
        component={HistoriqueReservations}
      />
    </Tab.Navigator>
  );
}

function ReservationStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reservation"
        component={ReservationTabStack}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={35}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          title: "Résérvation",

          headerStyle: {
            backgroundColor: "#ff8423",
          },

          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function CagnotteStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CagnotteScreen"
        component={CagnotteScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={35}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          title: "Cagnotte",
          headerStyle: {
            backgroundColor: "#ff8423",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
          cardStyle: { backgroundColor: "black" },
        }}
      />
    </Stack.Navigator>
  );
}

function PackStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CagnotteScreen" component={PackScreen} />
    </Stack.Navigator>
  );
}

function Logout({ navigation }) {
  const { user, logOut } = useAuth();

  return <Button title="logout" onPress={() => logOut()}></Button>;
}

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const screens1 = [
    "Accueil",
    "Fournisseurs",
    "Copropriétaires",
    "Mon Espace",
    "Ma Résidence",
    "Evénements",
    "Travaux",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.profile}>
            <Image
              source={require("../assets/cookies.png")}
              style={styles.avatar}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerContentOptions={{
          backgroundColor: "black",
          activeTintColor: "white",
          inactiveTintColor: "#ffa26c",
          activeBackgroundColor: "#fe7815",
          inactiveBackgroundColor: "transparent",
          contentContainerStyle: {
            marginTop: 60,
          },
          itemStyle: {
            paddingHorizontal: 12,
            paddingVertical: 4,
            justifyContent: "center",
            alignContent: "center",

            // alignItems: 'center',
            overflow: "hidden",
          },
          labelStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons name="ios-home" size={35} color="white" />
            ),
          }}
        />

        <Drawer.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons name="md-man" size={35} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="Statistique"
          component={StatStack}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons name="stats-chart" size={35} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="Cagnotte"
          component={CagnotteStack}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5 name="coins" size={35} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="Centre"
          component={ReservationStack}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name="stadium" size={35} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="Pack"
          component={PackStack}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5 name="box-open" size={35} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="Deconnexion"
          component={Logout}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name="logout" size={35} color="white" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4B1958",
    paddingHorizontal: 28,

    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: "flex-end",
  },
  profile: {
    textAlign: "center",
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 50,
    marginLeft: 10,
  },
  pro: {
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: 16,
  },
});
