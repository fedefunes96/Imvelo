import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './tab_navigator';
import SplashScreen from '../splash_screen';
import Login from '../login_screen';

const getNavigationOptions = () => ({
  headerShown: false,
});

const StackNavigator = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: getNavigationOptions(),
    },
    splash: {
      screen: SplashScreen,
      navigationOptions: getNavigationOptions(),
    },
    tabs: {
      screen: TabNavigator,
      navigationOptions: getNavigationOptions(),
    },
  },
  {},
);

export default StackNavigator;
