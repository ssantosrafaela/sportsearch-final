import React from 'react';
import {View, Image } from 'react-native';

export default function Cima(){

    return(
        <View
        style={{
          height: "9%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: '#273854',
          borderBottomWidth: 2,
          borderColor: "#EF3006",
          borderRadius: 15,
        }}
      >
        <Image
          source={require("../assets/icon.png")}
          resizeMode="contain"
          style={{
            height: 60,
            width: 60,
            borderRadius: 20,
          }}
        />
      </View>
    )
}