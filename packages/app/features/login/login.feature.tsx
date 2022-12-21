import { TextInput } from '@universal/ui/text-input';
import { View } from '@universal/ui/view';

const LoginScreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-gray-800/50'>
      <View className='w-1/2 rounded-xl bg-gray-100/70 p-5'>
        <TextInput />
        <TextInput />
      </View>
    </View>
  );
};

export { LoginScreen };
