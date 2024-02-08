import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import Baixo from '../components/Baixo';


export default function Home(){
    const nav = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pintou a notificação é gol do Rony</Text>

           <Baixo />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#1D2F4D",
    },
    text:{
        fontSize: 20,
        fontWeight:'bold'
    },
});