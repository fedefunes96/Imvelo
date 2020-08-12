import React, {useEffect, useState} from 'react';
import Map from './map';

const REGIONS_URL =
  'https://raw.githubusercontent.com/fedefunes96/Imvelo/4-worldscreen/assets/regions.json';

const WorldScreen = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch(REGIONS_URL);
      setRegions(await response.json());
    };
    fetchRegions();
  });

  return <Map regions={regions} />;
};

export default WorldScreen;
