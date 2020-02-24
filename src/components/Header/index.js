import React from 'react';
import {Switch} from 'react-native';
import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header({darkValue, darkChange}) {
  return (
    <Container>
      <Switch
        value={darkValue}
        onValueChange={darkChange}
        thumbColor="#bd93f9"
        trackColor="#3333"
      />
      <Top>
        <Logo source={logo} />
        <Title>Maurício</Title>
      </Top>
      <Icon
        name="keyboard-arrow-down"
        size={20}
        color={darkValue ? '#8b10ae' : '#fff'}
      />
    </Container>
  );
}
