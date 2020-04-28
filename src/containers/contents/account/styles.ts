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

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitleText = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 17px;
  color: #7a7a7a;
  margin-left: 13px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 17px;
  color: #999;
`;

export const Subtitle = styled.Text`
  font-family: 'AcherusGrotesque-Regular';
  font-size: 37px;
  margin-top: 3px;
  color: #333;
`;
