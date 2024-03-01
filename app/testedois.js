import { StatusBar } from "expo-status-bar";
import { useRef, useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import * as Location from "expo-location";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

let locationsOfInterest = [
  {
    title: "First",
    location: {
      latitude: -27.2,
      longitude: 145,
    },
    description: "My First Marker",
  },
  {
    title: "Second",
    location: {
      latitude: -30.2,
      longitude: 150,
    },
    description: "My Second Marker",
  },
];

export default function App() {
  const nav = useNavigation();
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: -53.356995845807596,
    latitude: -32.558415662002865,
  });
  const mapRef = useRef();

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({
      width: 300,
      height: 300,
      result: "base64",
    });
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, {
      encoding: FileSystem.EncodingType.Base64,
    });
    await shareAsync(uri);
  };

  const [location, setLocation] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(address);
    console.log("Geocoded Address:");
    console.log(geocodedLocation);
  };

  const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });

    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            bottom: 700,
            left: 10,
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => nav.navigate("adicionaEvento")}
            style={styles.back}
          >
            <Ionicons name="arrow-back" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.mapOverlay}>
          Longitude: {draggableMarkerCoord.longitude}, latitude:{" "}
          {draggableMarkerCoord.latitude}
        </Text>
        <TextInput
          placeholder="Digite o endereço do evento:"
          placeholderTextColor={'#fff'}
          value={address}
          onChangeText={setAddress}
          style={{ borderBottomWidth: 2, width: '70%', textAlign: 'center', height: 40, borderColor: '#ef3006', borderRadius: 15, padding: 20, color: '#fff', marginTop: 40 }}
        />
     <TouchableOpacity  style={{borderWidth: 1, marginTop: 15, marginBottom: 30, alignItems: 'center', width: '40%', backgroundColor: 'white', marginLeft: 20, padding: 10, borderColor: '#ef3006', borderRadius: 10}} onPress={reverseGeocode}><Text style={{color: '#ef3006'}}>Confirmar Endereço: </Text></TouchableOpacity>

        <MapView
          ref={mapRef}
          style={styles.map}
          onRegionChange={onRegionChange}
          initialRegion={{
            latitude: -32.558415662002865,
            latitudeDelta: 27.499085419977938,
            longitude: -53.356995845807596,
            longitudeDelta: 15.952148000000022,
          }}
        >
          {showLocationsOfInterest()}
          <Marker
            draggable
            pinColor="#0000ff"
            coordinate={draggableMarkerCoord}
            onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
          />
          <Marker
            pinColor="#00ff00"
            coordinate={{ latitude: -35, longitude: 147 }}
          >
            <Callout>
              <Text>Count: {count}</Text>
              <Button
                title="Increment Count"
                onPress={() => setCount(count + 1)}
              />
              <Button
                title="Take Snapshot and Share"
                onPress={takeSnapshotAndShare}
              />
            </Callout>
          </Marker>
        </MapView>
        <TouchableOpacity style={{borderWidth: 1, marginTop: 20, marginBottom: 30, alignItems: 'center', width: '60%', backgroundColor: 'white', marginLeft: 20, padding: 10, borderColor: '#ef3006', borderRadius: 10}} onPress={geocode}><Text style={{color: '#ef3006'}}>Confirme seleção no mapa</Text></TouchableOpacity>
        {/* <Button title="Selecione no mapa: " onPress={geocode} /> */}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2f4d",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "90%",
    height: "50%",
    borderRadius: 40,
  },
  mapOverlay: {
    position: "absolute",
    bottom: -200,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center",
  },
});
