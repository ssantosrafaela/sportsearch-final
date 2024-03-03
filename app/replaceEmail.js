import { getAuth, updateEmail } from "firebase/auth";
import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const updateEmailFunction = async (newEmail) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      await updateEmail(user, newEmail);
      console.log("Email updated successfully");
    } catch (error) {
      console.error("Error updating email: ", error);
      throw error; // re-throw the error so it can be handled upstream
    }
  } else {
    console.warn("No user is currently signed in");
  }
};

export default function ReplaceEmail() {
    const nav = useNavigation();
  const [newEmail, setNewEmail] = useState("");
  const [cNewEmail, setCNewEmail] = useState("");

  if (newEmail == cNewEmail) {
    updateEmailFunction();
  } else {
    console.log("Emails do not match");
  }

  return (<>
         <View style={styles.topBack}
      accessible={true}
      accessibilityLabel="Botão de voltar."
      accessibilityHint="Clique para voltar para a tela inicial."
      >
        <TouchableOpacity
          onPress={() => nav.navigate("Config")}
          style={styles.back}
        >
          <Ionicons name="arrow-back" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    <View style={styles.container}>
      <View style={styles.cima}
      accessible={true}
      accessibilityLabel="Redefina sua senha"
      accessibilityHint="Insira um email válido e logo após confira sua caixa de entrada.">
        <Text style={styles.formTitle}>Redefinição de Senha</Text>
        <Text style={styles.subtitulo}>
          Insira seu email e confira a caixa de entrada!
        </Text>
      </View>
      <TextInput
        placeholder="Digite seu novo email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={newEmail}
        onChangeText={setNewEmail}
        style={styles.caixatexto}
      />
      <TextInput
        placeholder="Confirme o novo email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={cNewEmail}
        onChangeText={setCNewEmail}
        style={styles.caixatexto}
      />
      <TouchableOpacity style={{
        backgroundColor: '#fff',
        borderColor: '#ef3006',
        padding: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}onPress={() => updateEmailFunction()}>
        <Text style={{color: '#1d2f4d'}}>Confirmar</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2F4D",
  },
    text: {
        color: "#fff",
    },
    caixatexto: {
        borderColor: '#ef3006',
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    topBack: {
        width: "100%",
        height: "10%",
        backgroundColor: "#1D2F4D",
        paddingTop: 50,
    },
});
