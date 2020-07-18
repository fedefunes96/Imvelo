import React from 'react';
import {Image} from 'react-native';
import {styles} from '../../styles/common';

const MoneyIcon = props => (
  <Image
    source={require('../../../assets/money_icon.png')}
    style={[styles.logo_sm, props.style]}
    resizeMode="cover"
  />
);

export default MoneyIcon;
