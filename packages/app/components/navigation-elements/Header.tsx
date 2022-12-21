import { useColorScheme } from '@universal/ui/color-scheme';
import { DropdownMenu } from '@universal/ui/dropdown-menu';
import { Text } from '@universal/ui/text';
import { View } from '@universal/ui/view';

const AppBarMenu = () => {
  const { setColorScheme, colorScheme } = useColorScheme();
  return (
    <DropdownMenu
      triggerContent={<Text>Open Menu</Text>}
      items={[
        {
          label: 'Language',
          icon: <Text className='text-2xl'>{'🇺🇸'}</Text>,
          selected: false,
          sub: [
            {
              icon: <Text className='text-xl'>🇺🇸</Text>,
              label: 'English',
              onPress: () => null,
              selected: false,
            },
            {
              icon: <Text className='text-xl'>🇪🇸</Text>,
              label: 'Spanish',
              onPress: () => null,
              selected: false,
            },
          ],
        },
        'separator',
        {
          label: 'Theme',
          icon: <Text className='text-2xl'>{colorScheme === 'light' ? '☀️' : '🌙'}</Text>,
          selected: false,
          sub: [
            {
              icon: <Text className='text-xl font-bold'>🌙</Text>,
              label: 'Dark',
              onPress: () => setColorScheme('dark'),
              selected: colorScheme === 'dark',
            },
            {
              icon: <Text className='text-xl'>☀️</Text>,
              label: 'Light',
              onPress: () => setColorScheme('light'),
              selected: colorScheme === 'light',
            },
          ],
        },
      ]}
    />
  );
};

const Header = () => {
  return (
    <View className='h-16 max-h-16 w-full flex-row items-center justify-between bg-gray-100 pl-5 dark:bg-gray-300'>
      <View className='flex-1 grow-[80] flex-row justify-end pr-5'>
        <AppBarMenu />
      </View>
    </View>
  );
};

export { Header };
