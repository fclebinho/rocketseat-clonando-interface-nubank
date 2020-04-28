import {Animated} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 460px;
  z-index: 5;
`;

export const Swipeable = styled(Animated.View)`
  flex: 1;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
