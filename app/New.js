import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


export default function Home(){
    const nav = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add eventos</Text>

            <View style={styles.inferior}>
                <TouchableOpacity onPress = {() => nav.navigate('Home')}>
                    <Entypo name="home" size={30} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Search')}>
                    <Feather name="search" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.icon} onPress={() => nav.navigate('New')}>
                    <Entypo name="plus" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Notification')}>
                    <Entypo name="notification" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Profile')}>
                    <Ionicons name="person-outline" size={30} color='white' />
                </TouchableOpacity>    
            </View>
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
    inferior: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#001127',
    },
    icon:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
});