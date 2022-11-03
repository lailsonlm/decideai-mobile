import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.png'
import { Container } from './styles';
import { MotiImage } from 'moti';

export function Header() {

  const theme = useTheme()
  function handleOpenMenu() {}

  return (
    <Container style={{ paddingTop: StatusBar.currentHeight! + 24 }}>
      <MotiImage 
        source={Logo}
        from={{
          opacity: 0,
          translateY: -5
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          type: 'timing',
          duration: 1000
        }}
      />
      {/* <TouchableOpacity  onPress={handleOpenMenu}>
        <List 
          size={32} 
          color={theme.COLORS.TEXT_PRIMARY}
        />
      </TouchableOpacity> */}
    </Container>
  );
}