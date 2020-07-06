import {styles} from '../../styles/common';
import {Image} from 'react-native';
import React from 'react';

const ImveloLogo = () => (
  <Image
    source={require('../../../assets/imvelo_logo.png')}
    style={styles.logo}
  />
);

export default ImveloLogo;
