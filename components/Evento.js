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
          <View
            style={styles.containerTitulo}
          >
            <Text style={styles.titulo}>{props.nome}</Text>
          </View>
          <View style={styles.ladoAlado}>
            <Text style={styles.informacao}>{props.vagas}</Text>
            <Text style={styles.informacao}>{props.dataEvento}</Text>
          </View>
          <View style={styles.ladoAlado}>
            <Text style={styles.informacao}>{props.local}</Text>
            <Text style={styles.informacao}>{props.horario}</Text>
          </View>
          <View style={styles.ladoAlado}>
            <Text style={styles.informacao}>
              {props.cidade}, {props.estado}
            </Text>
            <Text style={styles.informacao}>{props.valor}</Text>
          </View>
          <View
            style={styles.containerObs}
          >
            <Text
              style={styles.textoObs}
            >
              Observação...
            </Text>
          </View>
        </View>
        <View style={styles.participacao}>
          <TouchableOpacity>
            <View
              style={{
                marginBottom: 0,
                borderBottomWidth: 2,
                borderRadius: 5,
                borderColor: "#ef3006",
              }}
            >
              <Text style={styles.textoParticipar}>Participar</Text>
            </View>
            <Ionicons
              name="person"
              size={35}
              color="white"
              style={styles.icone}
            />
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              padding: 5,
              right: 34,
              top: 98,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "#ef3006",
             
            }}
          >
            <TouchableOpacity>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              padding: 5,
              right: -2,
              top: 98,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "#ef3006",
              borderBottomRightRadius: 10,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="create" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "left",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -15,
          marginLeft: 23.5,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderRightWidth: 2,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "#EF3006",
          width: "auto",
          padding: 5,
        }}
      >
        <MaterialCommunityIcons name="account" size={24} color="white" />
        <Text style={{ color: "white" }}>Criado por usuário</Text>
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
    height: 240,
    //  justifyContent: "center",
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
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRightWidth: 2,
  },
  informacao: {
    marginTop: 14,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    // alignSelf: "center",
    //alignItems: "row",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },
  ladoAlado: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    alignSelf: "center",
  },
  participacao: {
    borderColor: "#ef3006",
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopRightRadius: 10,
    height: 100,
    justifyContent: "center",
    marginBottom: 140,
  },
  textoParticipar: {
    color: "white",
    fontSize: 20,
    padding: 10,
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
    marginTop: 10,
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },
  containerTitulo:{
      marginTop: 3,
      borderBottomWidth: 2,
      borderRadius: 15,
      width: "auto",
      borderWidth: "auto",
      borderColor: "#ef3006",
  },
  containerObs:{
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    marginTop: 17,
    borderRadius: 10,
    borderColor: "#ef3006",
    alignItems: "flex-start",
    width: "90%",
  },
  textoObs:{
    color: "white",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    fontSize: 13,
  }
});
