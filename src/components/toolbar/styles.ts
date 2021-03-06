import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  showsHorizontalScrollIndicator: false,
})``;
