
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity as TO } from "react-native";
import Entrada from "../../../components/Entrada";
import { useNavigation } from "expo-router";

export default function SingUp() {
  const nav = useNavigation();
  const [textName, setName] = useState(" ");
  const [textData, setData] = useState(" ");
  const [textPhone, setPhone] = useState(" ");
  const [textCPF, setCPF] = useState(" ");
  const [textStd, setStd] = useState(" ");
  const [textCity, setCity] = useState(" ");
  const [textGenre, setGenre] = useState(" ");

  const next = "Próximo";

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Digite seus dados para se cadastrar</Text>
        </View>

        <View>
          <Entrada label= "Nome Completo" setValue={setName} value={textName} />
          <Entrada
            label="Data de Nascimento"
            setValue={setData}
            value={textData}
          />
          <Entrada label = "Telefone" setValue={setPhone} value={textPhone} />
          <Entrada label = "CPF" setValue={setCPF} value={textCPF} />
          <Entrada label = "Estado" setValue={setStd} value={textStd} />
          <Entrada label = "Cidade" setValue={setCity} value={textCity} />
          <Entrada label = "Gênero" setValue={setGenre} value={textGenre} />
        </View>

        <View>
          <TO style={styles.to} onPress = {() => nav.navigate("SingUpTwo")}>
            <Text>{next}</Text>
          </TO>
        </View>

        <View>
          <Text style={styles.text}>Já se cadastrou? </Text><TO onPress={() => nav.navigate("Picker")}><Text>Entrar</Text></TO>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83A1EF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
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
});
