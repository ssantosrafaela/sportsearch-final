//ARQUIVO PARA FAZER AUTENTICAÇÃO

// Import the functions you need from the SDKs you need
import {app} from "./firebase-app"
//import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

//MANTÉM A SESSAO MESMO APÓS FECHAR E ABRIR O APP
//AQUI PARA QUEM TRABALHA SEM SER O REACT NATIVE, TERÁ QUE VER OUTRA FORMA
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//FUNÇÃO PARA REALIZAR O LOGIN
const emailLogin = async (email, password) => {
    //USER CREDENTIAL É O OBJETO COM AS CREDENCIAIS DO USUARIO
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch(error => { //O que fazer caso dê erro
            console.warn(error)
            return null
        });
    return userCredential
}

//FUNCAO PARA CRIAR USUARIO
const createUser = async (email, pass) => {
    //CHAMA A FUNCAO DO FIREBASE E ENTAO RETORNA AS CREDENCIAIS
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass)
        .catch((error) => { //CASO DE ERRO, ENTRA AQUI
            alert(error) //Tratar o erro
        });
        return userCredential;
    //CHAMA FUNCAO EM firebase-store
   // addUserFirestore(userCredential, "Leticia Pedrinho", "123.456.789-00","53 9991730000", "27/07/1996")

    // updateProfile(userCredential.user, {
    //     displayName: name
    // }).then(() => {
    //     console.log("Feitorias")
    // }).catch((error) => {
    //     console.warn("Deu ruim")
    //     console.warn(error)
    // });

}

//REALIZA O SIGNOUT NO FIREBASE
const signOutFirebase = async () => {
    signOut(auth).then(() => {
        console.log("Deslogado");
        // navigator.navigate('index');
    }).catch((error) => {
        console.warn(`Error: ${error}`);
    });
}

//EXPORTA O OBJETI DO APP (DESNECESSARIAMENTE, NA VERDADE), O DE AUTENTICACAO E AS TRES FUNCOES CRIADAS
export { app, 
    auth, 
    emailLogin, //
    createUser, 
    signOutFirebase }