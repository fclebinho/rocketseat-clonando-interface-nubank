import React, {useCallback} from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {Header, Toolbar, ToolbarItem} from '~/components';
import {Menu, Contents} from '~/containers';

import {Container, Content, Swipeable} from './styles';

export const Main: React.FC = () => {
  const translateY = new Animated.Value(0);
  let offset = 0;

  const handlerGestureEvent = useCallback(
    Animated.event(
      [
        {
          nativeEvent: {
            translationY: translateY,
          },
        },
      ],
      {useNativeDriver: true},
    ),
    [],
  );

  const handlerStateChange = useCallback((event) => {
    console.log('passei');
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        offset = 0;
        translateY.setOffset(0);
        translateY.setValue(offset);
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
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={handlerGestureEvent}
          onHandlerStateChange={handlerStateChange}>
          <Swipeable
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
            <Contents />
          </Swipeable>
        </PanGestureHandler>
      </Content>
      <Toolbar translateY={translateY}>
        <ToolbarItem icon="person-add">Indicar amigos</ToolbarItem>
        <ToolbarItem icon="chat-bubble-outline">Cobrar</ToolbarItem>
        <ToolbarItem icon="arrow-downward">Depositar</ToolbarItem>
        <ToolbarItem icon="arrow-upward">Transferir</ToolbarItem>
        <ToolbarItem icon="lock">Bloquear cartão</ToolbarItem>
      </Toolbar>
    </Container>
  );
};

export default Main;
