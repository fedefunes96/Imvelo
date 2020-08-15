import {useEffect} from 'react';
import convertToProxyURL from 'react-native-video-cache';

const useCachedVideos = (url, setLoading = () => {}, setData = () => {}) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const rawData = await response.json();
      const cachedData = await Promise.all(
        rawData.map(async video => {
          const newSource = await convertToProxyURL(video.source);
          const newThumb = await convertToProxyURL(video.thumb);
          return {...video, source: newSource, thumb: newThumb};
        }),
      );
      setData(cachedData);
      setLoading(false);
    };
    fetchData();
  }, []);
};

export default useCachedVideos;
