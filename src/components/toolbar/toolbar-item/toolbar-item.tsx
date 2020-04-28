import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Description} from './styles';

export interface ToolbarItemProps {
  icon: string;
}

export const ToolbarItem: React.FC<ToolbarItemProps> = ({children, icon}) => {
  return (
    <Container>
      <Icon name={icon} size={24} color="#fff" />
      <Description>{children}</Description>
    </Container>
  );
};

export default ToolbarItem;
