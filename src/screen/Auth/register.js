import axios from "axios";
import { useState } from "react";
import { Pressable, TextInput, ToastAndroid, View } from "react-native";
import { Text } from "../../style/commons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

export default function Register() {
  const [formRegister, setFormRegister] = useState({
    username: "",
    password: "",
  });
  const handleRegister = ({ navigation }) => {
    axios({
      // url: "http://192.168.1.4:5000/api/v1/auth/register",
      url: "https://coffeeshopbe-adrel-production.up.railway.app/api/v1/auth/register",
      method: "post",
      data: formRegister,
    })
      .then((res) => {
        ToastAndroid.show("Register Success.", ToastAndroid.SHORT);
        navigation.navigate("Login");
      })
      .catch((err) => {
        ToastAndroid.show("Register Failed.", ToastAndroid.SHORT);
        console.log(err.response);
      });
  };
  return (
    <>
      <View style={{ padding: 15 }}>
        <Image
          source={require("../../images/register.png")}
          alignSelf={"center"}
          style={{
            width: "50%",
            height: "50%",
            zIndex: 2,
            resizeMode: "contain",
          }}
        />
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Username</Text>
          <TextInput
            onChangeText={(text) =>
              setFormRegister({ ...formRegister, username: text })
            }
            placeholder="Input username"
            style={{
              padding: 15,
              width: "100%",
              borderBottomWidth: 1,
              borderColor: "#c4c4c4",
              paddingLeft: 0, // padding left hilangin default rn
            }}
            selectionColor={"brown"}
            autoCapitalize={"none"}
            // placeholderTextColor='#f0f0f0'
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Password</Text>
          <TextInput
            onChangeText={(text) =>
              setFormRegister({ ...formRegister, password: text })
            }
            placeholder="Input password"
            style={{
              padding: 15,
              width: "100%",
              borderBottomWidth: 1,
              borderColor: "#c4c4c4",
              paddingLeft: 0, // padding left hilangin default rn
            }}
            selectionColor={"brown"}
            secureTextEntry={true}
            autoCapitalize={"none"}
            // placeholderTextColor='#f0f0f0'
          />
        </View>
        {/* <View style={{ marginBottom: 25 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Phone</Text>
          <TextInput
            onChangeText={(text) =>
              setFormRegister({ ...formRegister, password: text })
            }
            placeholder="Input phone"
            style={{
              padding: 15,
              width: "100%",
              borderBottomWidth: 1,
              borderColor: "#c4c4c4",
              paddingLeft: 0, // padding left hilangin default rn
            }}
            selectionColor={"brown"}
            secureTextEntry={true}
            autoCapitalize={"none"}
            // placeholderTextColor='#f0f0f0'
          />
        </View> */}
        <Pressable
          onPress={handleRegister}
          style={{
            backgroundColor: "#6A4029",
            padding: 22,
            borderRadius: 20,
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
            Sign up
          </Text>
        </Pressable>
      </View>
    </>
  );
}
