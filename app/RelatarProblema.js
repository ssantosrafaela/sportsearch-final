import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const RelatarProblema = () => {
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
            <TextInput
                placeholder="Escreva o problema..."
                value={problema}
                onChangeText={text => setProblema(text)}
            />
            <TouchableOpacity onPress={relatarProblema}>
                <Text>Relatar</Text>
            </TouchableOpacity>
        </>
    );
};

export default RelatarProblema;
