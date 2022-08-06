import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Participants() {
  return (
    <View style={styles.contextInput}>
      <Text style={styles.text}>testando</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
