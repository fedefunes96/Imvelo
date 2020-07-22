import React, {useEffect, useState} from 'react';
import VideoList from './VideoList';
import convertToProxyURL from 'react-native-video-cache';
import Loading from './common/loading';

const VIDEOS_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/master/assets/videos.json?token=AEVUE2OZ6TIXJFL47GLVBH27DC4XC';

const HomeScreen = ({navigation}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const response = await fetch(VIDEOS_URL);
      const rawVideos = await response.json();
      const cachedVideos = await Promise.all(
        rawVideos.map(async video => {
          const newSource = await convertToProxyURL(video.source);
          const newThumb = await convertToProxyURL(video.thumb);
          return {...video, source: newSource, thumb: newThumb};
        }),
      );
      setVideos(cachedVideos);
      setLoading(false);
    };
    fetchVideos();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <VideoList videos={videos} navigation={navigation} />
  );
};

export default HomeScreen;
