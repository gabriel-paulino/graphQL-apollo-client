import { View, Text, Image } from "react-native";
import styles from "./styles";

export interface ICardProps {
    card: {
      id: number;
      name: string;
      image: string;
      gender: string;
    };
  }

export default function Card({card}: ICardProps){
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <View style={styles.imageDescriptionContainer}>
        <Text style={styles.text}>{`${card.name}, ${card.gender}`}</Text>
      </View>
    </View>
  );
}
