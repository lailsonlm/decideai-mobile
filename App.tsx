import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from "@apollo/client";
import { Home } from './src/screens/Home';
import light from './src/theme/light';
import dark from './src/theme/dark';
import { client } from './src/services/apollo';

export default function App() {
  const deviceTheme = useColorScheme()
  const theme = deviceTheme === 'light' ? light : dark

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Home />

        <StatusBar 
          barStyle="default"
          backgroundColor="transparent"
          translucent
        />
      </ApolloProvider>
    </ThemeProvider>
  );
}