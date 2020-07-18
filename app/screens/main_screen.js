import React from 'react';
import Video from 'react-native-video';
import {styles} from '../styles/common';

const MainScreen = ({navigation}) => {
  const video = navigation.getParam('video');

  return (
    <Video
      source={{uri: video.source}}
      style={styles.background_video}
      resizeMode="cover"
      volume={1.0}
      rate={1.0}
      repeat={true}
    />
  );
};

export default MainScreen;
