import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './tab_navigator';
import SplashScreen from '../splash_screen';
import Login from '../login_screen';

const getNavigationOptions = () => ({
  navigationOptions: {
    headerShown: false,
  },
});

const StackNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
      ...getNavigationOptions(),
    },
    login: {
      screen: Login,
      ...getNavigationOptions(),
    },
    tabs: {
      screen: TabNavigator,
      ...getNavigationOptions(),
    },
  },
  {},
);

export default StackNavigator;
