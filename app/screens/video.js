import React, {useState} from 'react';
import FlipCard from 'react-native-flip-card';
import VideoTile from './VideoTile';
import VideoInfo from './video_info';
import VideoFooter from './video_footer';
import {View} from 'react-native';
import {styles} from '../styles/common';
import {Surface} from 'react-native-paper';
import {Image} from 'react-native';
import getDangerImageSource from "../helpers/getDangerImage";


const Video = props => {
  const [flipped, setFlipped] = useState(false);

  const image = getDangerImageSource(props.video.dangerLevel);
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
        <Image style={{...styles.top_right_corner, height: 60, width: 40}}
               source={image}
        />
      </View>
    </Surface>
  );
};

export default Video;
