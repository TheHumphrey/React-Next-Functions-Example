import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@app/Hooks/useAuth';

import light from '@app/styles/themes/light';
import GlobalStyle from '@app/styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
