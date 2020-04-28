import React from 'react';
import {Text} from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';

import {CreditCard, Menu} from '~/containers';
import {Content, Container} from './styles';

export const Contents: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <SwipeableViews>
          <CreditCard />
          <Text>World</Text>
        </SwipeableViews>
      </Content>
    </Container>
  );
};

export default Contents;
