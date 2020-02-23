import React from 'react';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {ThemeProvider} from 'styled-components';

import defaultTheme from '~/themes/default';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
    <Routes />
  </ThemeProvider>
);

export default App;
