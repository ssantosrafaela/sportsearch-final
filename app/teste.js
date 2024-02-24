import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { signOutFirebase } from '../connections/firebase-auth';
import { auth } from '../connections/firebase-auth';


export default function Teste() {
    const nav = useNavigation();  
    const [mode, setMode] = useState("date");
    const [date, setDate] = useState(new Date()); 
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
      };
      const showMode = (modeToShow) => {
        setShow(true);
        setMode(modeToShow);
      };
      

    function logout(){
    signOutFirebase(auth)  
    .then(()=>{
      alert('se fudeu')
      nav.navigate('index')
    })
    .catch((error) =>{
      const errorMessage = error.message;
      alert(errorMessage)
    })
    }

    return (
        <View style={styles.container}>

          

            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2f4d'
    }
})
