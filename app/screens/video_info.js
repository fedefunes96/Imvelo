import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/common';

const VideoInfo = props => (
  <View style={[styles.video_tile, styles.video_info]}>
    <Text style={styles.color_w}>{props.video.description}</Text>
  </View>
);

export default VideoInfo;
