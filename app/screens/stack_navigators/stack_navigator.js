import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './tab_navigator';
import SplashScreen from '../splash_screen';
import Login from '../login_screen';
import HomeScreen from '../home_screen';
import MainScreen from '../main_screen';

const getNavigationOptions = () => ({
  headerShown: false,
});

const StackNavigator = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: getNavigationOptions(),
    },
    tabs: {
      screen: TabNavigator,
      navigationOptions: getNavigationOptions(),
    },
    main: {
      screen: MainScreen,
      navigationOptions: {
        headerTitle: null,
        headerTransparent: true,
        headerTintColor: 'white',
      },
    },
  },
  {},
);

export default StackNavigator;
