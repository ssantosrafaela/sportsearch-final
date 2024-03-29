import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons, Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { addEventFirestore } from "../connections/firebase-store";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function adicionaEvento() {
  const nav = useNavigation();

  const [local, setLocal] = useState("");
  const [valor, setValor] = useState("");
  const [vagas, setVagas] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [horario, setHorario] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [descricao, setdescricao] = useState("");
  const [nome, setNome] = useState("");

  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [modalidade, setModalidade] = useState("");

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const tryCreateEvent = async () => {
    addEventFirestore(
      nome,
      local,
      cidade,
      estado,
      horario,
      dataEvento,
      vagas,
      valor
    );
    //await AsyncStorage.setItem('user', userCredential.user.uid);
    //tirei atual pessoas, observacoes e valor p testar
  };
  if (fontsLoaded) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={{ width: "100%", height: "100%", backgroundColor: "#1d2f4d" }}
        >
          <View>
            <StatusBar backgroundColor="#1d2f4d" barStyle="light-content" />
            <TouchableOpacity
             accessible={true}
             accessibilityLabel="Botão para voltar para a tela inicial."
             accessibilityHint="Após clicado você será redirecionado a tela inicial."
              style={{ marginTop: 20 }}
              onPress={() => nav.navigate("Home")}
            >
              <Ionicons name="arrow-back" size={40} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.cima} 
          accessible={true}
     accessibilityLabel="Dados do evento."
     accessibilityHint="Logo abaixo possui caixas de texto para informar os dados principais do evento.">
            <Text style={styles.titulo}> Dados do Evento</Text>
          </View>

          <View style={styles.meio}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setNome(text)}
              placeholder="Modalidade"
              placeholderTextColor={"#fff"}
              value={nome}
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setVagas(text)}
              placeholder="Vagas"
              placeholderTextColor={"#fff"}
              value={vagas}
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setLocal(text)}
              placeholder="Endereço"
              placeholderTextColor={"#fff"}
              value={local}
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setHorario(text)}
              placeholder="Horario"
              placeholderTextColor={"#fff"}
              value={horario}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setDataEvento(text)}
              placeholder="Data (dd/mm/aaaa)"
              placeholderTextColor={"#fff"}
              value={dataEvento}
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setCidade(text)}
              placeholder="Cidade"
              placeholderTextColor={"#fff"}
              value={cidade}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEstado(text)}
              placeholder="Estado (sigla)"
              placeholderTextColor={"#fff"}
              value={estado}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setValor(text)}
              placeholder="Valor"
              placeholderTextColor={"#fff"}
              value={valor}
            />
            <TextInput 
              style={styles.input}
              onChangeText={(text) => setdescricao(text)}
              placeholder="Insira uma breve descrição (opcional)"
              placeholderTextColor={"#fff"}
              value={descricao}
            />

          </View>

          <View style={styles.baixo}>
            <TouchableOpacity
              style={styles.adiciona}
              onPress={() => {
                tryCreateEvent();
                nav.navigate("Home");
              }}
            >
              <Text style={styles.txtBotaoAdc}
               accessible={true}
               accessibilityLabel= "Botão para adicionar evento."
               accessibilityHint= "Após clicado você será redirecionado a tela inicial do aplicativo.">Adicionar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cima: {
    alignSelf: "center",
    marginTop: 23,
  },
  baixo: {
    alignSelf: "center",
    marginTop: 20,
  },
  adiciona: {
    padding: 10,
    backgroundColor: "white",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ef3006",
    borderRadius: 10,
  },
  txtBotaoAdc: {
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
  titulo: {
    fontSize: 55,
    color: "#fff",
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 20,
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
    marginBottom: 40,
  },
  subtitulo: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#EF3006",
    width: "60%",
    height: 40,
    marginTop: 15,
    color: "#fff",
    paddingTop: 10,
  },
  meio: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -19
  },
  inputArea: {
    marginTop: 20,
    flexDirection: "row",
  },
  txtBotaoAdc: {
    color: "#ef3006",
    fontSize: 17,
  },
  botao: {
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginBottom: 3,
  },
});
