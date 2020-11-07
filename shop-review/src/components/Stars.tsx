import React from "react";
import { View, StyleSheet ,Text} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


type Props = {
    // ?をつけるときは、任意の値を入れる事ができるようになる
  score: number;
  starSize?: number;
  textSize?: number;
};

export const Stars: React.FC<Props> = ({
    score, starSize = 16, textSize = 14,
    
}:Props) => {
    return (<View style={styles.container} >
        <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
        <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
        <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
        <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
        <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
        <Text style={[styles.scoreText, { fontSize: textSize }]}>{score}</Text>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    star: {
        color: "#000",
        marginRight:4,
    },
    scoreText: {
        color: "#000",
        fonwtWeight:"bold",
    },
}); 