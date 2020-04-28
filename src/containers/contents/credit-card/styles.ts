import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 25px;
`;

export const Detail = styled.View`
  flex: 1;
`;

export const Bar = styled.View`
  width: 10px;
  background: #ffaa24;
  border-radius: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 17px;
  margin-left: 13px;
  color: #7a7a7a;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Footer = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 16px;
  color: #06bcca;
  text-transform: uppercase;
`;

export const Amount = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 36px;
  margin-top: 3px;
  color: #06bcca;
  text-transform: uppercase;
`;

export const Subtitle = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 16px;
  margin-top: 3px;
  color: #333;
`;

export const Description = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 14px;
  color: #333;
`;
