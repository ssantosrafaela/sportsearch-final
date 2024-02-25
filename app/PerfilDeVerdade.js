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
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
                  source={require("../assets/calamidade.png")}
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

                <View style={{position: 'absolute', left: 210, top: 40}}>
                    <View style={{flexDirection: 'row', backgroundColor: '#273854', borderRadius: 5, padding: 5}}>
                  <TouchableOpacity>
                    <Text style ={{marginRight: 4, fontSize: 16, color: 'white', textShadowColor: "#EF3006",
    textShadowRadius: 4,}}> 0 amigos</Text>
               
                  </TouchableOpacity>
                  <TouchableOpacity>
               
                    <Text style ={{marginRight: 4, fontSize: 16, color: 'white', textShadowColor: "#EF3006",
    textShadowRadius: 4,}}> 0 seguidores</Text>
      
                  </TouchableOpacity>
                  </View>
                </View>
               
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.nome}>
                  {textProfile.name}
                </Text>
                <Text style={{alignSelf: 'center', marginLeft: 5, color: 'white', textShadowColor: "#EF3006",
    textShadowRadius: 4,}}>Ela/dela</Text> 
                </View>
              </View>
             
              <View style={styles.localizaaipapaizinho}>
                <MaterialIcons name="location-on" size={24} color="white" style={{ textShadowColor: "#EF3006",
    textShadowRadius: 4,}} />
                <Text style={styles.localizacao}>Porto, PORTUGAL</Text>
              </View>

              <View style={styles.bio}>
              <Text style={{fontSize: 15, color: 'white',  textShadowColor: "#EF3006",
    textShadowRadius: 4,}}>Aqui ta a biografia da pessoa, que pode ser bem grande e tal, mas por enquanto é só isso mesmo.
              </Text>
              </View>
            </View>

            <View style={{ position: 'absolute', left: 270, top: 167  }}>
              <TouchableOpacity
                style={{padding: 10, borderRadius: 10, backgroundColor: '#EF3006', width: 100, alignItems: 'center', justifyContent: 'center'}}
                onPress={() => nav.navigate("editProfile")}
              >
                <Text style={{ color: "#1d2f4d" }}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>

{/* COLOCAR DUAS VIES UMA DO LADO DA OUTRA SE NAO A ESTILIZAÇÃO VAI FICAR ERRADA

AMANHA FINALIZAR O PERFIL E TERMINAR DE ESTILIZAR A HOME

TERMINAR A CONCLUSAO

TERMINAR METODOLOGIA

COLOCAR RESULTADOS

PERGUNTAR PRO VINICIUS SE AS TELAS QUE EU NAO FIZ E BOTEI NOS RESULTADOS ATE SEGUNDA EU POSSO TERMINAR NESSA ULTIMA SEMANA ANTES DE APRESENTAR
TIPO FAZER TELA DE EDIT PROFILE, ACESSIBILIDADE, ETC E TAL*/}
<View>
<View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, borderTopWidth: 1, borderColor: '#ef3006'}}>
<TouchableOpacity>
  <Text style={{textShadowColor: "#EF3006",
    textShadowRadius: 4, color: 'white', fontSize: 19, marginRight: 8}}>Eventos Participados</Text>
</TouchableOpacity>
<TouchableOpacity>
  <Text style={{textShadowColor: "#EF3006",
    textShadowRadius: 4, color: 'white', fontSize: 19, marginRight: 8}}>Eventos Criados</Text> 
</TouchableOpacity>
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
    width: "105%",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#EF3006",

  },
  iconImg: {
    height: 135,
    width: 135,
    borderRadius: 999,
    borderColor: "#EF3006",
    borderWidth: 1.4,
    marginTop: -40,
    marginBottom: 10,
    marginLeft: 50,
    backgroundColor: "#273854"
  },
  nome: {
    color: "white",
    fontSize: 21,
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
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },
  bio:{
    backgroundColor: "#273854",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EF3006",
    padding: 15,
  margin: 10,
    marginTop: 10,
    marginBottom: 20,
    height: 'auto',
    width: '90%',
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 20,
  
  
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
