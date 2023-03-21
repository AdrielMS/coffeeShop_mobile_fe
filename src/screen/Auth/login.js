import axios from "axios";
import { useState } from "react";
import { Pressable, TextInput, ToastAndroid, View } from "react-native";
import { Text } from "../../style/commons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

const Login = ({ navigation }) => {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const handleLogin = () => {
    axios({
      // url: "http://192.168.1.4:5000/api/v1/auth/login",
      url: "https://coffeeshopbe-adrel-production.up.railway.app/api/v1/auth/login",
      method: "post",
      data: formLogin,
    })
      .then((res) => {
        AsyncStorage.setItem("@userData", JSON.stringify(res.data.data));
        ToastAndroid.show("Login Success.", ToastAndroid.SHORT);
        console.log(res.data.data.user.id);
        navigation.navigate("Root", { idu: res.data.data.user.id });
      })
      .catch((err) => {
        ToastAndroid.show("Login Failed.", ToastAndroid.SHORT);
        console.log(err.response);
      });
  };
  return (
    <View style={{ padding: 15 }}>
      <Image
        source={require("../../images/login.png")}
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
            setFormLogin({ ...formLogin, username: text })
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
            setFormLogin({ ...formLogin, password: text })
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
      <View style={{ marginBottom: 45 }}>
        <Text color="#6A4029" style={{ fontSize: 16, fontWeight: "bold" }}>
          Forgot Password?
        </Text>
      </View>
      <Pressable
        onPress={handleLogin}
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
          Login
        </Text>
      </Pressable>
    </View>
  );
};
export default Login;
