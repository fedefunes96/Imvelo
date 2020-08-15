import React, {useState} from 'react';
import {styles} from '../styles/common';
import {FlatList, View} from 'react-native';
import Video from './video';

const VideoList = props => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const onViewRef = React.useRef(({viewableItems}) => {
    setPlayingVideo(viewableItems[0].item.id);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  const onPressVideo = video => {
    props.navigation.navigate('main', {video});
  };

  const renderVideoRow = video => (
    <View style={[styles.row, styles.m_10]}>
      <View style={[styles.col, styles.pd_5]} key={video.id}>
        <Video
          video={video}
          onPress={() => onPressVideo(video)}
          playing={playingVideo === video.id}
        />
      </View>
    </View>
  );

  return (
    <View style={[styles.container, styles.align_items_center]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        data={props.videos}
        renderItem={({item}) => renderVideoRow(item)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default VideoList;
