import { List } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components';
import { Image, TouchableOpacity, StatusBar } from 'react-native';

import Logo from '../../assets/logo.png'
import { Container } from './styles';

export function Header() {

  const theme = useTheme()
  function handleOpenMenu() {}

  return (
    <Container style={{ paddingTop: StatusBar.currentHeight! + 24 }}>
      <Image 
        source={Logo}
      />
      <TouchableOpacity  onPress={handleOpenMenu}>
        <List 
          size={32} 
          color={theme.COLORS.TEXT_PRIMARY}
        />
      </TouchableOpacity>
    </Container>
  );
}