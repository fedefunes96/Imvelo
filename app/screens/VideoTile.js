import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import {styles} from '../styles/common';
import SidePanel from './common/side_panel';
import Icon from 'react-native-vector-icons/FontAwesome';

const VideoTile = props => {
  return (
      <TouchableWithoutFeedback onPress={props.onPress}>
      <View>
        {props.playing ? (
          <Video
            source={{uri: props.video.source}}
            style={styles.video_tile}
            muted={true}
            resizeMode={'cover'}
            posterResizeMode={'cover'}
            volume={1.0}
            rate={1.0}
            poster={props.video.thumb}
            repeat={true}
          />
        ) : (
          <Image
            source={{uri: props.video.thumb}}
            style={props.wide ? styles.video_wide_tile : styles.video_tile}
            resizeMode={'cover'}
          />
        )}

      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoTile;
