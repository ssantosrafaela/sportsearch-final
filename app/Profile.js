import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Baixo from "../components/Baixo";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getProfileFromUid } from "../connections/firebase-store";
import { auth } from "../connections/firebase-auth";

export default function Home() {
  const nav = useNavigation();

  useEffect(() => {
    fetchProfile();
  }, []);

  const [textProfile, setProfile] = useState("");

  const fetchProfile = async () => {
    const uid = auth.currentUser.uid;
    const profile = await getProfileFromUid(uid);
    setProfile(profile);
    console.log(profile);
  };


  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  return (
    <>
     {/*  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}> */}
        <StatusBar backgroundColor="#7777" />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/bolodechocolate.jpeg")}
            resizeMode="cover"
            style={{
              height: 210,
              width: "100%",
            }}
          />
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/papainoel.jpeg")}
            resizeMode="contain"
            style={styles.imgPerfil}
          />
          <Text
            style={{
              color: "black",
              fontSize: 20,
              marginVertical: 8,
            }}
          >
            {textProfile.name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: "center",
            }}
          >
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 4,
              }}
            >
              {textProfile.city}, {textProfile.state}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              paddingVertical: 8,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "purple",
                }}
              >
                {" "}
                122
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "purple",
                }}
              >
                Followers
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "purple",
                }}
              >
                {" "}
                67
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "purple",
                }}
              >
                Following
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "purple",
                }}
              >
                {" "}
                77
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "purple",
                }}
              >
                Likes
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 174,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "purple",
              borderRadius: 10,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 174,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "purple",
              borderRadius: 10,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
              }}
            >
              Add event
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}></View>

        <Baixo />
     {/*</SafeAreaView>*/} 
    </>
  );
}

const styles = StyleSheet.create({ 

imgPerfil: {
    height: 135,
    width: 135,
    borderRadius: 999,
    borderColor: "purple",
    borderWidth: 2,
    marginTop: -90,
    marginBottom: 30,
    marginRight: 160,
  },
});