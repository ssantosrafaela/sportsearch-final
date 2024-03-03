import {app} from "./firebase-app"
//import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const emailLogin = async (email, password) => { 
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch(error => { 
            console.warn(error)
            return null
        });
    return userCredential
}
    //CHAMA A FUNCAO DO FIREBASE E ENTAO RETORNA AS CREDENCIAIS
//FUNCAO PARA CRIAR USUARIO
const createUser = async (email, pass) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass)
        .catch((error) => { //CASO DE ERRO, ENTRA AQUI
            alert(error) 
        });
        return userCredential;     
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
    signOutFirebase, 

}