import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: { alignSelf: "stretch", justifyContent: "center" },
  input: {
    backgroundColor: "white",
    height: 50,
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: 20,
  },
  unit: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingRight: 25,
    fontSize: 30,
  },
});
