import React, {useState} from 'react';
import FlipCard from 'react-native-flip-card';
import VideoTile from './VideoTile';
import VideoInfo from './video_info';
import VideoFooter from './video_footer';
import {View} from 'react-native';
import {styles} from '../styles/common';
import {Surface} from 'react-native-paper';

const Video = props => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Surface style={styles.video_container}>
      <View>
        <FlipCard flip={flipped}>
          {/* Face Side */}
          <VideoTile
            video={props.video}
            onPress={props.onPress}
            playing={props.playing}
          />
          {/* Back Side */}
          <VideoInfo video={props.video} />
        </FlipCard>
        <VideoFooter video={props.video} onSwitch={() => setFlipped(!flipped)} />
      </View>
    </Surface>
  );
};

export default Video;
