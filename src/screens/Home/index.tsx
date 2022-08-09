import React, { useCallback, useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { Participants } from "../../components/Participants";

export default function Home() {
  const [list, setList] = useState<string[]>([]);
  const [listAux, setListAux] = useState<string[]>([]);
  const [newName, setNewName] = useState("");
  const input = useRef(null);

  const onRemoveName = useCallback((name: string) => {
    // const newList = list.filter((listName) => listName !== name);
    // console.log(list.filter((listName) => listName !== name));
    setList((prevState) => prevState.filter((listName) => listName !== name));
  }, []);

  const onAddName = useCallback((name: string) => {
    if (name) {
      setList((list) => [...list, name]);
      setNewName("");
    }
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Nome do evento:</Text>
      <Text style={styles.text}>sábado, 4 de agosto de 2022</Text>

      <View style={styles.contextInput}>
        <TextInput
          ref={input}
          style={styles.textInput}
          placeholder="Digite algo..."
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewName}
          value={newName}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => onAddName(newName)}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      {list.length > 0 && (
        <FlatList
          data={list}
          keyExtractor={(item, i) => String(i)}
          renderItem={({ item }) => (
            <Participants name={item} onRemoveName={onRemoveName} />
          )}
        />
      )}
    </View>
  );
}
