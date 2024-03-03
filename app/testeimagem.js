import React, { useState } from 'react';
import { Button, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const storage = getStorage();
const db = getFirestore();

export default function TesteImagem() {
    const nav = useNavigation();
  const [image, setImage] = useState(null);

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
        
      <Image source={{ uri: image }} style={{ width: 135, height: 135, borderRadius: 999, borderWidth: 1, backgroundColor: 'purple' }} />
      <TouchableOpacity style={{marginTop: 15}} onPress={pickImage}>
        <Text>
        Escolha Imagem da Galeria
        </Text>
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
    });