import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useNavigation } from "expo-router";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { getIdToken } from "firebase/auth";

export default function Evento(props) {
  const nav = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.evento}>
          <Text style={styles.titulo}>{props.nome}</Text>
          <View style={styles.ladoAlado}>
            <Text style={styles.informacao}>{props.atualPessoas}/{props.vagas}</Text>
            <Text style={styles.informacao}>{props.horario}</Text>
          </View>
          <View style={styles.ladoAlado}>
            <Text style={styles.informacao}>{props.local} - {props.cidade}, {props.estado}</Text>
            <Text style={styles.informacao}>{props.valor}</Text>
          </View>
          <View style={styles.ladoAlado}>
            <Text style={styles.informacao}>
              {props.observacoes}
            </Text>
          </View>
          
        </View>
        <View style={styles.participacao}>
          <TouchableOpacity>
          <Text style={styles.textoParticipar}>Participar</Text>
            <Ionicons name="person" size={50} color="white" style={styles.icone}/>
          </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'left', justifyContent: 'center', alignItems: 'center', marginTop: -15,marginLeft: 25, borderLeftWidth: 2, borderBottomWidth: 2,borderRightWidth:2, borderBottomLeftRadius:10, borderBottomRightRadius: 10, borderColor: '#EF3006', width: 'auto', padding: 5 }}>
          <MaterialCommunityIcons name="account" size={24} color="white" />
        <Text style={{color: 'white'}}>Criado por getName</Text>
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d2f4d",
    flexDirection: "row",
    
  },
  evento: {
    width: "70%",
    height: 150,
    justifyContent: "center",
    backgroundColor: "#1d2f4d",
   // borderRadius: 10,
   marginTop: 15,
   marginBottom: 15,
    padding: 10,
   // borderWidth: 2,
    borderColor: "#EF3006",
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:0,
    borderRightWidth: 2,
  },
  informacao: {
    marginTop: 7,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    //alignItems: "row",
  },
  ladoAlado: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  titulo: {
    marginTop: -18,
    fontSize: 24,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    alignSelf: "center",
  },
  participacao: {
    borderColor: '#ef3006',
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    height: 150,
    justifyContent: "center",
    backgroundColor: "#273854",
  },
  textoParticipar: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    padding: 5,
  //  marginBottom: 30,

  },
  icone: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 20
  }
});
