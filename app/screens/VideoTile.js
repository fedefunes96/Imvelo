import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import {styles} from '../styles/common';
import SidePanel from './common/side_panel';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getVideoBySource} from '../helpers/utils';

const VideoTile = props => {
  return (
      <TouchableWithoutFeedback onPress={props.onPress}>
      <View>
        {props.playing ? (
          <Video
            source={getVideoBySource(props.video.source)}
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
        <SidePanel>
          <View>
            <View style={[styles.row, styles.align_items_center, styles.pd_5]}>
              <Icon name="paw" color="white" style={{paddingRight: 5}} />
              <Text style={styles.color_w}>Especie</Text>
            </View>
            <Text style={styles.text_description}>{props.video.specie}</Text>

            <View style={[styles.row, styles.align_items_center, styles.pd_5]}>
              <Icon name="arrows-v" color="white" style={{paddingRight: 5}} />
              <Text style={styles.color_w}>Altura</Text>
            </View>
            <Text style={styles.text_description}>{props.video.height}</Text>

            <View style={[styles.row, styles.align_items_center, styles.pd_5]}>
              <Icon name="balance-scale" color="white" style={{paddingRight: 5}} />
              <Text style={styles.color_w}>Peso</Text>
            </View>
            <Text style={styles.text_description}>{props.video.weight}</Text>

            <View style={[styles.row, styles.align_items_center, styles.pd_5]}>
              <Icon name="tag" color="white" style={{paddingRight: 5}} />
              <Text style={styles.color_w}>Nombre</Text>
            </View>
            <Text style={styles.text_description}>{props.video.name}</Text>

            <View style={[styles.row, styles.align_items_center, styles.pd_5]}>
              <Icon name="exclamation-triangle" color="white" style={{paddingRight: 5}} />
              <Text style={styles.color_w}>Peligroso?</Text>
            </View>
            <Text style={styles.text_description}>{props.video.danger}</Text>
          </View>
        </SidePanel>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoTile;
