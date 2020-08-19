import React, {useState, useMemo} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from '../styles/common';
import Video from 'react-native-video';
import useCachedVideos from '../hooks/useFetch';
import Loading from './common/loading';
import {Switch, TouchableRipple} from 'react-native-paper';

const BASE_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/master/assets/';

const CompilationDetails = props => {
  const {navigation} = props;
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const currentVideo = useMemo(() => videos[current] || {}, [videos, current]);

  const buildUrl = () =>
    `${BASE_URL}compilation_${navigation.getParam('compilationId')}.json`;

  useCachedVideos(buildUrl(), setLoading, setVideos);

  const getNextVideoIndex = () =>
    autoplay ? (current + 1) % videos.length : current;

  return loading ? (
    <Loading />
  ) : (
    <View style={[styles.container]}>
      <ScrollView>
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

        <View style={styles.up_next_container}>
          <Text style={styles.subtitle}>Up Next</Text>
          <View style={[styles.row, styles.align_items_center]}>
            <Text>AutoPlay</Text>
            <Switch
              value={autoplay}
              onValueChange={() => setAutoplay(!autoplay)}
            />
          </View>
        </View>

        <View style={styles.align_items_center}>
          {videos.map((video, index) =>
            index !== current ? (
              <View
                style={styles.up_next_image_container}
                key={`image-${index}`}>
                <TouchableRipple onPress={() => setCurrent(index)}>
                  <Image
                    style={styles.up_next_image}
                    source={{uri: video.thumb}}
                    resizeMode="cover"
                  />
                </TouchableRipple>
              </View>
            ) : null,
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompilationDetails;
