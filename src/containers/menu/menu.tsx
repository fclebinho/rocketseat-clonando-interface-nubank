import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  BarCode,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutText,
} from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <BarCode>
        <QRCode
          value="http://plussoftware.com.br"
          size={80}
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </BarCode>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutText>SAIR DO APP</SignOutText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
