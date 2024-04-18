import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Task } from "@/app/(days)/day15/todo";

type NewTaskInput = {
  onAdd: (newTask: Task) => void;
};

const NewTaskInput = ({ onAdd }: NewTaskInput) => {
  const [newTask, setNewTask] = useState("");
  return (
    <View style={styles.taskContainer}>
      <MaterialCommunityIcons
        name="checkbox-blank-circle-outline"
        size={24}
        color="dimgray"
      />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Todo..."
        onEndEditing={() => {
            if (!newTask) {
                return
            }
          onAdd({ title: newTask, isFinished: false });
          setNewTask("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    // borderWidth: 1,
    // borderColor: 'gray',
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  input: {
    fontFamily: "InterSemi",
    fontSize: 15,
    color: "dimgray",
    flex: 1,
  },
});

export default NewTaskInput;
