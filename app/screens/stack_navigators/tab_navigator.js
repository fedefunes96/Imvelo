import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ProfileStack from './profile_stack';
import HomeStack from './home_stack';
import {COLORS} from '../../config/colors';
import {FONTS} from '../../config/fonts';
import WorldStack from './world_stack';

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
    World: {
      screen: WorldStack,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.roboto,
            }}>
            World
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <View>
            <FAIcon style={[{color: tintColor}]} size={25} name={'globe'} />
          </View>
        ),
        activeColor: COLORS.white,
        inactiveColor: COLORS.gray,
        barStyle: {backgroundColor: COLORS.opposite},
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
  },
  {
    initialRouteName: 'Home',
    activeColor: COLORS.white,
    inactiveColor: COLORS.gray,
    barStyle: {backgroundColor: COLORS.opposite},
  },
);

export default TabNavigator;
