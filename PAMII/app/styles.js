import { StyleSheet } from "react-native";
import { toggleTheme } from "./index.js";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    overflow: "scroll",
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderColor: "#61dafb",
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#61dafb",
  },
  textTwo: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },

  button: {
    backgroundColor: "#green",
    padding: 10,
    borderRadius: 5,
  },

  scroolView: {
    flex: 1,
    backgroundColor: "#000",
  },

  input: {
    height: 40,
    borderColor: "#61dafb",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#61dafb",
    marginBottom: 10,
  },
});

export default styles;
