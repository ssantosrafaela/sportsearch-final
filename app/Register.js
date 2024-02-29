import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Linking } from "react-native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Entrada from "../components/Entrada";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Checkbox from "expo-checkbox";

import { emailLogin, auth, createUser, signOutFirebase } from "../connections/firebase-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addUserFirestore } from '../connections/firebase-store'



export default function Register() {
  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const [textNome, setNome] = useState("");
  const [textSobrenome, setSobrenome] = useState("");
  const [textCidade, setCidade] = useState("");
const [textPronome, setPronome] = useState("");
  const [textTelefone, setTelefone] = useState("");
  const [textEmail, setEmail] = useState("");
  const [textPassword, setPassword] = useState("");
  const [textConfPassword, setConfPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [hideCPass, setHideCPass] = useState(true);

  
  
  const [isChecked, setIsChecked] = useState(false);

  const tryCreateUser = async () => {
    if (textPassword != textConfPassword) {
      alert("senha tao diferente sem nocaaaaaaaaaaao");
      return;
    }

    const userCredential = await createUser(textEmail, textPassword);
    if (userCredential){
     addUserFirestore(userCredential.user.uid, textNome, textEmail, textSobrenome, textTelefone );
      //await AsyncStorage.setItem('user', userCredential.user.uid);
      nav.navigate('Login');
    }else{
      alert('Deu errado hahahahahaha');
    }
  } 

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };
  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  const [gnr, setGnr] = useState([
    { label: "Mulher Cis", value: "Mulher Cis" },
    { label: "Mulher Trans", value: "Mulher Trans"},
    { label: "Homem Cis", value: "Homem Cis" },
    { label: "Homem Trans", value: "Homem Trans"},
    { label: "Não-binário", value: "Não-binário" },
    { label: "Prefiro não informar", value: "Prefiro não informar" },
    { label: "Outro", value: "Outro" }, 
  ]);

  const [ sexualidade, setSexualidade] = useState([
    { label: "Heterossexual", value: "Heterossexual" },
    { label: "Homossexual", value: "Homossexual"},
    {label: "Lésbica", value: "Lésbica"},
    { label: "Gay", value: "Gay"},
    { label: "Bissexual", value: "Bissexual" },
    { label: "Pansexual", value: "Pansexual"},
    { label: "Assexual", value: "Assexual" },
    { label: "Demissexual", value: "Demissexual" }, 
    { label: "Prefiro não informar", value: "Prefiro não informar" },
  
  ])

  const [selected, setSelected] = useState("");
  const data = [
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

  if (fontsLoaded) {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.teste}
        >
          <SafeAreaView style={styles.teste}>
            <ScrollView>
              <View style={styles.topBack}>
                <TouchableOpacity
                  onPress={() => nav.navigate("index")}
                  style={styles.back}
                >
                  <Ionicons name="arrow-back" color="#fff" size={30} />
                </TouchableOpacity>
              </View>

              <View style={styles.cima}>
                <Text style={styles.titulo}>Sport Search</Text>
                <Text style={styles.subtitulo}>
                  Insira seus dados para se cadastrar
                </Text>
              </View>

              <View style={styles.meio}>
                <View
                style = {styles.viewDados}>
                  <Text style={styles.dados}>Dados Pessoais:</Text>
                </View>

                <View>
                  <Entrada
                    text={"Nome"}
                    label="Digite seu nome"
                    setValue={setNome}
                    value={textNome}
                  />

                  <Entrada
                    text={"Digite seu sobrenome"}
                    label="Sobrenome "
                    setValue={setSobrenome}
                    value={textSobrenome}
                  />

                  <Entrada
                    text={"Telefone"}
                    label={"Insira seu telefone "}
                    setValue={setTelefone}
                    value={textTelefone}
                  />

                  <Entrada 
                  text={"Cidade"}
                  label={"Insira sua cidade "}
                  setValue={setCidade}  
                  value={textCidade}
                  />

                  {/* <View style={styles.inputArea}>
                    <TouchableOpacity
                      onPress={() => showMode("date")}
                      style={styles.input}
                    >
                      <Text style={styles.text}>
                        Data de nascimento{" "}
                      </Text>
                      <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    </TouchableOpacity>
                  </View> */}

                  <View style={styles.select}>
                   <View style={{marginBottom: 17}}> 
                  <SelectList
                      value={data}
                      setSelected={(j) => setSelected(j)}
                      data={data}
                      save="key"
                      placeholder="Selecione seu estado:"
                      placeholderTextColor={"#fff"}
                      dropdownStyles={{
                        width: 270,
                        backgroundColor: "#273854",
                        borderColor: "#EF3006",
                        marginBottom: 20,
                        color: "#fff",
                      }}
                      boxStyles={{
                        width: 270,
                        height: 40,
                        borderColor: "#EF3006",
                        color: "#fff",
                      }}
                      inputStyles={{
                        color: "white",
                      }}
                    />
                    </View>

                    <SelectList
                      value={gnr}
                      setSelected={(e) => setGnr(e)}
                      data={gnr}
                      save="key"
                      placeholder="Selecione sua identidade de gênero:"
                      placeholderTextColor={"#fff"}
                      dropdownStyles={{
                        width: 270,
                        //  height: 40,
                        backgroundColor: "#273854",
                        color: "#fff",
                        borderColor: "#EF3006",
                        marginBottom: 20,
                      }}
                      boxStyles={{
                        width: 270,
                        height: 45,
                        borderColor: "#EF3006",
                        marginBottom: 20,
                      }}
                      inputStyles={{ color: "white" }}
                      
                    />
                
                  <SelectList
                  value={sexualidade}
                  setSelected={(e) => setSexualidade(e)}
                  data={sexualidade}
                  save="key"
                  placeholder="Selecione sua sexualidade:"
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
                <View style={{marginTop: -13}}>
                 <Entrada 
                  text={"Pronome"}
                  label={"Insira seu pronome (Ele/dele) "}
                  setValue={setPronome}  
                  value={textPronome}
                  />
</View>
                    
                  </View>

                  <View style={styles.meio}>
                    <View style = {styles.viewDados}>
                      
                        <Text style={styles.dados}>
                          Dados de Entrada:
                        </Text>
                      
                    </View>
                  </View>

                  <View style={styles.meio}>
                    <Entrada
                      text={"Email"}
                      label={"Digite seu email "}
                      setValue={setEmail}
                      value={textEmail}
                      keyboardType="email-address"
                    />

                    <View style={styles.inputArea}>
                      <TextInput
                        style={styles.inputTeste}
                        placeholder="Insira sua senha"
                        placeholderTextColor={"#fff"}
                        value={textPassword}
                        onChangeText={(t) => setPassword(t)}
                        secureTextEntry={hidePass}
                      />
                      <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setHidePass(!hidePass)}
                      >
                        {hidePass ? (
                          <Ionicons name="eye" color="#fff" size={25} />
                        ) : (
                          <Ionicons name="eye-off" color="#fff" size={25} />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.inputArea}>
                      <TextInput
                        style={styles.inputTeste}
                        placeholder="Confirme sua senha"
                        placeholderTextColor={"#fff"}
                        value={textConfPassword}
                        onChangeText={(e) => setConfPassword(e)}
                        secureTextEntry={hideCPass}

                      />
                      <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setHideCPass(!hideCPass)}
                      >
                        {hideCPass ? (
                          <Ionicons name="eye" color="#fff" size={25} />
                        ) : (
                          <Ionicons name="eye-off" color="#fff" size={25} />
                        )}
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>
              </View>
              <View style={styles.check}>  
                      <Checkbox
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color="#EF3006"
                        style={styles.checkboxContainer}
                      />
                      <Text
                      style={styles.textCheck}
                      onPress = {() => {
                        Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                      }}>Aceitar os termos de uso</Text>
                      </View>

              <View style={styles.next}>
                <TouchableOpacity
                  style={styles.botaoEntrar}
                  onPress={() => {tryCreateUser()}
                  }
                >
                  <Text style={styles.textoBotaoEntrar}>Cadastrar</Text>
                </TouchableOpacity>
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
  cima: {
    flex: 0.8,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },
  meio: {
    flex: 1.5,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    marginTop: 20,
    fontSize: 75,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 17,
    marginBottom: 35,
  },

  picker: {
    backgroundColor: "#1D2F4D",
    borderColor: "#EF3006",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 5,
  },
  text: {
    color: "white",
  },
  teste: {
    flex: 1,
    backgroundColor: "#1D2F4D",
  },
  select: {
    marginTop: 15,
    marginBottom: 15,
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
  next: {
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    marginTop: 20,
  },
  entrar: {
    color: "#EF3006",
    fontSize: 30,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EF3006",
    backgroundColor: "#fff",
  },
  input: {
    flexDirection: "row",
  },
  inputArea: {
    flexDirection: "row",
    width: 270,
    backgroundColor: "#1D2F4D",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EF3006",
    height: 45,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 18,
    paddingTop: 7.5,
  },
  dados: {
    color: "#fff",
    fontSize: 19,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
  },

  botaoEntrar: {
    borderWidth: 1,
    borderRadius: 3,
    width: 170,
    height: 40,
    marginTop: 20,
    borderColor: "#EF3006",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoEntrar: {
    color: "#EF3006",
    fontSize: 18,
  },
  inputArea: {
    flexDirection: "row",
    width: 270,
    backgroundColor: "#1D2F4D",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EF3006",
    height: 40,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  inputTeste: {
    width: 220,
    height: 40,
    color: "#fff",
    paddingLeft: 15,
    fontSize: 15,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  check:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  textCheck:{
    color: '#fff',
    fontSize: 17,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    },
    checkboxContainer: {
      borderRadius: 5,
      borderWidth: 1,
      marginRight: 5,
    },
    viewDados:{
      justifyContent: 'center',
      paddingRight: 154,
      marginTop: 10,
    }
  });