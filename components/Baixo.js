import React from 'react';
import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function Baixo(){
    const nav = useNavigation();
    return(
        <>
        <View style={styles.baixo}>
                <TouchableOpacity onPress = {() => nav.navigate('Home')}>
                    <Entypo name="home" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Search')}>
                    <Ionicons name="search" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Notification')}>
                    <MaterialCommunityIcons
                     name="bell" size={29} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Settings')}>
                    <Ionicons name="settings" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('PerfilDeVerdade')}>
                    <Ionicons name="person" size={30} color='white' />
                </TouchableOpacity>    

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    baixo:{
        width: '100%',
        height: '9%',
        paddingTop: 10,
        paddingBottom: 15,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#273854',
        borderRadius: 15,
        borderTopWidth: 2,
        borderColor: "#EF3006"
        
    }
})