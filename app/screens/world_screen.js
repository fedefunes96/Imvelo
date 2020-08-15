import React, {useEffect, useState} from 'react';
import Map from './map';

const REGIONS_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/master/assets/regions.json';

const WorldScreen = ({navigation}) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch(REGIONS_URL);
      setRegions(await response.json());
    };
    fetchRegions();
  });
  return (
    <Map
      regions={regions}
      onRegionPress={regionId => navigation.navigate('Videos', {regionId})}
    />
  );
};

export default WorldScreen;
