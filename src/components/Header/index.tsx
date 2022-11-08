import React from 'react';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.png'
import { Container } from './styles';
import { MotiImage } from 'moti';

export function Header() {
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
    </Container>
  );
}