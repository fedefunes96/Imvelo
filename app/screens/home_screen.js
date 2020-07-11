import React from 'react';
import VideoList from './VideoList';

const HomeScreen = () => <VideoList videos={require('../../assets/videos')} />;

export default HomeScreen;
