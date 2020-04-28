import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Description} from './styles';

export interface TransactionFooterProps {
  icon?: string;
}

export const TransactionFooter: React.FC<TransactionFooterProps> = ({
  icon,
  children,
}) => {
  return (
    <Container>
      {icon && <Icon name={icon} size={30} color="#BBBBBB" />}
      <Description>{children}</Description>
      <Icon name="chevron-right" size={30} color="#BBBBBB" />
    </Container>
  );
};

export default TransactionFooter;
