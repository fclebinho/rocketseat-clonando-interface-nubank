import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Content = styled(Animated.View)`
  flex: 1;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
