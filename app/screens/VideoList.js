import React, {useMemo, useState} from 'react';
import GradientContainer from './common/GradientContainer';
import {styles} from '../styles/common';
import {FlatList, View} from 'react-native';
import VideoTile from './VideoTile';
import {groupInPairs} from '../helpers/arrays';

const VideoList = props => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const groupedVideos = useMemo(() => groupInPairs(props.videos), [
    props.videos,
  ]);

  const renderVideoTile = video => (
    <View style={styles.col} key={video.id}>
      <VideoTile
        video={video}
        onPress={() => setPlayingVideo(video.id)}
        playing={playingVideo === video.id}
      />
    </View>
  );

  const renderVideosRow = videos => (
    <View style={styles.row}>
      {videos.map(video => renderVideoTile(video))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedVideos}
        renderItem={({item}) => renderVideosRow(item)}
        keyExtractor={item => item[0].title}
      />
    </View>
  );
};

export default VideoList;
