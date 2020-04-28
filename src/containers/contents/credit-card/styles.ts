import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Footer = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Subtitle = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #333;
`;
