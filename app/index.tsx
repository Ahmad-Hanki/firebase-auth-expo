import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getCurrentUser = async (firebaseId: string) => {
  try {
    const user = await axios.get(
      `http://192.168.1.103:3000/api/auth/signup?firebaseId=${firebaseId}`
    );
    return user.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Index = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // ✅ Use useEffect to prevent re-renders causing hook issues
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in", user.uid);
        setFirebaseUser(user);
      } else {
        console.log("User is signed out");
        router.replace("/auth/signIn");
      }
    });

    setLoading(false);

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const { data: user, isFetching } = useQuery({
    queryKey: ["currentUser", firebaseUser?.uid], // ✅ Add dependency on firebaseUser?.uid
    queryFn: async () => {
      if (!firebaseUser?.uid) return null;
      return await getCurrentUser(firebaseUser.uid);
    },
    enabled: !!firebaseUser, // ✅ Only run when firebaseUser exists
  });

  if (isFetching || loading) return <Text>Fetching user data...</Text>;

  if (!firebaseUser) router.replace("/auth/signIn");

  return (
    
    <View>
      {user && <Text>Welcome {user?.email}</Text>}

      <Link href={"/auth/signUp"}>
        <Text>Sign Up</Text>
      </Link>
      <Link href={"/auth/signIn"}>
        <Text>Sign In</Text>
      </Link>

      {user && (
        <TouchableOpacity onPress={() => signOut(auth)}>
          <Text>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Index;
