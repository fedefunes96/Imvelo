import React from 'react';
import {ActivityIndicator, Portal} from 'react-native-paper';
import GradientContainer from './GradientContainer';
import ImveloLogo from './ImveloLogo';

const Loading = () => (
  <GradientContainer>
    <ImveloLogo />
    <ActivityIndicator animating={true} color="white" />
  </GradientContainer>
);

export default Loading;
