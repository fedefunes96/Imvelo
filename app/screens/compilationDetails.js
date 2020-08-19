import React, {useState, useMemo} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from '../styles/common';
import Video from 'react-native-video';
import useCachedVideos from '../hooks/useFetch';
import Loading from './common/loading';

const BASE_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/master/assets/';

const CompilationDetails = props => {
  const {navigation} = props;
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(0);

  const currentVideo = useMemo(() => videos[current] || {}, [videos, current]);

  const buildUrl = () =>
    `${BASE_URL}compilation_${navigation.getParam('compilationId')}.json`;

  useCachedVideos(buildUrl(), setLoading, setVideos);

  const getNextVideoIndex = () => (current + 1) % videos.length;

  return loading ? (
    <Loading />
  ) : (
    <View style={[styles.container]}>
      <Video
        source={{uri: currentVideo.source}}
        style={styles.main_video}
        resizeMode="contain"
        volume={1.0}
        poster={currentVideo.thumb}
        rate={1.0}
        onEnd={() => setCurrent(getNextVideoIndex())}
      />
      <View style={styles.main_video_desc_container}>
        <Text style={styles.main_video_title}>
          Koala educational information
        </Text>
        <Text style={styles.main_video_subtitle}>By Imvelo</Text>
      </View>

      <Text>Up Next</Text>

      <ScrollView>
        {videos.map((video, index) =>
          index !== current ? (
            <Image style={styles.wide_tile_image} source={video.thumb} />
          ) : null,
        )}
      </ScrollView>
    </View>
  );
};

export default CompilationDetails;
