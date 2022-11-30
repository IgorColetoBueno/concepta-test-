import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dropdown from "./components/dropdown/Dropdown";

export default function App() {
  return (
    <View style={styles.container}>
      <Dropdown open>a</Dropdown>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
