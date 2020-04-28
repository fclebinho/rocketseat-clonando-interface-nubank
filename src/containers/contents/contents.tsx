import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';

import {CreditCard, Account, Rewards} from '~/containers';
import {Bullets, BulletItem} from './styles';

export const Contents: React.FC = () => {
  const [selected, setSelected] = useState(0);

  const handleSelection = (index: number, type: 'move' | 'end'): void =>
    setSelected(Math.trunc(index));

  return (
    <>
      <SwipeableViews onSwitching={handleSelection} index={selected}>
        <CreditCard />
        <Account />
        <Rewards />
      </SwipeableViews>
      <Bullets>
        <TouchableWithoutFeedback onPress={() => setSelected(0)}>
          <BulletItem active={selected === 0} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setSelected(1)}>
          <BulletItem active={selected === 1} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setSelected(2)}>
          <BulletItem active={selected === 2} />
        </TouchableWithoutFeedback>
      </Bullets>
    </>
  );
};

export default Contents;
