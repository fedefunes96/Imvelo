import React from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {styles} from '../styles/common';

const Map = props => {
  const renderMarker = marker => (
    <Marker coordinate={marker.coordinates} key={marker.id}>
      <View style={styles.map_marker}>
        <Image source={{uri: marker.thumb}} />
      </View>
    </Marker>
  );

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
        }}>
        {props.regions.map(region => renderMarker(region))}
      </MapView>
    </View>
  );
};

export default Map;
