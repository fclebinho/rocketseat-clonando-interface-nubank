import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {TransactionFooter} from '~/components';
import {
  Container,
  Box,
  Bar,
  Detail,
  Header,
  HeaderTitle,
  Content,
  Title,
  Subtitle,
  Amount,
} from './styles';

export const CreditCard: React.FC = () => {
  return (
    <Container>
      <Box>
        <Detail>
          <Header>
            <Icon name="credit-card" size={28} color="#999" />
            <HeaderTitle>Cartão de crédito</HeaderTitle>
          </Header>
          <Content>
            <Title>Fatura Atual</Title>
            <Amount>R$ 347,16</Amount>
            <Subtitle>
              Limite disponível{' '}
              <Text
                style={{
                  fontFamily: 'AcherusGrotesque-Regular',
                  color: '#94C42C',
                }}>
                R$ 115,95
              </Text>
            </Subtitle>
          </Content>
        </Detail>
        <Bar />
      </Box>
      <TransactionFooter icon="shopping-cart">
        Compra mais recente em Giassi Supermecado no valor de R$ 39,41 domingo
      </TransactionFooter>
    </Container>
  );
};

export default CreditCard;
