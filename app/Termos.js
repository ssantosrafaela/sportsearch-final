import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from 'expo-router'

export default function Termos() {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
        <Text>Termos</Text>
        </View>
    );
    }
