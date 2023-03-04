import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: 220,
    left: 50,
    height: 270,
    borderRadius: 40,
  },
  imageProduct: {
    left: 25,
    position: "absolute",
    top: -50,
    width: 168,
    height: 189,
    borderRadius: 50,
  },
  productName: {
    top: 160,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  productPrice: {
    top: 170,
    fontSize: 17,
    textAlign: "center",
  },
});

export default Style;
