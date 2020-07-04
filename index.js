/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';  
import StackNavigator from './app/screens/stack_navigators/stack_navigator'

const App = createAppContainer(StackNavigator);
AppRegistry.registerComponent(appName, () => App);
