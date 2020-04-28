import React from 'react';
import {Animated} from 'react-native';

import {Header, Toolbar, ToolbarItem} from '~/components';
import {Contents} from '~/containers';

import {Container} from './styles';

export const Main: React.FC = () => {
  const translateY = new Animated.Value(0);

  return (
    <Container>
      <Header />
      <Contents translateY={translateY} />
      <Toolbar translateY={translateY}>
        <ToolbarItem icon="person-add">Indicar amigos</ToolbarItem>
        <ToolbarItem icon="chat-bubble-outline">Cobrar</ToolbarItem>
        <ToolbarItem icon="arrow-downward">Depositar</ToolbarItem>
        <ToolbarItem icon="arrow-upward">Transferir</ToolbarItem>
        <ToolbarItem icon="lock">Bloquear cartão</ToolbarItem>
      </Toolbar>
    </Container>
  );
};

export default Main;
