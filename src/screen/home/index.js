//default import
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import react, { useEffect, useState } from "react";

//import icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//import Style
import GlobalStyle from "../../style/GlobalStyle";
import Style from "./style";
import ProductDetail from "../productDetail";

//import Component
// import Logout from "../component/Logout";

// const Drawer = createDrawerNavigator();

export default function Home({ route, navigation }) {
  // console.log(idu);
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.4:5000/api/v1/products`)
      .then((res) => {
        setDataProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <View style={GlobalStyle.py30}>
      <View
        style={[
          GlobalStyle.flex,
          GlobalStyle.justifyEnd,
          GlobalStyle.py10,
          GlobalStyle.px50,
        ]}
      >
        <View style={[GlobalStyle.flex, GlobalStyle.justifyEvenly]}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            paddingHorizontal={10}
            color="gray"
          />
          <Ionicons
            name="search"
            size={24}
            paddingHorizontal={10}
            color="gray"
          />
          <AntDesign
            name="shoppingcart"
            size={24}
            paddingHorizontal={10}
            color="gray"
          />
        </View>
      </View>
      <View>
        <Text
          style={[
            GlobalStyle.textWhite,
            GlobalStyle.textHome,
            GlobalStyle.py10,
            GlobalStyle.px50,
          ]}
        >
          A good coffee is{`\n`}a good day
        </Text>
        <Text
          style={[GlobalStyle.py10, GlobalStyle.primaryColor, GlobalStyle.px50]}
        >
          Favorite Product
        </Text>
      </View>
      <FlatList
        horizontal
        data={dataProduct}
        renderItem={({ item }) => {
          return (
            <View style={[GlobalStyle.my50, GlobalStyle.mr10, Style.card]}>
              {/* <FlatList /> */}
              <Pressable
                onPress={() => {
                  navigation.navigate("productDetail", { id: item.id });
                }}
              >
                <Image
                  source={{
                    uri: `http://192.168.1.4:5000/upload/images/${item.images[0].filename}`,
                  }}
                  style={Style.imageProduct}
                />
              </Pressable>
              <Text style={Style.productName}>{item.title}</Text>
              <Text style={Style.productPrice}>{item.price}</Text>
            </View>
          );
        }}
      />
      {/* <Logout /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#FFF",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   textWhite: {
//     color: "#000",
//   },
//   textHome: {
//     fontSize: 34,
//   },
// });
