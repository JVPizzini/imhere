import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

//interdaces and types
type Props = {
  name: string;
  onRemoveName: (name: string) => void;
};

export function Participants({ name, onRemoveName }: Props) {
  return (
    <View style={styles.contextInput}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => onRemoveName(name)}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
