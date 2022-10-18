import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from "@apollo/client";
import { Home } from './src/screens/Home';
import light from './src/theme/light';
import { client } from './src/services/apollo';

export default function App() {
  return (
    <ThemeProvider theme={light}>
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