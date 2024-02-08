import { TextInput, StyleSheet} from "react-native";

export default function TInputEvento(props) {

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
      width: 250,
      height: 40,
      borderColor: "#EF3006",
      borderWidth: 1,
      marginTop: 15,
      color: '#1d2f4d',
      fontSize: 15,
    },
    text: {
      color: "white",
      fontSize: 15,
    },
  });