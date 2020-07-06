import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {MAIN_GRADIENT_COLORS} from '../../config/colors';
import {styles} from '../../styles/common';

const GradientContainer = props => (
  <LinearGradient colors={MAIN_GRADIENT_COLORS} style={styles.container}>
    {props.children}
  </LinearGradient>
);

export default GradientContainer;
