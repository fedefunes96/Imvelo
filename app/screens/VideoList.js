import React, {useMemo} from 'react';
import GradientContainer from './common/GradientContainer';
import {styles} from '../styles/common';
import {FlatList, View} from 'react-native';
import VideoTile from './VideoTile';
import {groupInPairs} from '../helpers/arrays';

const VideoList = props => {
  const groupedVideos = useMemo(
    () => groupInPairs(props.videos), [props.videos]
  );

  const renderVideoTile = video => (
    <View style={styles.col}>
      <VideoTile video={video} />
    </View>
  );

  const renderVideosRow = videos => (
    <View style={styles.row}>
      {videos.map(video => renderVideoTile(video))}
    </View>
  );

  return (
    <GradientContainer style={styles.container}>
      <FlatList
        data={groupedVideos}
        renderItem={({item}) => renderVideosRow(item)}
        keyExtractor={item => item[0].title}
      />
    </GradientContainer>
  );
};

export default VideoList;
