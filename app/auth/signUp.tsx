import React from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import axios from "axios";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const authentication = auth;

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );

      const res = await axios.post(
        "http://192.168.1.103:3000/api/auth/signup",
        {
          email: email,
          firebaseId: user.user.uid,
          name: "Ahmad Hanki",
        }
      );

      if (res.status == 200) {
        Alert.alert("User created successfully");
        router.push("/");
      } else {
        Alert.alert("User not created");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.center}>
      <Text>Sign In</Text>
      <View style={styles.nextToEachOther}>
        <Text id="fullname">Name</Text>
        <TextInput style={styles.inputBorder} id="fullname" />
      </View>
      <View style={styles.nextToEachOther}>
        <Text id="email">Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputBorder}
          id="email"
        />
      </View>
      <View style={styles.nextToEachOther}>
        <Text id="password">Pass</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputBorder}
          id="password"
        />
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up</Text>
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
  inputBorder: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    width: 200,
  },
});

export default SignUp;
