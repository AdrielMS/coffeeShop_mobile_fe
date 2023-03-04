import { Text, View, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logout({ navigation }) {
  return (
    <View>
      <Pressable
        onPress={() => {
          AsyncStorage.removeItem("@userData");
          alert("logouted");
          navigation.navigate("Start");
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
