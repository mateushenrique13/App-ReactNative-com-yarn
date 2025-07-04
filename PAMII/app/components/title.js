import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(props) {
  return <Text style={styles.title}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#61dafb",
  },
});
