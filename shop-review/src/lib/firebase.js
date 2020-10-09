import * as firebase from "firebase";
import "firebase/firestore";
import Constants from "expo-constants";

if (!firebase.apps.length) {
    const firebaseConfig = {
    apiKey: "AIzaSyB18pMYmP0cWl_nt3JORHBcS49kTl4jBXQ",
    authDomain: "shop-review-1.firebaseapp.com",
    databaseURL: "https://shop-review-1.firebaseio.com",
    projectId: "shop-review-1",
    storageBucket: "shop-review-1.appspot.com",
    messagingSenderId: "260457446972",
    appId: "1:260457446972:web:5ec17ede874ab7bd960d39",
    measurementId: "G-EVEDM55L4T"
      }
    firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data());
     return shops;
};
  
