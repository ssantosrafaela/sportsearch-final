import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import {firebase} from "../connections/firebase-app";


export default function puxaimg(){
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Replace 'your-image-path' with the actual path to your image in Firebase Storage
        const storageRef = firebase.storage().ref('your-image-path');

        storageRef
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                console.log('Error getting image from Firebase Storage:', error);
            });
    }, []);

    return (
        <View>
            <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
        </View>
    );
};
