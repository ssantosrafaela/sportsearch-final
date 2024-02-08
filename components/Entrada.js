import { TextInput, StyleSheet} from "react-native";

export default function Entrada(props) {

  return (
    <>
      <TextInput
        style={styles.box}
        onChangeText={(e) => props.setValue(e)}
        value={props.value}
        placeholder={props.label}
        placeholderTextColor={'#fff'}
      />
    </>
  );
}
const styles = StyleSheet.create({
  
    box: {
      paddingLeft: 18,
      marginBottom: 5,
      borderRadius: 10,
      width: 270,
      height: 45,
      borderColor: "#EF3006",
      borderWidth: 1,
      marginTop: 15,
      color: '#fff',
      fontSize: 15,
    },
    text: {
      color: "white",
      fontSize: 15,
    },
  });