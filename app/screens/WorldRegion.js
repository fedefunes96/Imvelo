import React, {useState} from 'react';
import VideoList from './VideoList';
import useCachedVideos from '../hooks/useFetch';
import Loading from './common/loading';

const BASE_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/4-worldscreen/assets/';

const WorldRegion = ({navigation}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buildRegionUrl = () => {
    return `${BASE_URL}videos_region_${navigation.getParam('regionId')}.json`;
  };

  useCachedVideos(buildRegionUrl(), setLoading, setVideos);

  return loading ? (
    <Loading />
  ) : (
    <VideoList videos={videos} navigation={navigation} />
  );
};

export default WorldRegion;
