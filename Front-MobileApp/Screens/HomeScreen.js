import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Actib,
} from "react-native";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Swiper from "react-native-swiper";
import ApiHome from "../Apis/statsApis";
import useApi from "../hooks/useApi";

const HomeScreen = () => {
  const [total, setTotal] = useState();
  const [match, setShowMatch] = useState(true);
  const [sante, setShowSante] = useState(false);
  const [recompense, setShowRecompense] = useState(false);

  const ApiStatsTotal = useApi(ApiHome.totalData);

  useEffect(() => {
    ApiStatsTotal.request().then((result) => setTotal(result.data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sliderContainer}>
        <ImageBackground
          source={require("../assets/Acceuil.jpg")}
          resizeMode="cover"
          style={styles.sliderImage}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              marginBottom: 120,
              fontWeight: "bold",
              color: "white",
            }}
          >
            SBIHI Hicham
          </Text>
          <View style={{ position: "absolute", top: 80 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                marginLeft: 140,
                fontWeight: "bold",
                color: "white",
              }}
            >
              175 cm
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                marginLeft: 140,
                fontWeight: "bold",
                color: "white",
              }}
            >
              63 Kg
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                marginLeft: 140,
                fontWeight: "bold",
                color: "white",
              }}
            >
              24 ans
            </Text>
          </View>

          <View style={{ position: "absolute", top: 65, left: 60 }}>
            <Avatar
              rounded
              size={120}
              title="HS"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              titleStyle={{ color: "orange" }}
              containerStyle={{ borderWidth: 3, borderColor: "orange" }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            setShowMatch(!match) &
            setShowRecompense(false) &
            setShowSante(false)
          }
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-calendar" size={35} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Dernier Match</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            setShowRecompense(!recompense) &
            setShowMatch(false) &
            setShowSante(false)
          }
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-medal" size={35} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Récompenses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            setShowSante(!sante) &
            setShowMatch(false) &
            setShowRecompense(false)
          }
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={35}
              color="white"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Santé</Text>
        </TouchableOpacity>
      </View>

      {match ? (
        <View>
          <View style={styles.cardsWrapper}>
            <View
              style={{ flexDirection: "row", marginLeft: 45, marginTop: -10 }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    justifyContent: "flex-start",
                    color: "orange",
                    fontSize: 40,
                  }}
                >
                  3 <Text style={{ color: "white" }}>- 1</Text>
                </Text>
                <Text style={{ marginLeft: 5, color: "#28D4A2", fontSize: 20 }}>
                  Victoire
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    justifyContent: "flex-end",
                    color: "white",
                    fontSize: 27,
                    marginTop: 5,
                  }}
                >
                  25/08/2021
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginTop: 12,
                    marginLeft: 45,
                  }}
                >
                  le five
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}

      {sante ? (
        <View style={styles.cardsWrapper}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ flex: 1, marginLeft: 13 }}>
              <Image
                source={require("../assets/cookies.png")}
                style={{ resizeMode: "contain", height: 41, width: 200 }}
              ></Image>

              <Text
                style={{
                  width: 350,
                  textAlign: "center",
                  marginTop: 15,
                  color: "white",
                }}
              >
                Vous avez dépensé l'équivalent de 5 cannettes de coca ou 1 menu
                fast-food
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: 70 }}>
              <Text
                style={{
                  justifyContent: "flex-end",
                  color: "white",
                  fontSize: 20,
                }}
              >
                555 calories{" "}
              </Text>
            </View>
          </View>
        </View>
      ) : null}

      {recompense ? (
        <View>
          <View style={styles.cardsWrapper}>
            <View style={{ flexDirection: "row", marginLeft: 20 }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require("../assets/chrono.png")}
                  style={{ resizeMode: "contain", height: 41, width: 50 }}
                ></Image>
                <Text style={{ marginLeft: -30, color: "white", fontSize: 18 }}>
                  Droit au but
                </Text>
              </View>
              <View style={{ flex: 1, marginRight: 15 }}>
                <Image
                  source={require("../assets/ballonfeuu.png")}
                  style={{
                    resizeMode: "contain",
                    height: 41,
                    width: 130,
                    marginRight: 50,
                  }}
                ></Image>
                <Text style={{ color: "white", fontSize: 18 }}>Tir cannon</Text>
              </View>
              <View style={{ flex: 1, marginRight: 1 }}>
                <Image
                  source={require("../assets/champion.png")}
                  style={{ resizeMode: "contain", height: 41, width: 120 }}
                ></Image>
                <Text style={{ color: "white", fontSize: 18, marginLeft: 17 }}>
                  Champion
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}

      <View style={{ marginTop: -10 }}>
        <Animatable.View
          style={[
            styles.footer,
            {
              backgroundColor: "#1C1C1E",
            },
          ]}
          animation="fadeInUpBig"
        >
          <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
            <Text style={styles.textneww}>Statistiques globales</Text>
          </TouchableOpacity>

          <Swiper
            dot={
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.3)",
                  width: 7,
                  height: 7,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: "orange",
                  width: 7,
                  height: 7,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            paginationStyle={{
              top: 180,
              color: "orange",
            }}
            autoplay={true}
            style={styles.wrapper}
            showsButtons={false}
            nextButton={<Text style={styles.nextButton}>›</Text>}
            prevButton={<Text style={styles.prevButton}>‹</Text>}
          >
            <View style={styles.slide1}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: 1 }}>
                  <MaterialCommunityIcons
                    name="map-marker-distance"
                    size={30}
                    style={{ height: 50, width: 150, marginLeft: 80 }}
                    color="white"
                  />

                  <Text
                    style={{
                      width: 350,
                      textAlign: "center",
                      marginTop: 15,
                      color: "white",
                    }}
                  >
                    Vous avez couru l'équivalent de 50 terrains de Football
                  </Text>
                </View>
                <View style={{ flex: 1, marginRight: 70 }}>
                  <Text
                    style={{
                      justifyContent: "flex-end",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {total && total.Distance} mètres
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "orange",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Distance parcourue
              </Text>
            </View>
            <View style={styles.slide2}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: 1 }}>
                  <MaterialCommunityIcons
                    name="cookie"
                    size={35}
                    style={{ height: 50, width: 150, marginLeft: 80 }}
                    color="white"
                  />

                  <Text
                    style={{
                      width: 350,
                      textAlign: "center",
                      marginTop: 15,
                      color: "white",
                    }}
                  >
                    Vous avez dépensé l'équivalent de 56 cannettes de coca ou 23
                    menus fast-food
                  </Text>
                </View>
                <View style={{ flex: 1, marginRight: 70 }}>
                  <Text
                    style={{
                      justifyContent: "flex-end",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {total && total.Calories} Calories{" "}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "orange",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Calories perdues
              </Text>
            </View>

            <View style={styles.slide3}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: 1 }}>
                  <Ionicons
                    name="ios-football"
                    size={35}
                    style={{ height: 50, width: 150, marginLeft: 80 }}
                    color="white"
                  ></Ionicons>

                  <Text
                    style={{
                      width: 350,
                      textAlign: "center",
                      marginTop: 15,
                      color: "white",
                    }}
                  >
                    Vous avez effectué 22 dribbles durant tous vos matchs
                  </Text>
                </View>
                <View style={{ flex: 1, marginRight: 70 }}>
                  <Text
                    style={{
                      justifyContent: "flex-end",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {total && total.Dribbles} Dribbles{" "}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "orange",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Dribbles effectués
              </Text>
            </View>

            <View style={styles.slide3}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: 1 }}>
                  <MaterialCommunityIcons
                    name="target"
                    size={35}
                    style={{ height: 50, width: 150, marginLeft: 80 }}
                    color="white"
                  />

                  <Text
                    style={{
                      width: 350,
                      textAlign: "center",
                      marginTop: 15,
                      color: "white",
                    }}
                  >
                    Vous avez marqué 23 buts durant tous vos matchs
                  </Text>
                </View>
                <View style={{ flex: 0.8, marginRight: 70 }}>
                  <Text
                    style={{
                      justifyContent: "flex-end",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {/* total && {total.Buts}*/} 23 Buts{" "}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "orange",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Buts marqués
              </Text>
            </View>

            <View style={styles.slide1}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: 1 }}>
                  <MaterialCommunityIcons
                    name="run-fast"
                    size={30}
                    style={{ height: 50, width: 150, marginLeft: 80 }}
                    color="white"
                  />

                  <Text
                    style={{
                      width: 350,
                      textAlign: "center",
                      marginTop: 15,
                      color: "white",
                    }}
                  >
                    Vous avez couru l'équivalent de 55 terrains de Football
                  </Text>
                </View>
                <View style={{ flex: 2, marginLeft: 15 }}>
                  <Text
                    style={{
                      justifyContent: "flex-end",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {total && total.accelerations} Accelérations{" "}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "orange",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Accelerations effectuées
              </Text>
            </View>
          </Swiper>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25282d",
  },
  sliderContainer: {
    height: 200,
    width: "100%",
    marginTop: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  sliderContainerr: {
    height: 200,
    width: "100%",
    marginTop: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: { height: 150 },

  slide: {
    flex: 0.5,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
  },
  fortext: {},
  nextButton: {
    fontSize: 50,
    color: "orange",
    marginBottom: 45,
  },

  prevButton: {
    fontSize: 50,
    color: "orange",
    marginBottom: 45,
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
  categoryIcon3: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "blue" /* '#FF6347' */,
    borderRadius: 50,
  },
  textnew: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  textneww: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  sliderImage: {
    height: "105%",
    width: "110%",
    alignSelf: "center",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
  },

  sliderImage2: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  trone: {
    height: "110%",
    width: "110%",
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "orange" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "white",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
  title: {
    color: "#05375a",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  text: {
    color: "white",
    marginTop: 5,
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 15,
  },
});
