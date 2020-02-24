import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Tabs from '~/components/Tabs';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main({darkValue, darkChange}) {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header darkValue={darkValue} darkChange={darkChange} />
      <Content>
        <Menu
          translateY={translateY}
          darkValue={darkValue}
          darkChange={darkChange}
        />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon
                name="attach-money"
                size={28}
                color={darkValue ? '#8b10ae' : '#666'}
              />
              <Icon
                name="visibility-off"
                size={28}
                color={darkValue ? '#8b10ae' : '#666'}
              />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 200.866,40</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 50,00 recebida de Mauricio da silva pereira
                às 08:00hrs.
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs
        translateY={translateY}
        darkValue={darkValue}
        darkChange={darkChange}
      />
    </Container>
  );
}
