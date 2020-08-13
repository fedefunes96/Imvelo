import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStack from './profile_stack';
import HomeStack from './home_stack';
import MerchStack from './merch_stack';
import {COLORS} from '../../config/colors';
import {FONTS} from '../../config/fonts';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.roboto,
            }}>
            Home
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.roboto,
            }}>
            Profile
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
        activeColor: COLORS.white,
        inactiveColor: COLORS.gray,
        barStyle: {backgroundColor: COLORS.opposite},
      },
    },
    Merch: {
      screen: MerchStack,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.roboto,
            }}>
            Products
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
          </View>
        ),
        activeColor: COLORS.white,
        inactiveColor: COLORS.gray,
        barStyle: {backgroundColor: COLORS.opposite},
      },
    },    
  },
  {
    initialRouteName: 'Home',
    activeColor: COLORS.white,
    inactiveColor: COLORS.gray,
    barStyle: {backgroundColor: COLORS.opposite},
  },
);

export default TabNavigator;
