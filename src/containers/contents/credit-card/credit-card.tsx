import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Content,
  Footer,
  Title,
  Subtitle,
  Description,
} from './styles';

export const CreditCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </Header>
      <Content>
        <Title>Saldo disponível</Title>
        <Subtitle>R$ 197.611,65</Subtitle>
      </Content>
      <Footer>
        <Description>
          Transferência de R$ 200,00 recebida de Diego Peres hoje às 06:00h
        </Description>
      </Footer>
    </Container>
  );
};

export default CreditCard;
