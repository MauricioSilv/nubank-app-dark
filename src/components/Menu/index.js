import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButtom,
  SignOutText,
} from './styles';

export default function Menu({translateY, darkValue, darkChange}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://nubank.com.br/"
          size={80}
          color="#8b10ae"
          backgroundColor={darkValue ? '#333' : '#fff'}
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon
            name="help-outline"
            size={20}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon
            name="person-outline"
            size={20}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon
            name="credit-card"
            size={20}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon
            name="smartphone"
            size={20}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButtom onPress={() => {}}>
        <SignOutText>SAIR DO APP</SignOutText>
      </SignOutButtom>
    </Container>
  );
}
