import { StyleSheet } from "react-native";

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textWhite: {
    color: "#000",
  },
  textHome: {
    fontSize: 34,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  alignCenter: {
    alignItems: "center",
  },
  py10: {
    paddingVertical: 10,
  },
  py30: {
    paddingVertical: 30,
  },
  px10: {
    paddingHorizontal: 10,
  },
  mr10: {
    marginRight: 10,
  },
  my50: {
    marginVertical: 50,
  },
  px50: {
    paddingHorizontal: 50,
  },
  pl50: {
    paddingLeft: 50,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  primaryColor: {
    color: "#6A4029",
  },
  absolute: {
    position: "absolute",
  },
  bg: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  brown: {
    color: "#6A4029",
  },
  black: {
    color: "#323232",
  },
  grey: {
    color: "#727272",
  },
  regular: {
    fontWeight: "500",
  },
  semiBold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "700",
  },
  XL: {
    fontSize: 28,
  },
  L: {
    fontSize: 24,
  },
  M: {
    fontSize: 18,
  },
  S: {
    fontSize: 14,
  },
  XS: {
    fontSize: 12,
  },
});

export default GlobalStyle;
