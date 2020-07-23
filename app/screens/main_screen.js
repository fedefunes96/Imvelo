import React, {useState} from 'react';
import Video from 'react-native-video';
import {styles} from '../styles/common';
import {View} from 'react-native';
import MoneyIcon from './common/MoneyIcon';
import ImveloButton from './common/imvelo_button';
import {getVideoBySource} from '../helpers/utils';
import Loading from './common/loading';

const MainScreen = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const video = navigation.getParam('video');

  return (
    <View style={styles.container}>
      {!loaded && <Loading />}
      <Video
        onLoad={() => setLoaded(true)}
        source={getVideoBySource(video.source)}
        style={styles.background_video}
        resizeMode="cover"
        volume={1.0}
        rate={1.0}
        repeat={true}
      />
      {loaded && (
        <React.Fragment>
          <MoneyIcon style={styles.top_right_corner} />
          <ImveloButton />
        </React.Fragment>
      )}
    </View>
  );
};

export default MainScreen;
