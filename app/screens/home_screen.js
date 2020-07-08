import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import VideoList from './VideoList';

const HomeScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <VideoList videos={[]} />;
};

export default HomeScreen;
