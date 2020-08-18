import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../styles/common';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome';

const Compilation = props => {
  const {data, onPress} = props;

  return (
    <View style={[styles.wide_tile, {backgroundColor: data.background}]}>
      <FlipCard>
        <Image source={{uri: data.thumb}} style={styles.wide_tile_image} />
        <View style={styles.info_container}>
          <Text style={styles.color_w}>{data.info}</Text>
        </View>
      </FlipCard>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.compilation_title_container, styles.row]}>
          <Text style={styles.compilation_title}>{data.title}</Text>
          <Icon
            name="arrow-circle-right"
            color="white"
            style={styles.go_icon}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Compilation;
