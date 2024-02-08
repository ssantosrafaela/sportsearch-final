import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  Button
} from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PesquisaTop from "../components/PesquisaTop";
import Baixo from "../components/Baixo";
import Adiciona from "../components/Adiciona";
import Evento from "../components/Evento";
import { getEventos } from "../connections/firebase-store";
import { auth } from "../connections/firebase-auth";
import Swiper from "react-native-swiper";
import { getProfileFromUid } from "../connections/firebase-store";

import Cima from "../components/Cima";

export default function Home() {
  const fetchEventos = async () => {
    const eventos = await getEventos();
    console.log(eventos);
  };

  useEffect(() => {
    console.log("entrou no useEffect");
    fetchEventos();
    console.log("saiu do useEffect");
  }, []);

  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const [textPesquisa, setPesquisa] = useState("");

  if (fontsLoaded) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.containerScrollView}
      >
        <Cima />

        <ScrollView
          style={{ width: "100%", height: "100%", backgroundColor: "#1d2f4d" }}
        >
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1d2f4d",
              borderBottomWidth: 3,
              borderColor: "#EF3006",
              marginRadius: 10,
            }}
          >
            {/* <View style={styles.virar}>
              <Text style={styles.titulo}>Modalidades</Text>
            </View> */}
            <Swiper style={styles.wrapper} showsButtons={true} >
              <View style={styles.slide}>
                <Image
                  source={require("../assets/djavan.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../assets/1.png")}
                  style={styles.image}
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.meio}>
            <Text style={styles.titulo}>Eventos Disponíveis</Text>
          </View>  

          <View style={styles.baixo}></View>
        </ScrollView>

        <Adiciona />
        <Baixo />
      </KeyboardAvoidingView>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2F4D",
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: "#1D2F4D",
  },
  cima: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  meio: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "#d2f",
  },
  titulo: {
    fontSize: 24,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 20,
    marginRight: 160,
  },
  baixo: {
    backgroundColor: "#1D2F4D",
  },
  ImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  virar: {
    marginTop: 0,
   // marginBottom: -310,
    marginRight: 50
  },
  image: {
    width: 270,
    height: 170,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  wrapper: {
    height: 200,
    marginTop: 8,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },

});
