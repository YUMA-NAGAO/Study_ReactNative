import React from "react";
import { View,StyleSheet,Image,Text ,Dimensions} from "react-native";
 
// types
import { Shop } from "../types/shop";

import { Stars } from "./Stars";
 
const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;
 
 
type Props = {
    shop: Shop;
};
 
export const ShopReviewItem: React.FC<Props> = ({ shop }: Props) => {
    const { name, place, imageUrl, score } = shop;
    return <View style={styles.container}>
        <Image source={{uri:imageUrl}}style={styles.image} />
        <Text>{name}</Text>
        <Text>{place}</Text>
        <Stars score={score} />
    </View>;
}
 
const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        padding:16,
    },
    image: {
        width: IMAGE_WIDTH,
        height:IMAGE_WIDTH*0.7,
    }
});