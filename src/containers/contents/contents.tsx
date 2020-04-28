import React, {useCallback} from 'react';
import {Text, Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import SwipeableViews from 'react-swipeable-views-native';

import {CreditCard, Menu} from '~/containers';
import {Content, Container} from './styles';

export interface ContentsProps {
  translateY: Animated.Value;
}

export const Contents: React.FC<translateY> = ({translateY}) => {
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
      <Menu translateY={translateY} />
      <PanGestureHandler
        onGestureEvent={handlerGestureEvent}
        onHandlerStateChange={handlerStateChange}
      >
        <Content
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
          }}
        >
          <SwipeableViews>
            <CreditCard />
            <Text>World</Text>
          </SwipeableViews>
        </Content>
      </PanGestureHandler>
    </Container>
  );
};

export default Contents;
