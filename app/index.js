import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation, router } from "expo-router";

export default function Open() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  return fontsLoaded ? (
    <>
      <View style={styles.cima}>
        <Text style={styles.titulo}>Sport Search</Text>
        <Text style={styles.subtitulo}>
          A inclusão no esporte através de um aplicativo.
        </Text>
      </View>
      <View style={styles.meio}>
        <TouchableOpacity
          style={styles.botao}
          // onPress={() => nav.navigate("Login")}
          onPress={() => nav.navigate("Login")}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => nav.navigate("Register")}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.baixo}>
        <Text style={styles.textoBaixo}>created by </Text>
        <Text
          style={styles.url}
          onPress={() => {
            Linking.openURL("https://www.instagram.com/ssantosrafaela/");
          }}
        >
          @ssantosrafaela
        </Text>
      </View>
    </>
  ) : (
    <View />
  );
}

const styles = StyleSheet.create({
  cima: {
    flex: 1.6,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
  },
  meio: {
    flex: 1,
    backgroundColor: "#1D2F4D",
    alignItems: "center",
  },
  baixo: {
    flex: 0.5,
    backgroundColor: "#1D2F4D",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 70,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    marginTop: 190,
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },
  botao: {
    flex: "start",
    borderWidth: 1.3,
    width: 250,
    height: 40,
    borderRadius: 5,
    borderColor: "#EF3006",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textoBotao: {
    color: "#EF3006",
    fontSize: 18,
  },
  textoBaixo: {
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    fontSize: 18,
  },
  url: {
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    fontSize: 15,
  },
});
