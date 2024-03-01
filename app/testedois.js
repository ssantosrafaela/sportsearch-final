import { StatusBar } from 'expo-status-bar';
import { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput  , TouchableOpacity  } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import * as Location from 'expo-location';
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

let locationsOfInterest = [
  {
    title: "First",
    location: {
      latitude: -27.2,
      longitude: 145
    },
    description: "My First Marker"
  },
  {
    title: "Second",
    location: {
      latitude: -30.2,
      longitude: 150
    },
    description: "My Second Marker"
  }
]

export default function App() {
    const nav = useNavigation();
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: -53.356995845807596,
    latitude: -32.558415662002865
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
      )
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({ width: 300, height: 300, result: 'base64'});
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64 });
    await shareAsync(uri);
  };

  const [location, setLocation] = useState();
const [address, setAddress] = useState();    

useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
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
      latitude: location.coords.latitude
    });

    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
  };



  return (
  <>
    <View style={styles.container}>
      <View>
              <TouchableOpacity
                onPress={() => nav.navigate("Config")}
                style={styles.back}
              >
                <Ionicons name="arrow-back" color="#fff" size={30} />
              </TouchableOpacity>
              </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef} 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
        
          latitude: -32.558415662002865,
          latitudeDelta: 27.499085419977938,
          longitude:  -53.356995845807596,
          longitudeDelta: 15.952148000000022,
        }}
      >
        {showLocationsOfInterest()}
        <Marker 
          draggable
          pinColor='#0000ff'
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor='#00ff00'
          coordinate={{ latitude: -35, longitude: 147}}
        >
          <Callout>
            <Text>Count: {count}</Text>
            <Button title='Increment Count' onPress={() => setCount(count + 1)} />
            <Button title='Take Snapshot and Share' onPress={takeSnapshotAndShare} />
          </Callout>
        </Marker>
      </MapView>
    <Text style={styles.mapOverlay}>Longitude: {draggableMarkerCoord.longitude}, latitude: {draggableMarkerCoord.latitude}</Text>
      <TextInput placeholder='Address' value={address} onChangeText={setAddress} />
      <Button title="Selecione no mapa: " onPress={geocode} />
      <Button title="Endereço: " onPress={reverseGeocode} />
      <StatusBar style="auto" />
    </View>

</>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2f4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:'90%',
    height: '50%',
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
    textAlign: "center"
  }
});