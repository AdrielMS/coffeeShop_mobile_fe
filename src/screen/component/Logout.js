import { Text, View, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyle from "../../style/GlobalStyle";

export default function Logout({ navigation }) {
  return (
    <View
      style={[
        GlobalStyle.flex,
        GlobalStyle.justifyCenter,
        GlobalStyle.alignCenter,
      ]}
    >
      <Pressable
        onPress={() => {
          AsyncStorage.removeItem("@userData");
          alert("You've been Log Out");
          navigation.navigate("Start");
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
