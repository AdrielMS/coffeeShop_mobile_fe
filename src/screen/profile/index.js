import React from "react";
import {
  Pressable,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  ToastAndroid,
} from "react-native";
import { useState, useEffect } from "react";
import commonStyle from "../../style/commons";
import axios from "axios";
import Style from "./style";
import GlobalStyle from "../../style/GlobalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const style = StyleSheet.create({
  flexCenter: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: "2%",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: "1%",
  },
  sectionTitle: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "700",
  },

  input: {
    height: 40,
    marginTop: 4,
    marginBottom: 30,
    borderBottomWidth: 2,
    padding: 10,
    borderColor: "#9F9F9F",
  },
  buttonwrap: {
    height: 40,
    marginTop: 4,
    marginBottom: 30,
  },
});

const ProfileScreen = ({ route }) => {
  const { idu } = route.params;
  console.log(idu);

  const [dataProfile, setDataProfile] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    // e.preventDefault();
    axios
      .get(`http://192.168.1.4:5000/api/v1/users/${idu}`)
      .then((res) => {
        // console.log(dataProfile.profile_image);
        setDataProfile(res.data.data);
      })
      .catch((err) => console.log(err.message));
  });

  //patch profile
  //   const [username, setUsername] = useState("");
  //   const [Email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [profile_image, setProfile_Image] = useState("");

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setProfile_Image(file);
  };

  const handleUpdate = (event) => {
    // console.log(username);
    // console.log(Email);
    // console.log(phone);
    // console.log(password);
    // console.log(profile_image);
    // event.preventDefault();
    // const data = new FormData(event.target);
    // data.append("username", username);
    // data.append("Email", Email);
    // data.append("phone", phone);
    // data.append("address", address);
    // data.append("profile_image", profile_image);
    axios
      .patch(`http:///192.168.1.4:5000/api/v1/users/${idu}`, userData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        ToastAndroid.show("Edit Success", ToastAndroid.SHORT);
      })
      .catch((err) => ToastAndroid.show("Edit Failed", ToastAndroid.SHORT));
  };

  return (
    <ScrollView style={GlobalStyle.bg}>
      <View style={[GlobalStyle.flex, GlobalStyle.justifyCenter]}>
        <Image
          source={{
            uri: `http://192.168.1.4:5000/upload/images/${dataProfile.profile_image}`,
          }}
          style={{
            height: 150,
            width: 150,
            marginTop: 20,
            marginBottom: 20,
            resizeMode: "cover",
            borderRadius: 100,
          }}
        />
      </View>
      <Pressable>
        <Image
          source={require("../../images/editbtn.png")}
          style={{
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
            left: 30,
            top: -55,
          }}
        />
      </Pressable>
      <View style={[style.flexCenter]}>
        <Text style={[GlobalStyle.brown, style.title]}>
          {dataProfile.username}
        </Text>
        <Text style={[GlobalStyle.brown, style.subTitle]}>
          {dataProfile.email}
        </Text>
        <Text style={[GlobalStyle.brown, style.subTitle]}>
          {dataProfile.phone}
        </Text>
        <Text style={[GlobalStyle.brown, style.subTitle]}>
          {dataProfile.address}
        </Text>
      </View>
      <View style={GlobalStyle.mt2per}>
        <SafeAreaView>
          <Text style={[GlobalStyle.grey, style.subTitle]}>Name</Text>
          <TextInput
            style={style.input}
            onChangeText={(e) => setUserData({ ...userData, username: e })}
            placeholder="Fill Your Name"
            // value={username}
          />
          <Text style={[GlobalStyle.grey, style.subTitle]}>Email</Text>
          <TextInput
            style={style.input}
            onChangeText={(e) => setUserData({ ...userData, email: e })}
            placeholder="Fill Your Email"
            // value={text}
          />
          <Text style={[GlobalStyle.grey, style.subTitle]}>Phone Number</Text>
          <TextInput
            style={style.input}
            onChangeText={(e) => setUserData({ ...userData, phone: e })}
            // value={number}
            placeholder="Fill Your Phone"
            keyboardType="numeric"
          />
          <Text style={[GlobalStyle.grey, style.subTitle]}>
            Delivery Address
          </Text>
          <TextInput
            style={style.input}
            onChangeText={(e) => setUserData({ ...userData, address: e })}
            placeholder="Fill Your Delivery Location"
            // value={text}
          />
          <Pressable
            onPress={handleUpdate}
            style={{
              backgroundColor: "#6A4029",
              padding: 22,
              borderRadius: 20,
              marginVertical: 30,
            }}
          >
            {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
            <Text
              color="#F6F6F9"
              align={"center"}
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "white",
                textAlign: "center",
              }}
            >
              Save and Update
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
