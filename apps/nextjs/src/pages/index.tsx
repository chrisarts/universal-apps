import { Button } from "@universal/ui/common/Button";
import { View } from "@universal/ui/view";
import { TextInput } from "@universal/ui/text-input";

export default function Web() {
  return (
    <View className="flex-1 justify-center items-center">
      <h1>Web</h1>
      <TextInput />
      <Button className="bg-green-400">
        <span>sadasdasd</span>
      </Button>
    </View>
  );
}
