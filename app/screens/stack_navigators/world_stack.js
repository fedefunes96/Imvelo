import {createStackNavigator} from 'react-navigation-stack';

import {COLORS} from '../../config/colors';
import {FONTS} from '../../config/fonts';
import WorldScreen from '../world_screen';
import WorldRegion from '../WorldRegion';

export default createStackNavigator(
  {
    World: {
      screen: WorldScreen,
      navigationOptions: {
        title: 'World',
        headerStyle: {
          backgroundColor: COLORS.opposite,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: FONTS.roboto,
        },
      },
    },
    Videos: {
      screen: WorldRegion,
      navigationOptions: {
        title: 'Region',
        headerStyle: {
          backgroundColor: COLORS.opposite,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: FONTS.roboto,
        },
      },
    },
  },
  {},
);
