import React, {useEffect, useState} from 'react';
import VideoList from './VideoList';
import convertToProxyURL from 'react-native-video-cache';

const HomeScreen = ({navigation}) => {
  const [videos, setVideos] = useState(require('../../assets/videos'));

  useEffect(() => {
    const cacheVideos = async () => {
      const cachedVideos = await Promise.all(
        videos.map(async video => {
          const newSource = await convertToProxyURL(video.source);
          const newThumb = await convertToProxyURL(video.thumb);
          return {...video, source: newSource, thumb: newThumb};
        }),
      );
      setVideos(cachedVideos);
    };
    cacheVideos();
  }, []);

  return <VideoList videos={videos} navigation={navigation} />;
};

export default HomeScreen;
