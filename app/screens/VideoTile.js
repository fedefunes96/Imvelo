import React from 'react';
import Video from 'react-native-video';

const VideoTile = props => (
  <Video
    source={props.video.source}
    style={props.wide ? {width: 350, height: 200} : {width: 175, height: 200}}
    muted={true}
    paused={true}
    resizeMode={'cover'}
    volume={1.0}
    rate={1.0}
    ignoreSilentSwitch={'obey'}
  />
);

export default VideoTile;
