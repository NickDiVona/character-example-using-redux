import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Character from "./components/character";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

export default function App() {
  const myStore = configureStore();

  return (
    <Provider store={myStore}>
      <View style={styles.container}>
        <Character />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
