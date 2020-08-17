import React from 'react';
import Video from 'react-native-video';
import {styles} from '../styles/common';
import {View, Image} from 'react-native';
import MoneyIcon from './common/MoneyIcon';
import ImveloButton from './common/imvelo_button';

const MainScreen = ({navigation}) => {
  const video = navigation.getParam('video');

  return (
    <View style={styles.container}>
      <Video
        source={{uri: video.source}}
        style={styles.background_video}
        resizeMode="cover"
        volume={1.0}
        rate={1.0}
        repeat={true}
      />
      <MoneyIcon style={styles.top_right_corner} />
      <ImveloButton />
      <Image source={require('../../assets/chromecast.png')}
            style={{...styles.top_right_corner, top: 100, width: 50, height: 35}} />
    </View>
  );
};

export default MainScreen;
