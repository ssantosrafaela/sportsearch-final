import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, KeyboardAvoidingView} from 'react-native';
import { useFonts } from "expo-font";  
import { useNavigation } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../connections/firebase-auth';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReplacePass(){
    const nav = useNavigation();    
    const [fontsLoaded] = useFonts({
        "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
        "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
      });

      const [userMail, setUserMail] = useState('');
 
      const replacePassword = async () => {
        if(userMail !== ''){
         sendPasswordResetEmail(auth, userMail)
         .then(() => {
             alert('Email enviado com sucesso!');
             nav.navigate('Login');
         })
         .catch((error) =>{
            const errorMessage = error.message;
            alert("Erro ao enviar email: " + errorMessage)
            return;
         })
        }else{
            alert('Preencha o campo de email!')
            return;
        }
      }

    return(
                 <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerScrollView}
          >
            <SafeAreaView/>
                 <View style={styles.topBack}>
              <TouchableOpacity
                onPress={() => nav.navigate("Login")}
                style={styles.back}
              >
                <Ionicons name="arrow-back" color="#fff" size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.cima}>
                <Text style={styles.formTitle}>Redefinição de Senha</Text>
                <Text style={styles.subtitulo}>Insira seu email e confira a caixa de entrada!</Text>
                </View>
            <View style={styles.baixo}>    
                <TextInput 
                style={styles.formInput}
                 placeholder="Digite seu email" 
                 keyboardType='email-address'
                 autoCapitalize='none'
                 autoComplete='email'
                 value={userMail}
                 onChangeText={setUserMail}
                 placeholderTextColor="#fff" />

                <Pressable
                    style={styles.sendButton}
                    onPress={replacePassword}
                    >
                        <Text style={styles.sendButtonText}>Enviar</Text>
                    </Pressable>
                    </View>
                    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1D2F4D',
        alignItems:'center',
        justifyContent:'center',
    },
    containerScrollView: {
      width: "100%",
      height: "100%",
      backgroundColor: "#1d2f4d",
    },
    formTitle:{
        color:'#fff',
        fontSize:55,
        fontFamily:'Archivo_ExtraCondensed-BlackItalic.ttf',
        textShadowColor: "#EF3006",
        textShadowOffset: { width: 4, height: 3 },
        textShadowRadius: 4,
        marginBottom:10,
    },
    sendButton:{
        borderWidth:1,
        backgroundColor:'white',
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:70,
        color:'#EF3006',
        borderColor:'#EF3006',
    },
    sendButtonText:{
        color:'#EF3006',
        fontSize:20,
        fontFamily:'Archivo_Condensed-SemiBoldItalic.ttf',
    },
    formInput:{
        borderWidth:1,
        borderColor:'#EF3006',
        width:300,
        height:50,
        borderRadius:10,
        color:'#fff',
        paddingLeft:10,
        marginBottom:10,
    },
    back: {
       // JustifyContent: "row",
        //alignItems: "left",
        backgroundColor: "#1D2F4D",
        marginRight: 350,
        marginTop:-35,
        alignSelf: "center",
        //paddingRight: 40,

      },
     topBack:{
      backgroundColor: '#1D2F4D',
   //     width: '100%',
     },
     cima:{
        backgroundColor: '#1D2F4D',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingBottom: 20,
        marginTop: 65,
     },
     baixo:{
        flex: 1.5,
        backgroundColor: '#1D2F4D',
        justifyContent: 'top',
        alignItems: 'center',
        width: '100%',
     },
     subtitulo: {
        fontSize: 20,
        color: "white",
        fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
        textShadowColor: "#EF3006",
        textShadowRadius: 4,
        marginTop: 10,
      },
}) 