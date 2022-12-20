import { Button } from '@chrisarts/universal/button';
import { TextInput } from '@chrisarts/universal/text-input';
import { View } from '@chrisarts/universal/view';

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
