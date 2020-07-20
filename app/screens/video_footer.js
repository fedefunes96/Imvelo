import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/common';

const VideoFooter = ({video}) => (
  <View style={styles.video_footer}>
    <Text style={styles.color_w}>{video.title}</Text>
    <Text style={styles.video_subtitle}>{video.subtitle}</Text>
  </View>
);

export default VideoFooter;
