import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {LoginScreen} from './src/screens';
import {theme} from './theme';

function App(): React.JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
