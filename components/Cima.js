import React from 'react';
import {View, Image } from 'react-native';

export default function Cima(){

    return(
        <View
        style={{
          height: "9%",
          alignItems: "center",
          justifyContent: "center",
        //  backgroundColor: 'rgba (29, 47, 77, 0.2),
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
  
           
          
            // borderRadius: 700,

            // marginBottom: 570,
            //  marginRight: 160,
          }}
        />
      </View>
    )
}