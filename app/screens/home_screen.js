import React, {useEffect, useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from '../styles/common';
import GradientContainer from './common/GradientContainer';
import SplashScreen from 'react-native-splash-screen';
import {isEven} from '../helpers/numeric';
import VideoTile from './VideoTile';

const HomeScreen = props => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const groupedVideos = useMemo(
    () =>
      props.videos.reduce((result, value, index, array) => {
        if (isEven(index)) {
          result.push(array.slice(index, index + 2));
        }
        return result;
      }, []),
    [props.videos],
  );

  return (
    <GradientContainer style={styles.container}>
      <ScrollView>
        {groupedVideos.map(videosPair => (
          <View style={styles.row}>
            <View style={styles.col}>
              <VideoTile video={videosPair[0]} />
            </View>
            <View style={styles.col}>
              <VideoTile video={videosPair[1]} />
            </View>
          </View>
        ))}
      </ScrollView>
    </GradientContainer>
  );
};

export default HomeScreen;
