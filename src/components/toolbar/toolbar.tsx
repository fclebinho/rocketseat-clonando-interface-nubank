import React from 'react';

import {Container, Scroll} from './styles';

export const Toolbar: React.FC = ({children}) => {
  return (
    <Container>
      <Scroll>{children}</Scroll>
    </Container>
  );
};

export default Toolbar;
