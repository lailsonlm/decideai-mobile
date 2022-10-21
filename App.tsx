import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from "@apollo/client";
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts as useFontsSuez, SuezOne_400Regular } from '@expo-google-fonts/suez-one';

import light from './src/theme/light';
import dark from './src/theme/dark';
import { client } from './src/services/apollo';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  const deviceTheme = useColorScheme()
  const theme = deviceTheme === 'light' ? light : dark

  const [isFontsLoaded] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  const [isFontSuezLoaded] = useFontsSuez({ SuezOne_400Regular })

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>

      { isFontSuezLoaded || isFontsLoaded ? <Routes /> : <Loading /> }

        <StatusBar 
          barStyle="default"
          backgroundColor="transparent"
          translucent
        />
      </ApolloProvider>
    </ThemeProvider>
  );
}