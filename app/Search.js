import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Baixo from "../components/Baixo";
import PesquisaTop from "../components/PesquisaTop";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [textPesquisa, setPesquisa] = useState("");
  const nav = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerScrollView}
    >
      <SafeAreaView style={styles.teste}>
        <ScrollView>
          <View style={styles.container}>
            <PesquisaTop
              text={"Nome"}
              label="Pesquisar"
              setValue={setPesquisa}
              value={textPesquisa}
            />


            <View style={styles.baixo}>
              <Baixo />
            </View>


          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2F4D",
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: "#1D2F4D",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  teste: {
    flex: 1,
    backgroundColor: "#1D2F4D",
  },
  baixo: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(3, 48, 252, 0.1)",
  },
});
