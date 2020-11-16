import React from "react";
import { View, StyleSheet,Text } from "react-native";
import {FontAwesome } from "@expo/vector-icons";
type Props = {
    score: number;
    starSize?: number;// ?をつけることで、任意の値を後から入れることが出来るようになる。
    textSize?: number;
};
export const Stars: React.FC<Props> = ({score,starSize=16,textSize=14,})=> {
    return (
        <View style={styles.container}>
            <FontAwesome name="star"  style={[styles.star,{fontSize:starSize}]} />
            <FontAwesome name="star"  style={[styles.star,{fontSize:starSize}]} />
            <FontAwesome name="star"  style={[styles.star,{fontSize:starSize}]} />
            <FontAwesome name="star"  style={[styles.star,{fontSize:starSize}]} />
            <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
            <Text style={[styles.scoreText,{fontSize:textSize}]}>{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    alignItems:"center",},
    star: {
        color: "#800",
        marginRight:4,
    },
    scoreText:{
        color:"#000",
        fontWeight:"bold"
    }

});





