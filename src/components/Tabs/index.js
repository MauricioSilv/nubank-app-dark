import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY, darkValue, darkChange}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon
            name="person-add"
            size={24}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="phone-iphone"
            size={24}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="chat-bubble-outline"
            size={24}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="arrow-downward"
            size={24}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="arrow-upward"
            size={24}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color={darkValue ? '#8b10ae' : '#fff'} />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="live-help"
            size={24}
            color={darkValue ? '#8b10ae' : '#fff'}
          />
          <TabText>Me ajuda</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
