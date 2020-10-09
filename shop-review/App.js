import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import {getShops } from "./src/lib/firebase";

export default function App() {
  const [shops, setShop] = useState([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShop(shops);
  };

  // apisAreAvailable
  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
