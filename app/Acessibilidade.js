import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Acessibilidade() {
  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  if (fontsLoaded) {
    return (
      <>
        <ScrollView
          style={{ width: "100%", height: "100%", backgroundColor: "#1d2f4d" }}
        >
          <View
            style={styles.topBack}
            accessible={true}
            accessibilityLabel="Botão de voltar."
            accessibilityHint="Clique para voltar para a tela de configurações."
          >
            <TouchableOpacity
              onPress={() => nav.navigate("Config")}
              style={styles.back}
            >
              <Ionicons name="arrow-back" color="#fff" size={30} />
            </TouchableOpacity>
          </View>

          <View style={styles.cima}>
            <Text style={styles.formTitle}>Acessibilidade</Text>
          </View>
          <View style={styles.meio}>
            <View
              style={{
                borderWidth: 1,
                padding: 5,
                marginTop: 30,
                backgroundColor: "#273854",
                borderRadius: 10,
                borderColor: "#ef3006",
                
              }}
            >
              <Text style={styles.subtitulo}>
                No momento, o aplicativo possui uma maior acessibilidade para
                pessoas com deficiência visual, com uma ampla descrição de
                imagens e textos explicativos para aqueles necessitados ao
                utilizar as funcionabilidades TalkBack (no Android) e VoiceOver
                (no iPhone).
              </Text>
            </View>
            <View style={{marginTop: 40, marginBottom: 40,}}>
              <Text style={styles.subtitulo}>
            Para mais informações sobre acessibilidade, acesse abaixo os
                Guias de Acessibilidade do seu celular:
              </Text>
<View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-around', marginBottom: 30}}>
              <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.android.com/intl/pt_br/accessibility/");
              }}>
                <MaterialIcons name="android" size={50} color="#fff" style={{ textShadowColor: "#EF3006",
    textShadowRadius: 4,}} />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://support.apple.com/pt-br/guide/iphone/iph3e2e4367/ios");
              }}>
                <MaterialCommunityIcons name="apple-ios" size={50} color="#fff" style={{ textShadowColor: "#EF3006",
    textShadowRadius: 4,}} />
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  cima: {
    backgroundColor: "#1D2F4D",
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  topBack: {
    backgroundColor: "#1d2f4d",
    paddingTop: 50,
  },
  formTitle: {
    color: "#fff",
    fontSize: 70,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
    marginBottom: 10,
  },
  meio: {
    width: "85%",
    backgroundColor: "#1d2f4d",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 130,
    marginTop: -5,
  },
  subtitulo: {
    fontSize: 18,
    color: "white",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 10,
  },
});
