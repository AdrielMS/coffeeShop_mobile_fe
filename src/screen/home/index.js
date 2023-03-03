//default import
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//import icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//import Style
import GlobalStyle from "../../style/GlobalStyle";
import Style from "./style";

// const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
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
      <View style={[GlobalStyle.my50, Style.card]}>
        {/* <FlatList /> */}
        <Pressable
          onPress={() => {
            navigation.navigate("productDetail");
          }}
        >
          <Image
            source={require("../../images/imageProduct1.png")}
            style={Style.imageProduct}
          />
        </Pressable>
        <Text style={Style.productName}>Hazelnut{`\n`}Latte</Text>
        <Text style={Style.productPrice}>Rp. 15.000</Text>
      </View>
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
