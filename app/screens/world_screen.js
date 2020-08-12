import React, {useEffect, useState} from 'react';
import Map from './map';

const REGIONS_URL = '';

const WorldScreen = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const {data} = await fetch(REGIONS_URL);
      setRegions(data);
    };
    fetchRegions();
  });

  return <Map regions={regions} />;
};

export default WorldScreen;
