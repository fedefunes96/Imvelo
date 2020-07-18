import React from 'react';
import {Image, View} from 'react-native';
import {styles} from '../../styles/common';

const ImveloButton = props => (
  <View style={[styles.imvelo_logo_outter, styles.bottom_center]}>
    <View style={styles.imvelo_logo_inner}>
      <Image
        source={require('../../../assets/imvelo_logo.png')}
        style={styles.logo_xsm}
      />
    </View>
  </View>
);

export default ImveloButton;
