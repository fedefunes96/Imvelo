import Compilations from '../compilations';
import CompilationDetails from '../compilationDetails';
import {COLORS} from '../../config/colors';
import {FONTS} from '../../config/fonts';
import {createStackNavigator} from 'react-navigation-stack';

export default createStackNavigator({
  Compilations: {
    screen: Compilations,
    navigationOptions: {
      title: 'Compilations',
      headerStyle: {
        backgroundColor: COLORS.opposite,
      },
      headerTintColor: COLORS.white,
      headerTitleStyle: {
        fontFamily: FONTS.roboto,
      },
    },
  },
  CompilationDetails: {
    screen: CompilationDetails,
    navigationOptions: {
      title: 'Compilation',
      headerStyle: {
        backgroundColor: COLORS.opposite,
      },
      headerTintColor: COLORS.white,
      headerTitleStyle: {
        fontFamily: FONTS.roboto,
      },
    },
  },
});
