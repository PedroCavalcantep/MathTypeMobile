import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View styles={styles.container}>
      <Text>dasdasdas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
  },
});
