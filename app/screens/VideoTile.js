import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import {styles} from '../styles/common';
import {Surface} from 'react-native-paper';

const VideoTile = props => {
  return (
    <Surface style={styles.video_container}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        {props.playing ? (
          <Video
            source={{uri: props.video.source}}
            style={props.wide ? styles.video_wide_tile : styles.video_tile}
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
      </TouchableWithoutFeedback>
    </Surface>
  );
};

export default VideoTile;
