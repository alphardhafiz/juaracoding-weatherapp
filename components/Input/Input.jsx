import React from "react";
import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";

const Input = ({ onChange,unit }) => {
  return (
    <View style={s.root}>
      <TextInput
        maxLength={3}
        style={s.input}
        placeholder="Masukan Temperature :"
        onChangeText={(text) => onChange(text)}
      ></TextInput>
      <Text style={s.unit}>&deg;{unit}</Text>
    </View>
  );
};

export default Input;
