// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Pressable } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//import screen
import Home from "./src/screen/home";
import Order from "./src/screen/cart";
import ProductDetail from "./src/screen/productDetail";
import Logout from "./src/screen/component/Logout";
import Start from "./src/screen/Auth/start";
import Welcome from "./src/screen/Auth/welcome";
import Login from "./src/screen/Auth/login";
import Register from "./src/screen/Auth/register";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#6A4029",
          },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="productDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
