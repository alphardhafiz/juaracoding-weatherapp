import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { s } from "./App.style";
import Input from "./components/Input/Input";
import ButtonConvert from "./components/Button/ButtonConvert";
import DispayText from "./components/DisplayText/DispayText";
import { useState } from "react";

import { convertToCelcius, convertToFahrenheit } from "./utils/temperature";

export default function App() {
  const [input, setInput] = useState(0);
  const [isCelcius, setIsCelcius] = useState(true);
  const [bg, setBg] = useState(hotBackground);

  const toggleUnit = () => {
    setIsCelcius(!isCelcius);
  };

  const changeInput = (text) => {
    setInput(text);
    if (isCelcius) {
      if (text <= 25) {
        setBg(coldBackground);
      } else {
        setBg(hotBackground);
      }
    } else {
      if (text <= 77) {
        setBg(coldBackground);
      } else {
        setBg(hotBackground);
      }
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <ImageBackground source={bg} style={s.background}>
          <View style={s.workspace}>
            <DispayText
              suhu={
                isCelcius ? convertToFahrenheit(input) : convertToCelcius(input)
              }
              unit={isCelcius ? "F" : "C"}
            />
            <Input onChange={changeInput} unit={isCelcius ? "C" : "F"} />
            <ButtonConvert onPress={toggleUnit} />
          </View>
        </ImageBackground>
        <StatusBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
