import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity as TO } from "react-native";
import Entrada from "../components/Entrada";
import Checkbox from "expo-checkbox";
import { useNavigation } from "expo-router";

export default function SingUp2() {

  const nav = useNavigation();
  const [textEmail, setEmail] = useState(" ");
  const [textConfirmEmail, setConfirmEmail] = useState(" ");
  const [textUser, setUser] = useState(" ");
  const [textPassword, setPassword] = useState(" ");
  const [textConfirmPassword, setConfirmPassword] = useState(" ");

  const [isSelected, setSelection] = useState(false);

  const register = "Cadastrar";
  return (
    <>
      <View style={styles.container}>
        <Entrada
          label="Digite seu e-mail"
          setValue={setEmail}
          value={textEmail}
        />
        <Entrada
          label="Digite sua senha"
          setValue={setPassword}
          value={textPassword}
        />

        <Entrada label="Usuário" setValue={setUser} value={textUser} />

        <Entrada
          label="Confirme seu e-mail"
          setValue={setConfirmEmail}
          value={textConfirmEmail}
        />
        <Entrada
          label=" "
          setValue={setConfirmPassword}
          value={textConfirmPassword}
        />

        <View>
          <TO>
            <Text>{register}</Text>
          </TO>

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text>Li e aceito os termos de condições</Text>
          </View>

          <View style={styles.text}>
            <Text>Já se cadastrou?</Text>
            <TO onPress={() => nav.navigate("index")}>
              <Text>Entre</Text>
            </TO>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83A1EF",
    justifycontent: "center",
    alignItems: "center",
  },
  to: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    width: 60,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
