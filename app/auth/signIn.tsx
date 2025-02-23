import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";



const SignIn = () => {
    const authentication = auth;
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    
const handleSignIn = async () => {
  try {
    const res = await signInWithEmailAndPassword(
      authentication,
      email,
      password
    );

    const user = res.user;

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
  
  return (
    <SafeAreaView style={styles.center}>
      <Text>Sign In</Text>
      <View style={styles.nextToEachOther}>
        <Text id="email">Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.inputBorder}
          id="email"
        />
      </View>
      <View style={styles.nextToEachOther}>
        <Text id="password">Pass</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.inputBorder}
          id="password"
        />
      </View>

      <TouchableOpacity onPress={handleSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  nextToEachOther: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  inputBorder : {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    width: 200,
  }
});

export default SignIn;
