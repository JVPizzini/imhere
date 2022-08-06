import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    // alignItems: "center",
    paddingTop: 48,
    paddingHorizontal: 20,
    // justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#6b6b6b",
    fontSize: 15,
  },
  textInput: {
    paddingHorizontal: 10,
    backgroundColor: "#1f1e25",
    color: "#fff",
    borderRadius: 15,
    height: 56,
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: "#66ff66",

    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  textButton: {
    color: "#009933",
    fontSize: 30,
    fontWeight: "bold",
  },
  contextInput: {
    marginTop: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
