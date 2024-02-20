import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import Cima from "../components/Cima";
import Baixo from "../components/Baixo";

import { getProfileFromUid } from "../connections/firebase-store";
import { auth } from "../connections/firebase-auth";
import Adiciona from "../components/Adiciona";

export default function PerfilDeVerdade() {
  const nav = useNavigation();

  useEffect(() => {
    fetchProfile();
  }, []);

  const [textProfile, setProfile] = useState("");

  const fetchProfile = async () => {
    const uid = auth.currentUser.uid;
    const profile = await getProfileFromUid(uid);
    setProfile(profile);
    console.log(profile);
  };

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });
  if (fontsLoaded) {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.containerScrollView}
        >
          <Cima />
          <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.cima}>
              <View style={{ width: "100%" }}>
                <Image
                  source={require("../assets/adicionar.png")}
                  resizeMode="cover"
                  style={styles.headerImg}
                />
              </View>

              <View>
                <Image
                  source={require("../assets/billie.png")} //billie.png funciona e fica bom
                  resizeMode="cover"
                  style={styles.iconImg}
                />
             {/* <TouchableOpacity style={styles.addFotoBotao}>
                <MaterialIcons  name="add-a-photo" size={24} color="white" style={styles.addfoto}/>
                </TouchableOpacity>  */}
                <Text style={styles.nome}>
                  ERRODOFIREBASE{textProfile.nome}
                </Text>
              </View>

              <View style={styles.localizaaipapaizinho}>
                <MaterialIcons name="location-on" size={24} color="white" />
                <Text style={styles.localizacao}>PORISSONAOAPARECE</Text>
              </View>
            </View>

          </ScrollView>
          <Adiciona/>
          <Baixo />
        </KeyboardAvoidingView>
      </>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  containerScrollView: {
    flex: 1,
    backgroundColor: "#1d2f4d",
  },
  ScrollViewStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1d2f4d",
  },
  headerImg: {
    height: 180,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 5,
  },
  iconImg: {
    height: 135,
    width: 135,
    borderRadius: 999,
    borderColor: "#273859",
    borderWidth: 3,
    marginTop: -40,
    marginBottom: 10,
    alignSelf: "center",
    backgroundColor: "#273854"
  },
  nome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  localizaaipapaizinho: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center",
  },
  localizacao: {
    fontSize: 16,
    marginLeft: 4,
    color: "white",
  },
//   addfoto: {
//     position: "absolute",
//     bottom:12,
//     right: 132,
   
//     padding: 5,
//     borderWidth: 2,
//     borderColor: "white",
//     borderRadius: 20
//   },
//   addFotoBotao:{
//     backgroundColor: "#EF3006",
//   }
});
