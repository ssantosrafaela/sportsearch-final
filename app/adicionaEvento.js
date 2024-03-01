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


  const [numeros, setNumeros] = useState([
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
    {
      label: "10"},
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
    {
      label: "13",
      value: "13",
    },
    {
      label: "14",
      value: "14",
    },
    {
      label: "15",
      value: "15",
    },
    {
      label: "16",
      value: "16",
    },
    {
      label: "17",
      value: "17",
    },
    {
      label: "18",
      value: "18",
    },
    {
      label: "19",
      value: "19",
    },
    {
      label: "20",
      value: "20",
    },
    {
      label: "21",
      value: "21",
    },
    {
      label: "22",
      value: "22",
    },
    {
      label: "23",
      value: "23",
    },
    {
      label: "24",
      value: "24",
    },
    {
      label: "25",
      value: "25",
    },
    {
      label: "26",
      value: "26",
    },
    {
      label: "27",
      value: "27",
    },
    {
      label: "28",
      value: "28",
    },
    {
      label: "29",
      value: "29",
    },
    {
      label: "30",
      value: "30",
    },
    {
      label: "31",
      value: "31",
    },
    {
      label: "32",
      value: "32",
    },
    {
      label: "33",
      value: "33",
    },
    {
      label: "34",
      value: "34",
    },
    {
      label: "35",
      value: "35",
    },
    {
      label: "36",
      value: "36",
    },
    {
      label: "37",
      value: "37",
    },
    {
      label: "38",
      value: "38",
    },
    {
      label: "39",
      value: "39",
    },
    {
      label: "40",
      value: "40",
    },
    {
      label: "41",
      value: "41",
    },
    {
      label: "42",
      value: "42",
    },
    {
      label: "43",
      value: "43",
    },
    {
      label: "44",
      value: "44",
    },
    {
      label: "45",
      value: "45",
    },
    {
      label: "46",
      value: "46",
    },
    {
      label: "47",
      value: "47",
    },
    {
      label: "48",
      value: "48",
    },
    {
      label: "49",
      value: "49",
    },
    {
      label: "50",
      value: "50",
    },
  ]);


  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  const [modalidade, setModalidade] = useState("");

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const tryCreateEvent = async () => {
    addEventFirestore(nome, local, cidade, estado, horario, dataEvento, vagas);
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
              style={{ marginTop: 20 }}
              onPress={() => nav.navigate("Home")}
            >
              <Ionicons name="arrow-back" size={40} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.cima}>
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

            {/* <TextInput
              style={styles.input}
              onChangeText={(text) => setVagas(text)}
              placeholder="Vagas"
              placeholderTextColor={"#fff"}
              value={vagas}
            /> */}

<SelectList
                  value={numeros}
                  setSelected={(e) => setNumeros(e)}
                  data={numeros}
                  save="key"
                  placeholder="Selecione o número de vagas"
                  placeholderTextColor={"#fff"}
                  dropdownItemStyles={{ color: "#fff" }}
                  item
                  dropdownStyles={{
                    width: 270,
                    //  height: 40,
                    backgroundColor: "#273854",
                    borderColor: "#EF3006",
                    marginBottom: 20,
                    color: "#fff",
                    
                  }}
                  boxStyles={{
                    width: 270,
                    height: 45,
                    borderColor: "#EF3006",
                    marginBottom: 20,
                    color: "#fff",
                  }}
                  inputStyles={{ color: "white" }}
                />

              <TouchableOpacity onPress={() => nav.navigate("testedois")} style={{ marginTop: 28, marginBottom: -10, borderBottomColor: '#ef3006', borderBottomWidth: 1, width: 235}}>
            <View style={{flexDirection: 'row',     justifyContent: "space-between",}}>
                <Text style={{color: 'white', alignItems: 'flex-start'}}>Selecione o local do evento</Text>
                <MaterialIcons
                      name="arrow-forward-ios"
                      size={19}
                      color="white"
                      style={styles.botao}  
                    /> 
            </View>
              </TouchableOpacity>

            {/* 
            
            <TextInput
              style={styles.input}
              onChangeText={(text) => setLocal(text)}
              placeholder="Local"
              placeholderTextColor={"#fff"}
              value={local}
            />
            
            <TextInput 
    style={styles.input}
    onChangeText={(text) => setHorario(text)}
    placeholder="Horário"
    placeholderTextColor={"#fff"}
    /> */}
            {/* <View style={styles.inputArea}>
                    <TouchableOpacity
                      onPress={() => showMode("time")}
                      style={styles.input}
                    >
                      <Text style={{color: 'white', marginTop: 10}}>
                        Horário{" "}
                      </Text>
                      <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        style={{position: 'absolute',left: 120, bottom: -14, marginBottom: 20, color: "#fff"}}
                      />
                    </TouchableOpacity>
                    <Text style={{position: 'absolute', left: 52, bottom: 13, fontSize: 17, color: 'white'}}>{date.toLocaleTimeString()}</Text>
                  </View> */}

            {/* <TextInput 
    style={styles.input}
    onChangeText={(text) => setData(text)}
    placeholder="Data"
    placeholderTextColor={"#fff"}
    /> */}

            {/* <View style={styles.inputArea}>
                    <TouchableOpacity
                      onPress={() => showMode("date")}
                      style={styles.input}
                    >
                      <Text style={{color: 'white', marginTop: 10}}>
                        Data{" "}
                      </Text>
                      <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        style={{position: 'absolute',left: 120, bottom: -14, marginBottom: 20, color: "#fff"}}
                      />
                    </TouchableOpacity>
                    <Text style={{position: 'absolute', left: 52, bottom: 13, fontSize: 17, color: 'white'}}>{date.toLocaleDateString()}</Text>
                  </View> */}

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
          </View>

          <View style={styles.baixo}>
            <TouchableOpacity
              style={styles.adiciona}
              onPress={() => {
                tryCreateEvent();
                nav.navigate("Home");
              }}
            >
              <Text style={styles.txtBotaoAdc}>Adicionar</Text>
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
  //  marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 3
  },
});
