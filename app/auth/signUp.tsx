import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.center}>
      <Text>Sign In</Text>
      <View style={styles.nextToEachOther}>
        <Text id="fullname">Name</Text>\
        <TextInput style={styles.inputBorder} id="fullname" />
      </View>
      <View style={styles.nextToEachOther}>
        <Text id="email">Email</Text>
        <TextInput style={styles.inputBorder} id="email" />
      </View>
      <View style={styles.nextToEachOther}>
        <Text id="password">Pass</Text>
        <TextInput style={styles.inputBorder} id="password" />
      </View>

      <TouchableOpacity>
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
