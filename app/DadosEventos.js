import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { KeyboardAvoidingView } from "react-native";
import { addEventFirestore } from "../connections/firebase-store";
import TInputEvento from "../components/TInputEvento";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DadosEventos() {
  const nav = useNavigation();

  const [nome, setNome] = React.useState("qaaa");
  const [data, setData] = React.useState("aaaaaaa");
  const [local, setLocal] = React.useState("aaaaaaa");
  const [observacoes, setObservacoes] = React.useState("aaaaaaaa");
  const [modalidade, setModalidade] = React.useState("aaaaaaaaa");
  const [horario, setHorario] = React.useState("aaaaaaaaa");
  const [vagas, setVagas] = React.useState("aaaaaaaa");
  const [valor, setValor] = React.useState("aaaaaaaaaaaaa");
  const [cidade, setCidade] = React.useState("aaaaa");
  const [estado, setEstado] = React.useState("aaaaaaaaa");
  const [atualPessoas, setAtualPessoas] = React.useState("aaaaaaaa");

  const [selected, setSelected] = React.useState("");
  const state = [
    { label: "Acre", value: "Acre" },
    { label: "Alagoas", value: "Alagoas" },
    { label: " Amapá", value: " Amapá" },
    { label: "Amazonas", value: "Amazonas" },
    { label: "Bahia", value: "Bahia" },
    { label: "Ceará", value: "Ceará" },
    { label: "Distrito Federal", value: "Distrito Federal" },
    { label: "Espírito Santo", value: "Espírito Santo" },
    { label: "Goiás", value: "Goiás" },
    { label: "Maranhão", value: "Maranhão" },
    { label: "Mato Grosso", value: "Mato Grosso" },
    { label: "Mato Grosso do Sul", value: "Mato Grosso do Sul" },
    { label: "Minas Gerais", value: "Minas Gerais" },
    { label: "Pará", value: "Pará" },
    { label: "Paraíba", value: "Paraíba" },
    { label: "Paraná", value: "Paraná" },
    { label: "Pernambuco", value: "Pernambuco" },
    { label: "Piauí", value: "Piauí" },
    { label: "Rio de Janeiro", value: "Rio de Janeiro" },
    { label: "Rio Grande do Norte", value: "Rio Grande do Norte" },
    { label: "Rio Grande do Sul", value: "Rio Grande do Sul" },
    { label: "Rondônia", value: "Rondônia" },
    { label: "Roraima", value: "Roraima" },
    { label: "Santa Catarina", value: "Santa Catarina" },
    { label: "São Paulo", value: "São Paulo" },
    { label: "Sergipe", value: "Sergipe" },
    { label: "Tocantins", value: "Tocantins" },
  ];

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
      data,
      vagas,
      atualPessoas,
      valor,
      observacoes
    );
    //await AsyncStorage.setItem('user', userCredential.user.uid);
  };

  if (fontsLoaded) {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <SafeAreaView style={styles.topBack}>
            <ScrollView>
              <View style={{ flex: 1 }}>
                <View style={styles.container}>
                  <View style={styles.topBack}>
                    <TouchableOpacity
                      onPress={() => nav.navigate("Home")}
                      style={styles.back}
                    >
                      <Ionicons name="arrow-back" color="#fff" size={30} />
                    </TouchableOpacity>
                  </View>

                    <View style={styles.cima}>
                      <Text style={styles.titulo}>
                        Insira os dados do seu Evento
                      </Text>
                    </View>
                  <View style={styles.bordinha}>

                    <View style={styles.meio}>
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Nome do Evento:</Text>
                      </View>
                      <TInputEvento
                        texto={"Nome"}
                        label={"Nome do Evento"}
                        setValue={setNome}
                        value={nome}
                      />
                      {/* <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Modalidade:</Text>
                      </View> 
                      <TInputEvento
                        texto={"Modalidade"}
                        label={"Modalidade"}
                        setValue={setModalidade}
                        value={modalidade}
                      /> 
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Vagas:</Text>
                      </View>
                      <TInputEvento
                        texto={"Vagas"}
                        label={"Vagas"}
                        setValue={setVagas}
                        value={vagas}
                      />
                    
                      <View style={styles.tituloInput}> 
                      <Text style={styles.texto}>Estado:</Text>
                      </View>
                      <TInputEvento
                        texto={"Estado"}
                        label={"Estado"}
                        setValue={setEstado}
                        value={estado}
                      />
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Cidade:</Text>
                      </View>
                      <TInputEvento
                        texto={"Cidade"}
                        label={"Cidade"}
                        setValue={setCidade}
                        value={cidade}
                      />
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Local:</Text>
                      </View>
                      <TInputEvento
                        texto={"Local"}
                        label={"Local"}
                        setValue={setLocal}
                        value={local}
                      />
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Data:</Text>
                      </View>
                      <TInputEvento
                        texto={"Data"}
                        label={"Data"}
                        setValue={setData}
                        value={data}
                      />
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Horário:</Text>
                      </View>
                      <TInputEvento
                        texto={"Horário"}
                        label={"Horário"}
                        setValue={setHorario}
                        value={horario}
                      />
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Valor:</Text>
                      </View>
                      <TInputEvento
                        texto={"Valor"}
                        label={"Valor"}
                        setValue={setValor}
                        value={valor}
                      />
                      <View style={styles.tituloInput}>
                      <Text style={styles.texto}>Observações:</Text>
                      </View>
                      <TInputEvento
                        texto={"Descrição"}
                        label={"Descrição"}
                        setValue={setObservacoes}
                        value={observacoes}
                      />
                      */}
                    </View>

                    <View style={styles.baixo}>
                      <TouchableOpacity
                        style={styles.botaoAdc}
                        onPress={() => {
                          tryCreateEvent();
                          nav.navigate("Home");
                        }}
                      >
                        <Text style={styles.textoBotao}>Adicionar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2f4d",
    width: "100%",
  },
  scrollviewContainer: {
    flex: 1,
    backgroundColor: "#1d2f4d",
    width: "100%",
  },
  cima: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#ef3006",
    textShadowRadius: 4,
    marginTop: 50,
  },
  meio: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  texto: {
    color: "white",
    fontSize: 20,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#ef3006",
    textShadowRadius: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#EF3006",
    borderRadius: 5,
    width: "90%",
    height: 40,
    marginBottom: 10,
  },
  baixo: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoAdc: {
    flex: "start",
    borderWidth: 1.3,
    width: 250,
    height: 40,
    borderRadius: 5,
    borderColor: "#EF3006",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textoBotao: {
    color: "#EF3006",
    fontSize: 18,
  },
  topBack: {
    backgroundColor: "#1D2F4D",
  },
  back: {
    JustifyContent: "left",
    alignItems: "left",
    backgroundColor: "#1D2F4D",
    paddingLeft: 10,
  },
  bordinha: {
    borderWidth: 1,
    borderColor: "#EF3006",
    borderRadius: 10,
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  tituloInput:{
    alignItems: 'left',
    justifyContent: 'left',


  }
});
