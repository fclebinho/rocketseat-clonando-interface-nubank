import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {Main} from '~/pages';

export const Routes = createAppContainer(createSwitchNavigator({Main}));

export default Routes;
