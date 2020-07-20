import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableRipple from 'react-native-paper/src/components/TouchableRipple/index.native';

const VideoFooter = props => {
  const {video} = props;
  const [switched, setSwitched] = useState(false);

  const onSwitch = () => {
    setSwitched(!switched);
    props.onSwitch();
  };

  return (
    <View style={styles.video_footer}>
      <View style={[styles.row, styles.space_between, styles.align_items_center]}>
        <View style={styles.col}>
          <Text style={styles.color_w}>{video.title}</Text>
          <Text style={styles.video_subtitle}>{video.subtitle}</Text>
        </View>
        <TouchableRipple onPress={onSwitch}>
          <Icon
            name={switched ? 'video-camera' : 'info-circle'}
            color="white"
            size={20}
          />
        </TouchableRipple>
      </View>
    </View>
  );
};

export default VideoFooter;
