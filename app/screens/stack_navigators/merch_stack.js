import { createStackNavigator } from 'react-navigation-stack';
import MerchScreen from '../merch_screen'
import { COLORS } from '../../config/colors'
import { FONTS } from '../../config/fonts'

export default MerchStack = createStackNavigator(
    {
        Merch: {
            screen: MerchScreen,
            navigationOptions: {
                title: 'Products',
                headerStyle: {
                    backgroundColor: COLORS.opposite,
                },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontFamily: FONTS.roboto
                },
            }
        }
    },
    {
    }
)
