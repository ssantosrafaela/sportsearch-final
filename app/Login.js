import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
//import styles from "../components/StyleLogin";
import { Ionicons } from "@expo/vector-icons";
import {
  emailLogin,
  auth,
  createUser,
  signOutFirebase,
} from "../connections/firebase-auth";

// import "expo-dev-client";

export default () =>  {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });
  const [textUser, setUser] = useState("rafaelasantos@gmail.com");
  const [textPassword, setPassword] = useState("123456");
  const [hidePass, setHidePass] = useState(true);

  const tryLogin = async () => {
    const userCredential = await emailLogin(textUser, textPassword);
    if (userCredential) {
      console.log(userCredential.user);
      nav.navigate("Home");
    } else {
      alert("erro");
    }
  };

  const tryCreateUser = async () => {
    createUser(textUser, textPassword, "Nome da pessoa");
  };

  const trySignOut = async () => {
    signOutFirebase();
  };
  const printAuth = () => {
    console.log(auth.currentUser);
  };


  if (fontsLoaded) {
    return (
      <>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ backgroundColor: "#1D2F4D" }}
          >
            <View style={styles.topBack}>
              <TouchableOpacity
                onPress={() => nav.navigate("index")}
                style={styles.back}
              >
                <Ionicons name="arrow-back" color="#fff" size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.cima}>
              <Text style={styles.titulo}>Sport Search</Text>
              <Text style={styles.subtitulo}>Entre para continuar</Text>
            </View>
            <View style={styles.meio}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setUser(e)}
                value={textUser}
                placeholder="E-mail"
                placeholderTextColor={"#fff"}
                keyboardType="email-address"
              />

              <View style={styles.inputArea}>
                <TextInput
                  style={styles.inputTeste}
                  placeholder="Insira sua senha"
                  placeholderTextColor={"#fff"}
                  value={textPassword}
                  onChangeText={(t) => setPassword(t)}
                  secureTextEntry={hidePass}
                />
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => setHidePass(!hidePass)}
                >
                  {hidePass ? (
                    <Ionicons name="eye" color="#fff" size={25} />
                  ) : (
                    <Ionicons name="eye-off" color="#fff" size={25} />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.botaoEntrar}
                onPress={() => {
                  if (textUser == "" || textPassword == "") {
                    alert("Preencha os campos");
                  } else {
                    tryLogin();
                  }
                }}
              >
                <Text style={styles.textoBotaoEntrar}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.baixo}>
              <Text 
              style={styles.textoBaixo}
              onPress = {() => nav.navigate("replacePass")}>Esqueceu a senha?</Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2F4D",
    flex: 1,
  },
  cima: {
    width: "100%",
    height: "45%",
    backgroundColor: "#1D2F4D",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  meio: {
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 130,
    marginTop: -5
  },
  baixo: {
    backgroundColor: "#1D2F4D",
    alignItems: "center",
  },
  titulo: {
    fontSize: 75,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    fontSize: 20,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    width: 270,
    height: 40,
    borderRadius: 10,
    borderColor: "#EF3006",
    marginBottom: 10,
    paddingLeft: 10,
    color: "#fff",
    fontSize: 18, 
  },
  inputArea: {
    flexDirection: "row",
    width: 270,
    backgroundColor: "#1D2F4D",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EF3006",
    height: 40,
    alignItems: "center",
  },
  inputTeste: {
    width: 220,
    height: 50,
    color: "#fff",
    padding: 10,
    fontSize: 18,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoEntrar: {
    borderWidth: 1,
    borderRadius: 3,
    width: 120,
    height: 35,
    marginTop: 20,
    borderColor: "#EF3006",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoEntrar: {
    color: "#EF3006",
    fontSize: 18,
  },
  botaoEnd: {
    position: "absolute",
    top: 120,
    right: 65,
  },
  textoBaixo: {
    marginBottom: 20,
    color: "#fff",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    fontSize: 17,
    textShadowOffset: { width: 4, height: 4 },
  },
  back: {
    JustifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#1D2F4D',
    marginRight: 40,
    paddingTop: 45,
    paddingLeft: 10,
},
 topBack:{
  backgroundColor: '#1D2F4D',
 },
 scrollview:{
  backgroundColor: '#1D2F4D',
  marginTop: 30,
 },
 scrollviewContainer:{
  backgroundColor: '#1D2F4D',
 },
});