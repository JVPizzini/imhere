import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participants } from "../../components/Participants";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Nome do evento:</Text>
      <Text style={styles.text}>sábado, 4 de agosto de 2022</Text>

      <View style={styles.contextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo..."
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Participants />
      <Participants />
      <Participants />
    </View>
  );
}
