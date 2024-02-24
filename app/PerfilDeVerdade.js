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
    if (profile) {
      setProfile(profile);
    }
    console.log(" PROFILEEEEEEEEE" ,profile);
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
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.nome}>
                  {textProfile.name}
                </Text>
                <Text style={{alignSelf: 'center', marginLeft: 5, color: 'white'}}>Ela/dela</Text> 
                </View>
              </View>

              <View style={styles.localizaaipapaizinho}>
                <MaterialIcons name="location-on" size={24} color="white" />
                <Text style={styles.localizacao}>Porto, PORTUGAL</Text>
              </View>

              <View style={styles.bio}>
              <Text>Aqui ta a biografia da divandinha</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={styles.editarPerfil}
                onPress={() => nav.navigate("editProfile")}
              >
                <Text style={{ color: "white" }}>Editar Perfil</Text>
                </TouchableOpacity>
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
    borderColor: "#EF3006",
    borderWidth: 1.4,
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
    //backgroundColor: "red",
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  localizacao: {
    fontSize: 16,
    marginLeft: 4,
    color: "white",
  },
  bio:{
    backgroundColor: "#273854",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EF3006",
    padding: 10,
    margin: 10,
    marginTop: 10,
    marginBottom: 20,
  
  }
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
