import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';

import Main from '~/pages/Main';
import {ThemeProvider} from 'styled-components';

import defaultTheme from '~/themes/default';
import darkTheme from '~/themes/dark';

export default function App() {
  const [dark, setDark] = useState(false);

  function onModeDark() {
    setDark(!dark);
  }

  return (
    <ThemeProvider theme={dark ? darkTheme : defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={
          dark ? darkTheme.backgroundContent : defaultTheme.backgroundContent
        }
      />
      <Main darkValue={dark} darkChange={onModeDark} />
    </ThemeProvider>
  );
}
