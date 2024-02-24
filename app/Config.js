import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Cima from "../components/Cima";
import Baixo from "../components/Baixo";
import { signOutFirebase } from "../connections/firebase-auth";

export default function Config() {
  const trySignOut = async () => {
    signOutFirebase();
  };

  const nav = useNavigation();
  //   const [fontsLoaded] = useFonts({
  //     "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
  //     "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  //   });
  return (
    <>
    <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.containerScrollView}
        >
      <Cima />

      <ScrollView
        style={{ width: "100%", height: "100%", backgroundColor: "#1d2f4d" }}
      >
        <View>
          <View style = {{alignSelf: 'center', marginTop: 17}}>
            <Text style={styles.config}>Configurações</Text>
          </View>

          {/* <View>
            <Text>Preferências </Text>
       
          </View>


          <View style={styles.titulao}>
            <Text style={styles.titulinho}>Aplicativo</Text>
         
          </View>
        </View>

        <View style={styles.titulao}>
  <Text style={styles.titulinho}>Ajuda</Text> 

            <View style={styles.linhas}>
              <Ionicons name="help-circle" size={24} color="white" />
              <Text> Relatar algum problema</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
            <View style={styles.linhas}>
              <Ionicons name="mail-outline" size={24} color="white"/>
              <Text> Enviar feedback</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
          </View>
*/}
        <View style={styles.baixo}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#ef3006",
              width: "auto",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              trySignOut();
              nav.navigate("index");
            }}
          >
            <Text style={{ color: "#ef3006" }}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      </ScrollView>

      <Baixo />
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  config: {
    fontSize: 55,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  containerScrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1d2f4d",
  },
  titulao: {
    justifyContent: "center",
    alignItems: "center",
  },
  titulinho: {
    backgroundColor: "red",
    color: "white",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 10
  },
  linhas: {
    flexDirection: "row",
    alignItems: "center",
  },
});
