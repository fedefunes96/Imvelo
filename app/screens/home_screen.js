import React, {useState} from 'react';
import VideoList from './VideoList';
import Loading from './common/loading';
import useCachedVideos from '../hooks/useFetch';

const VIDEOS_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/master/assets/videos.json?token=AEVUE2OZ6TIXJFL47GLVBH27DC4XC';

const HomeScreen = ({navigation}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useCachedVideos(VIDEOS_URL, setLoading, setVideos);

  return loading ? (
    <Loading />
  ) : (
    <VideoList videos={videos} navigation={navigation} />
  );
};

export default HomeScreen;
