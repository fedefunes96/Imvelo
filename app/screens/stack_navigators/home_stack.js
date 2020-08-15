import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../home_screen';
import {COLORS} from '../../config/colors';
import {FONTS} from '../../config/fonts';
import MainScreen from '../main_screen';

export default (HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
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
));
