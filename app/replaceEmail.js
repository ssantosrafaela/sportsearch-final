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
        <Text style={styles.formTitle}>Redefinição de Email</Text>
        <Text style={styles.subtitulo}>
          Insira seu novo email e confirme-o.
        </Text>
      </View>
      </View>
      <View style={{backgroundColor: "#1d2f4d", flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom:170}}>
      <TextInput
        placeholder="Digite seu novo email"
        placeholderTextColor={"#fff"}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={newEmail}
        onChangeText={setNewEmail}
        style={styles.caixatexto}
      />
      <TextInput
        placeholder="Confirme o novo email"
        placeholderTextColor={"#fff"}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={cNewEmail}
        onChangeText={setCNewEmail}
        style={styles.caixatexto}
      />
      <TouchableOpacity style={styles.sendButton} onPress={() => updateEmailFunction()}>
        <Text style={styles.sendButtonText}>Confirmar</Text>
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
        width: 300,
        height: 50,
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
    formInput: {
        borderWidth: 1,
        borderColor: "#EF3006",
        width: 300,
        height: 50,
        borderRadius: 10,
        color: "#fff",
        paddingLeft: 10,
        marginBottom: 10,
      },
      formTitle: {
        color: "#fff",
        fontSize: 55,
        fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
        textShadowColor: "#EF3006",
        textShadowOffset: { width: 4, height: 3 },
        textShadowRadius: 4,
        marginBottom: 10,
      },
      subtitulo: {
        fontSize: 20,
        color: "white",
        fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
        textShadowColor: "#EF3006",
        textShadowRadius: 4,
        marginTop: 10,
        alignContent: "center",
        alignSelf: "center",
      },
      sendButton: {
        borderWidth: 1,
        backgroundColor: "white",
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 70,
        color: "#EF3006",
        borderColor: "#EF3006",
      },
      sendButtonText: {
        color: "#EF3006",
        fontSize: 20,
        fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
      },
});
