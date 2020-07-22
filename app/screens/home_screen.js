import React, {useEffect, useState} from 'react';
import VideoList from './VideoList';
import convertToProxyURL from 'react-native-video-cache';
import Loading from './common/loading';

const VIDEOS_URL =
  'https://arqsoft-tp2-africa-by-tito.s3.amazonaws.com/tdp1/data.json';

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
