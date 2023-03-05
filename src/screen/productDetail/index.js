//Default Import
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";

//import Style
import Style from "./style";
import GlobalStyle from "../../style/GlobalStyle";

export default function ProductDetail({ route }) {
  const { id } = route.params;
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.4:5000/api/v1/products/${id}`)
      .then((res) => setProductDetail(res.data.data))
      .catch((err) => console.log(err.message));
  });

  // const img = `http://192.168.1.4:5000/upload/images/${productDetail.images[0].filename}`;

  return (
    <>
      <View style={GlobalStyle.bg}>
        <ScrollView>
          <View style={[GlobalStyle.flex, GlobalStyle.justifyCenter]}>
            <Image
              source={{
                uri: `http://192.168.1.4:5000/upload/images/${
                  productDetail.images ? productDetail.images[0].filename : ""
                }`,
              }}
              style={{
                height: 200,
                width: 200,
                marginTop: 20,
                resizeMode: "contain",
                borderRadius: 50,
                resizeMode: "cover",
              }}
            />
          </View>

          <Image
            source={require("../../images/mark.png")}
            style={{
              width: "100%",
              marginTop: 50,
              marginBottom: 20,
              resizeMode: "contain",
            }}
          />
          <View style={[Style.flexCenter]}>
            <Text
              style={[
                GlobalStyle.black,
                GlobalStyle.bold,
                GlobalStyle.XL,
                Style.title,
              ]}
            >
              {/* {console.log(productDetail.images[0].filename)} */}
              {productDetail.title}
            </Text>
            <Text
              style={[
                GlobalStyle.brown,
                GlobalStyle.semiBold,
                GlobalStyle.L,
                Style.subTitle,
              ]}
            >
              {productDetail.price}
            </Text>
          </View>
          <Text
            style={[
              GlobalStyle.black,
              GlobalStyle.semiBold,
              GlobalStyle.L,
              Style.sectionTitle,
            ]}
          >
            Delivery info
          </Text>
          <Text
            style={[
              GlobalStyle.grey,
              GlobalStyle.semiBold,
              GlobalStyle.M,
              Style.subTitle,
            ]}
          >
            Delivered only on monday until friday from 1 pm to 7 pm
          </Text>
          <Text
            style={[
              GlobalStyle.black,
              GlobalStyle.semiBold,
              GlobalStyle.L,
              Style.sectionContent,
            ]}
          >
            Description
          </Text>
          <Text
            style={[
              GlobalStyle.grey,
              GlobalStyle.semiBold,
              GlobalStyle.M,
              Style.subTitle,
            ]}
          >
            {productDetail.category}
          </Text>
          <View style={[Style.buttonwrap]}>
            <Button
              color="#6A4029"
              title="ADD TO CART"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
