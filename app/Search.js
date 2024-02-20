import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Baixo from "../components/Baixo";
import PesquisaTop from "../components/PesquisaTop";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Cima from "../components/Cima";

export default function Home() {
  const [textPesquisa, setPesquisa] = useState("");
  const nav = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerScrollView}
    >
      <Cima />
      <ScrollView
        style={{ width: "100%", height: "100%", backgroundColor: "#1d2f4d" }}
      >

        <View style={styles.container}>
          <TextInput 
          placeholder="Pesquisar" 
           placeholderTextColor={'#fff'}
           placeholderColor={'#fff'}
           style={styles.pesquisa} />
           <View>
          <TouchableOpacity style={styles.search}>
            <Ionicons name="search" size={29} color="white" />
            </TouchableOpacity>
            </View>
        </View>

      </ScrollView>
      <Baixo />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerScrollView: {
    flex: 1,
    backgroundColor: "#1d2f4d",
  },
  container:{
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  pesquisa: {
    borderWidth: 1,
    borderColor: "#EF3006",
    color: "white",
    width: 300,
    height: 40,
    paddingLeft: 10,
   // marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
    
  },
});
