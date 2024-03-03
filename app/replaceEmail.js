import { getAuth, updateEmail } from "firebase/auth";
import React from "react";
import { TextInput, View, Text, Button } from "react-native";

const updateEmailFunction = async (newEmail) => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      try {
        await updateEmail(user, newEmail);
        console.log("Email updated successfully");
      } catch (error) {
        console.error("Error updating email: ", error);
        throw error; // re-throw the error so it can be handled upstream
      }
    } else {
      console.warn("No user is currently signed in");
    }
  }

export default function ReplaceEmail() {
    const [newEmail, setNewEmail] = React.useState("");
    return (
        <View>
            <TextInput
                placeholder="New email"
                value={newEmail}
                onChangeText={setNewEmail}
            />
            <Button
                title="Update email"
                onPress={() => updateEmailFunction(newEmail)}
            />
        </View>
    );
}