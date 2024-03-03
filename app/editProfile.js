import React, { useState } from 'react';
import { Button, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const storage = getStorage();
const db = getFirestore();

export default function TesteImagem() {

  const nav = useNavigation();
  const [image, setImage] = useState(null);
const [observacoes, setObservacoes] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      const url = await uploadImage(uri);
      await addImgFirestore(url);
    }
  };
  const uploadImage = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const storageRef = ref(storage, 'images/' + new Date().getTime());

  await uploadBytes(storageRef, blob);

  const url = await getDownloadURL(storageRef);
  return url;
};


  const addImgFirestore = async (url) => {
    const data = {
      url: url,
    };
    try {
      await addDoc(collection(db, 'images'), data);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
          <ScrollView style={styles.ScrollViewStyle}>
          <TouchableOpacity
            onPress={() => nav.navigate("PerfilDeVerdade")}
            style={{marginTop: 18,}}
          >
            <Ionicons name="arrow-back" color="#fff" size={30} />
          </TouchableOpacity>
         
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#1d2f4d" }}>
        
      <Image source={{ uri: image }} style={{ width: 135, height: 135, borderRadius: 999, borderWidth: 1, borderColor: "#EF3006" ,backgroundColor: '#273854' }} />
      <TouchableOpacity style={{marginTop: 15}} onPress={pickImage}>
        <Text style={{color: 'white'}}>
        Escolha sua foto de perfil
        </Text>
        </TouchableOpacity> 

    <View>
      <TextInput
      placeholder='Observações'
      placeholderTextColor={"#fff"}
      value = {observacoes}
      onChangeText={(t) => setObservacoes(t)}
      accessible={true}
      style={styles.formInput}
     />
    </View>
    </View>
    <View style={{paddingTop: 50, alignItems: 'center'}}>
<TouchableOpacity style={styles.sendButton}>
<Text style={styles.sendButtonText}>Salvar</Text>
</TouchableOpacity>
</View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScrollViewStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1d2f4d",
    },
    formInput: {
      borderWidth: 1,
      borderColor: "#EF3006",
      width: 300,
      height: 50,
      borderRadius: 10,
      color: "#fff",
      paddingLeft: 10,
      marginBottom: 10,
      marginTop: 50,
    },
    sendButton: {
      borderWidth: 1,
      backgroundColor: "white",
      width: 200,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginTop: 70,
      color: "#EF3006",
      borderColor: "#EF3006",
    },
    sendButtonText: {
      color: "#EF3006",
      fontSize: 20,
      fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    },
    });