import React, {useEffect, useState} from 'react';
import VideoList from './VideoList';
import convertToProxyURL from 'react-native-video-cache';

const VIDEOS_URL = "https://firebasestorage.googleapis.com/v0/b/imvelo-ac4e9.appspot.com/o/videos.json?alt=media&token=8050a750-9eb5-47c9-96e1-b90ab9baa4c3";

const HomeScreen = ({navigation}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
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
    };
    fetchVideos();
  }, []);

  return <VideoList videos={videos} navigation={navigation} />;
};

export default HomeScreen;
