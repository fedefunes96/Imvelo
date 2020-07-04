import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './tab_navigator'
import SplashScreen from '../splash_screen'

export default StackNavigator = createStackNavigator(
    {
        splash: {
            screen: SplashScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        tabs: {
            screen: TabNavigator,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
    }
);
