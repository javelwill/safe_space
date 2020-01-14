import React from 'react';
import {Provider as BountyProvider} from './src/context/BountyContext';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import BountyListScreen from './src/screens/BountyListScreen';
import BountyDetailScreen from './src/screens/BountyDetailScreen';
import BountyTipScreen from './src/screens/BountyTipScreen';
import BountyTipStatusScreen from './src/screens/BountyTipStatusScreen';
import BountyFundScreen from './src/screens/BountyFundScreen';
import BountyFundStatusScreen from './src/screens/BountyFundStatusScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  BountyList: BountyListScreen,
  BountyDetail: BountyDetailScreen,
  BountyTip: BountyTipScreen,
  BountyTipStatus: BountyTipStatusScreen,
  BountyFund: BountyFundScreen,
  BountyFundStatus: BountyFundStatusScreen,
}, {
  initialRouteName: 'Home'
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <BountyProvider>
      <App />
    </BountyProvider>
  );
};
