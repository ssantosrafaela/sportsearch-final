import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export default function Evento(props) {
  const nav = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => alert("vamo gremio")}>
          <View style={styles.boxEvento}>
            <View style={styles.titleEvento}>
              <Text>{props.nomeEvento}</Text>
            </View>
            
            <View style={styles.pessoas}>
              <Ionicons name="person" size={15} color="white" />
              <Text>{props.atualPessoas}/{props.totalPessoas}</Text>
            </View>

            <View>
                <MaterialIcons name = "place" size={15} color="white"/>
                <Text>{props.localEvento}</Text>
            </View>

            <View>
                <FontAwesome name="dollar" size={15} color="white"/>
                <Text>{props.valorEvento}</Text>
            </View>

          </View>
        </TouchableWithoutFeedback>
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
  },
  texto: {
    color: "white",
    fontSize: 20,
  },
  boxEvento: {
    width: "85%",
    height: "25%",
    borderRadius: 15,
    backgroundColor: "#EF3006",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  pessoas:{
    justifyContent:'flex-start',
    alignItems: 'flex-start'
  }
});
