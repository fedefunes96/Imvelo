import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from '../styles/common';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        mapType="satellite"
        zoomEnabled={false}
        minZoomLevel={0}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 80,
          longitudeDelta: 80,
        }}
      />
    </View>
  );
};

export default Map;
