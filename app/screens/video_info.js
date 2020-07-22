import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../styles/common';

const VideoInfo = props => (
  <View style={[styles.video_tile, styles.video_info]}>
    <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.color_w}>{props.video.description}</Text>
    </ScrollView>
  </View>
);

export default VideoInfo;
