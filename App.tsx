import React from 'react';

import {HomeScreen} from '@screens';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme';

function App(): React.JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
