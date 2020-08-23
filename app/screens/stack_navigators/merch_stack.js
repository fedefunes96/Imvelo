import { createStackNavigator } from 'react-navigation-stack';
import MerchScreen from '../merch_screen'
import { COLORS } from '../../config/colors'
import { FONTS } from '../../config/fonts'
import MerchDetailScreen from '../merch_detail_screen'

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
        },
        Details: {
            screen: MerchDetailScreen,
            navigationOptions: {
                title: 'Details',
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
