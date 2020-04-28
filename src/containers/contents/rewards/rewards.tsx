import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Content,
  Title,
  Subtitle,
  ActiveButton,
  ActiveButtonText,
  Footer,
} from './styles';

export const Rewards: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconFeather name="gift" size={28} color="#666" />
      </Header>
      <Content>
        <Title>Nubank Rewards</Title>
        <Subtitle>
          Acumule pontos que nunca expiram e troque por passagens aéreas ou
          serviços que você realmente usa
        </Subtitle>
      </Content>
      <Footer>
        <ActiveButton>
          <ActiveButtonText>Ative o seu rewards</ActiveButtonText>
        </ActiveButton>
      </Footer>
    </Container>
  );
};

export default Rewards;
