import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyB18pMYmP0cWl_nt3JORHBcS49kTl4jBXQ",
    authDomain: "shop-review-1.firebaseapp.com",
    databaseURL: "https://shop-review-1.firebaseio.com",
    projectId: "shop-review-1",
    storageBucket: "shop-review-1.appspot.com",
    messagingSenderId: "260457446972",
    appId: "1:260457446972:web:5ec17ede874ab7bd960d39",
    measurementId: "G-EVEDM55L4T",
  };

  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  useEffect(() => {
    getFirebaseItems();
  }, []);
  const [shops, setShop] = useState([]);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data());
    console.log(shops);
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
