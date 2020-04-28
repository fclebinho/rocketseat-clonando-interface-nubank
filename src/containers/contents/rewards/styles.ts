import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  align-items: center;
  font-family: 'AcherusGrotesque-Regular';
  font-size: 26px;
  color: #222222;
  padding: 20px 0;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-family: 'AcherusGrotesque-Regular';
  font-size: 16px;
  margin-top: 3px;
  color: #333;
`;

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 45px;
`;

export const ActiveButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #82259e;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 22px 0;
  width: 100%;
`;

export const ActiveButtonText = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 14px;
  text-transform: uppercase;
  color: #82259e;
`;
