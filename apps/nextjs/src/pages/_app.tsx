import { Roboto } from '@next/font/google';
import { AppShellProvider } from '@universal/app/providers/AppShell.provider';
import { trpc } from '@universal/app/utils/trpc';
import { View } from '@universal/ui/view';
import Head from 'next/head';
import '../styles/global.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto',
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Universal app</title>
        <meta name='description' content='Universal Web App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <View className={`${roboto.variable} font-roboto flex-1`}>
        <AppShellProvider>
          <Component {...pageProps} />
        </AppShellProvider>
      </View>
    </>
  );
}

export default trpc.withTRPC(App);
