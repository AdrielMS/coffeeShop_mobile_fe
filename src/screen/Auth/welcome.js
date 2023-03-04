import axios from "axios";
import { useState } from "react";
import { Pressable, TextInput, ToastAndroid, View } from "react-native";
import { Text } from "../../style/commons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={{ padding: 15 }}>
      <Image
        source={require("../../images/welcome.png")}
        alignSelf={"center"}
        style={{
          width: "80%",
          height: "80%",
          zIndex: 2,
          resizeMode: "contain",
        }}
      />

      <Pressable
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{
          backgroundColor: "#6A4029",
          padding: 22,
          borderRadius: 20,
          marginBottom: 15,
        }}
      >
        {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
        <Text
          color="#F6F6F9"
          align={"center"}
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Create New Account
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          backgroundColor: "#FFBA33",
          padding: 22,
          borderRadius: 20,
        }}
      >
        {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
        <Text
          color="#000000"
          align={"center"}
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
}
