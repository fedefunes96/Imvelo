import React from 'react';
import VideoList from './VideoList';

const HomeScreen = ({navigation}) => (
  <VideoList videos={require('../../assets/videos')} navigation={navigation} />
);

export default HomeScreen;
