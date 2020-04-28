import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';

import {TransactionFooter} from '~/components';
import {
  Container,
  Header,
  HeaderTitle,
  HeaderTitleText,
  Content,
  Title,
  Subtitle,
} from './styles';

export const Account: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <IconFeather name="database" size={20} color="#666" />
          <HeaderTitleText>Conta</HeaderTitleText>
        </HeaderTitle>
        <IconFeather name="eye-off" size={24} color="#666" />
      </Header>
      <Content>
        <Title>Saldo disponível</Title>
        <Subtitle>R$ 9,92</Subtitle>
      </Content>
      <TransactionFooter icon="credit-card">
        Compra em Distribuidora de Bebid de R$ 8,00 no débito sexta
      </TransactionFooter>
    </Container>
  );
};

export default Account;
