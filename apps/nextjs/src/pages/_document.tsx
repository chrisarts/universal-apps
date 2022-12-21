import * as React from 'react';
import { AppRegistry } from 'react-native';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const reactNativeWebStyles = `
html, body, #__next {
  -webkit-overflow-scrolling: touch;
}
#__next {
  display: flex;
  flex-direction: column;
  height: 100%;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}
body {
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
  `;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('Main', () => Main);
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const styles = [
      <style
        key='react-native-style'
        dangerouslySetInnerHTML={{ __html: reactNativeWebStyles }}
      />,
      getStyleElement(),
    ];
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, styles: React.Children.toArray(styles) };
  }
  render() {
    return (
      <Html style={{ height: '100%', width: '100%' }}>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </Head>
        <body style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
