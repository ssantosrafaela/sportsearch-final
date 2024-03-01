import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Touchable,
  Alert,
} from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Cima from "../components/Cima";
import Baixo from "../components/Baixo";
import { signOutFirebase } from "../connections/firebase-auth";
import { useFonts } from "expo-font";
import { deleteUserStore } from "../connections/firebase-store";

export default function Config() {

  //Função para deslogar chamado nas configurações
  const trySignOut = async () => {
    signOutFirebase();
  }; 
  const createTwoButtonAlert = () =>
    Alert.alert('Deletar Conta', 'Clique "Sim" para deletar sua conta', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => console.log('OK Pressed')},
    ]);

    const TryDeleteUser = () =>{
      deleteUserStore();
    }

  const nav = useNavigation();
     const [fontsLoaded] = useFonts({
     "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
      "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
     });
     if(fontsLoaded){
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
            <View style={{ alignSelf: "center", marginTop: 17 }}>
              <Text style={styles.config}>Configurações</Text>
            </View>

            <View style={styles.titulo}>
              <Text style={styles.texticulo}>Configurações da conta</Text>

              <View style={styles.semitituto}>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons
                      name="person"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Editar Perfil</Text>

                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons
                      name="person-add"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Pedidos de amizade</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>(TryDeleteUser())}>
                  <View style={styles.linhas}>
                    <AntDesign
                      name="deleteuser"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Deletar Conta</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>


              </View>
            </View>

            <View style={styles.titulo}>
              <Text style={styles.texticulo}>Preferência</Text>

              <View style={styles.semitituto}>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons
                      name="lock-closed"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}>
                      {" "}
                      Privacidade da conta
                    </Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => nav.navigate("replacePassConfig")} >
                  <View style={styles.linhas}>
                    <Ionicons
                      name="key"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Alterar senha</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons 
                    name="mail-outline"
                    size={26}
                    color="white"
                    style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Alterar e-mail</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons
                      name="mail-open"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Notificações</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <MaterialIcons
                      name="accessibility"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Acessibilidade</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.titulo}>
              <Text style={styles.texticulo}>Ajuda</Text>

              <View style={styles.semitituto}>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons
                      name="help-circle"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Relatar algum problema</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}  
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.linhas}>
                    <Ionicons
                      name="mail-outline"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                    <Text style={styles.insideTexto}> Enviar feedback</Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={26}
                      color="white"
                      style={styles.botao}
                    />
                  </View>
                </TouchableOpacity>

                </View>
                </View>
            <View style={styles.baixo}>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "#ef3006",
                  borderRadius: 10,
                  width: 120,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                }

                }
                onPress={() => {
                  // trySignOut();
                  // nav.navigate("index");
                  nav.navigate("testedois");
                }}
              >
                <Text style={{ color: "#ef3006", fontSize:22 }}>Sair</Text>
              </TouchableOpacity>


            </View>
          </View>
        </ScrollView>

        <Baixo />
      </KeyboardAvoidingView>
    </>
  );
}else{
  return null;
}

}
const styles = StyleSheet.create({
  config: {
    fontSize: 50,
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
  titulo: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  semitituto: {
    alignSelf: "center",
    marginTop: 7,
    backgroundColor: "#273854",
    borderRadius: 5,
    width: "80%",
  },
  linhas: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  texticulo: {
    alignSelf: "flex-start",
    marginLeft: 40,
    fontSize: 23,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },
  insideTexto: {
    color: "white",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    fontSize: 17,
  },
  botao: {
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },
});
