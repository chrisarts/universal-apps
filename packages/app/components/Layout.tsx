import type { ReactNode } from 'react';
import { View } from '@universal/ui/view';
import { Header } from './navigation-elements/Header';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <View className='h-full w-full flex-1'>
      <Header />
      <View className='h-full w-full flex-1'>{children}</View>
    </View>
  );
};

export { Layout };
