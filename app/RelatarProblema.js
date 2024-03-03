import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, Alert, View, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function RelatarProblema () {
    const nav = useNavigation();
    const [problema, setProblema] = useState('');

    const relatarProblema = () => {
        if (problema.trim() === '') {
            Alert.alert('Erro', 'Por favor, escreva o problema antes de enviar.');
            return;
        }

        const emailSubject = 'Relatório de Problema';
        const emailBody = `Problema: ${problema}`;

        MailComposer.composeAsync({
            recipients: ['ssportsearch@gmail.com'],
            subject: emailSubject,
            body: emailBody,
        })
            .then(result => {
                if (result.status === 'sent') {
                    Alert.alert('Sucesso', 'O problema foi relatado com sucesso.');
                }
            })
            .catch(error => {
                Alert.alert('Erro', 'Ocorreu um erro ao enviar o relatório de problema.');
            });
    };
    const handleAttachment = async () => {
        try {
            const attachment = await DocumentPicker.getDocumentAsync();
            if (attachment.type === 'success') {
                relatarProblema(attachment.uri); 
            }
        } catch (error) {
            handleAttachment(attachment.uri);
            console.error('Error picking document:', error);
        }
    };
    
    return (
        <>
         <ScrollView
          style={{ width: "100%", height: "100%", backgroundColor: "#1d2f4d" }}
        >
          <View
            style={styles.topBack}
            accessible={true}
            accessibilityLabel="Botão de voltar."
            accessibilityHint="Clique para voltar para a tela de configurações."
          >
            <TouchableOpacity
              onPress={() => nav.navigate("Config")}
              style={styles.back}
            >
              <Ionicons name="arrow-back" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        
            <TextInput
                placeholder="Escreva o problema..."
                placeholderTextColor="#fff"
                value={problema}
                onChangeText={text => setProblema(text)}
                style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            />
            <TouchableOpacity onPress={relatarProblema} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                <Text>Relatar</Text>
            </TouchableOpacity>
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    topBack: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    back: {
        marginLeft: 20,
    },
});
