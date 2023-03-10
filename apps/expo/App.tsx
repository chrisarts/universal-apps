import { StyleSheet, Text, View } from "react-native";
import { Button } from "@universal/ui/common/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button className="bg-green-500 p-2" onPress={() => null}>
        <Text className='text-amber-700'>sadasd</Text>
      </Button>
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
