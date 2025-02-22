import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View>
      <Link href={"/auth/signUp"}>
        <Text>Sign Up</Text>
      </Link>
      <Link href={"/auth/signIn"}>
        <Text>Sign In </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
