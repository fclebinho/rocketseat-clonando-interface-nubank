import React from 'react';
import {Animated} from 'react-native';

import {Container, Scroll} from './styles';

export interface ToolbarProps {
  translateY: Animated.Value;
}

export const Toolbar: React.FC<ToolbarProps> = ({children, translateY}) => {
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
      }}
    >
      <Scroll>{children}</Scroll>
    </Container>
  );
};

export default Toolbar;
