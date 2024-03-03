import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';



export default function EditProfile(){
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        'Archivo_ExtraCondensed-BlackItalic.ttf': require('../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf'),
        'Archivo_Condensed-SemiBoldItalic.ttf': require('../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf'),
    });
    if (fontsLoaded){
    return(
        <>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.containerScrollView}
        >
         
          <ScrollView style={styles.ScrollViewStyle}>
         <TouchableOpacity
            onPress={() => nav.navigate("PerfilDeVerdade")}
            style={{marginTop: 18,}}
          >
            <Ionicons name="arrow-back" color="#fff" size={30} />
          </TouchableOpacity>
        
            <View style={styles.cima}>
              <View style={{ width: "100%" }}>
                <Image
                  source={require("../assets/uai.png")}
                  resizeMode="cover"
                  style={styles.headerImg}
                />
              </View>

              <View>
                <Image
                  source={require("../assets/billie.png")}
                  resizeMode="cover"
                  style={styles.iconImg}
                />

               
                </View>

               
              </View>

             
          
           
            
           </ScrollView>
        
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
    backgroundColor: '#273854'
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
    backgroundColor: "#273854",
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
  bio: {
    backgroundColor: "#273854",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EF3006",
    padding: 15,
    margin: 10,
    marginTop: 10,
    marginBottom: 20,
    height: "auto",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
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