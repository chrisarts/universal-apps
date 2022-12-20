import { View } from "@universal/ui/view";
import { Button } from "@universal/ui/common/Button";
import { TextInput } from "@universal/ui/text-input";
import { Text } from "@universal/ui/text";

export default function App() {
  return (
    <View className="justify-center flex-1 items-center">
      <TextInput />
      {/* <Button className="bg-green-500 p-2" onPress={() => null}>
        <Text className="text-amber-700">sadasd</Text>
      </Button> */}
    </View>
  );
}

