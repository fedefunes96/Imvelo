import React, {useMemo, useState} from 'react';
import {styles} from '../styles/common';
import {FlatList, View} from 'react-native';
import VideoTile from './VideoTile';
import {groupRandomly} from '../helpers/arrays';
import GradientContainer from './common/GradientContainer';

const VideoList = props => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const groupedVideos = useMemo(() => groupRandomly(props.videos), [
    props.videos,
  ]);

  const renderVideoTile = video => (
    <View style={[styles.col, styles.pd_5]} key={video.id}>
      <VideoTile
        video={video}
        onPress={() => setPlayingVideo(video.id)}
        playing={playingVideo === video.id}
      />
    </View>
  );

  const renderWideVideoTile = video => (
    <VideoTile
      video={video}
      onPress={() => setPlayingVideo(video.id)}
      playing={playingVideo === video.id}
      wide
    />
  );

  const renderVideosRow = videos => (
    <View style={[styles.row, styles.m_10]}>
      {videos.length > 1
        ? videos.map(video => renderVideoTile(video))
        : renderWideVideoTile(videos[0])}
    </View>
  );

  return (
    <View style={[styles.container, styles.align_items_center]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={groupedVideos}
        renderItem={({item}) => renderVideosRow(item)}
        keyExtractor={item => item[0].title}
      />
    </View>
  );
};

export default VideoList;
