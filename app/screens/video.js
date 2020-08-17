import React, {useState} from 'react';
import FlipCard from 'react-native-flip-card';
import VideoTile from './VideoTile';
import VideoInfo from './video_info';
import VideoFooter from './video_footer';
import {Text, View} from 'react-native';
import {styles} from '../styles/common';
import {Surface} from 'react-native-paper';
import {Image} from 'react-native';
import getDangerImageSource from "../helpers/getDangerImage";
import SidePanel from "./common/side_panel";
import Icon from "react-native-vector-icons/FontAwesome";


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
        {!flipped && <Image style={{...styles.top_right_corner, height: 60, width: 40, hidden: true}}
               source={image}
        />}
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
    </Surface>
  );
};

export default Video;
