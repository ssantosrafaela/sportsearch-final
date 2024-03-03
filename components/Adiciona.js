import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Adiciona(props) {
  const nav = useNavigation();
  return (
    <>
    <View>
      <View>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Botão para criar eventos"
          accessibilityHint="Após clicado você será redirecionado a tela de criação de eventos esportivos."
          style={styles.button}
          onPress={() => nav.navigate("adicionaEvento")}
        >
          <Entypo
            name="plus"
            size={43}
            color="#1d2f4d"
            style={styles.buttonInside}
          />
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  button: {
    borderWidth: 2,
    borderRadius: 999,
    borderColor: "#EF3006",
    flexDirection: "row",
    backgroundColor: "#EF3006",
    position: "absolute",
    bottom: 30,
    right: 47,
  },
  buttonInside: {
    padding: 10,
  },
});
