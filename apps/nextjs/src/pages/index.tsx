import { Button } from '@universal/ui/button';
import { TextInput } from '@universal/ui/text-input';
import { View } from '@universal/ui/view';

export default function Web() {
  return (
    <View className='flex-1 items-center justify-center'>
      <h1>Web</h1>
      <TextInput />
      <Button className='bg-gray-800'>
        <span>sadasdasd</span>
      </Button>
    </View>
  );
}
