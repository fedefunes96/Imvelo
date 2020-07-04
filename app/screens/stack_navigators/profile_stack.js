import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from '../profile_screen'
import { COLORS } from '../../config/colors'
import { FONTS } from '../../config/fonts'

export default ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profile',
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