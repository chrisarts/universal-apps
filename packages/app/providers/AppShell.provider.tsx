import type { ReactNode } from 'react';
import { ColorSchemeProvider } from '@universal/ui/color-scheme';
import { Layout } from '../components/Layout';

interface IAppShellProviderProps {
  children: ReactNode;
}

const AppShellProvider = ({ children }: IAppShellProviderProps) => {
  return (
    <ColorSchemeProvider>
      <Layout>{children}</Layout>
    </ColorSchemeProvider>
  );
};

export { AppShellProvider };
