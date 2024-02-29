import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { signOutFirebase } from '../connections/firebase-auth';
import { auth } from '../connections/firebase-auth';
import { SafeAreaProvider, useSafeArea, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


// export default function Teste() {
//     const nav = useNavigation();  
//     const [mode, setMode] = useState("date");
//     const [date, setDate] = useState(new Date()); 
//     const [show, setShow] = useState(false);


//     const onChange = (event, selectedDate) => {
//         setDate(selectedDate);
//         setShow(false);
//       };
//       const showMode = (modeToShow) => {
//         setShow(true);
//         setMode(modeToShow);
//       };
      

//     function logout(){
//     signOutFirebase(auth)  
//     .then(()=>{
//       alert('se fudeu')
//       nav.navigate('index')
//     })
//     .catch((error) =>{
//       const errorMessage = error.message;
//       alert(errorMessage)
//     })
//     }

//      return (
// export default function Teste() {
//     const nav = useNavigation();  
//     const [mode, setMode] = useState("date");
//     const [date, setDate] = useState(new Date()); 
//     const [show, setShow] = useState(false);
//     const [borderColor, setBorderColor] = useState("white");

//     const onChange = (event, selectedDate) => {
//         setDate(selectedDate);
//         setShow(false);
//     };

//     const showMode = (modeToShow) => {
//         setShow(true);
//         setMode(modeToShow);
//     };

//     const handleButtonPress = () => {
//         if (borderColor === "white") {
//             setBorderColor("green");
//         } else {
//             setBorderColor("white");
//         }
//     };

  
export default function Teste() {
    const nav = useNavigation();  
    const [mode, setMode] = useState("date");
    const [date, setDate] = useState(new Date()); 
    const [show, setShow] = useState(false);
    const [borderColor, setBorderColor] = useState("white");
    const [icon, setIcon] = useState("exit");

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
    };

    const showMode = (modeToShow) => {
        setShow(true);
        setMode(modeToShow);
    };

    const handleButtonPress = () => {
        if (icon === "exit") {
            setIcon("enter");
        } else {
            setIcon("exit");
        }
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
    

    return (
        <View style={[styles.container, { borderColor }]}>
            <TouchableOpacity style={[styles.butao, { borderColor }]} onPress={handleButtonPress}>
                <Text>{icon === "exit" ? "Click me" : "Enter"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2f4d',
        borderWidth: 2,
        borderColor: 'white'
    },
    butao:{
        borderWidth: 3,
        height: 50,
    }
});

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
        <View style={[styles.container, { borderColor }]}>
            <TouchableOpacity style={[styles.butao, { borderColor }]} onPress={handleButtonPress}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2f4d',
        borderWidth: 2,
        borderColor: 'white'
    },
    butao:{
      borderWidth: 3,
      height: 50,
    }
})
     
//      )
    
//      }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#1d2f4d'
//     }
// })
