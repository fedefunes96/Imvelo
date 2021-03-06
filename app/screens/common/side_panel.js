import {styles} from '../../styles/common';
import React, {useRef, useState} from 'react';
import {Animated, View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../config/colors';
import {Button} from 'react-native-paper';

const DEFAULT_BACKGROUND_COLOR = 'rgba(30,30,30,0.78)';
const HIDDEN_BACKGROUND_COLOR = 'rgba(30,30,30,0)';

const SidePanel = props => {
  const slideAnim = useRef(new Animated.Value(10)).current;
  const [showing, setShowing] = useState(false);
  const [backgroundColor, setbackgroundColor] = useState(
    HIDDEN_BACKGROUND_COLOR,
  );

  const slideIn = () => {
    setShowing(true);
    Animated.spring(slideAnim, {
      toValue: 30,
      duration: 1000,
      useNativeDriver: false,
    }).start(setbackgroundColor(DEFAULT_BACKGROUND_COLOR));
  };

  const slideOut = () => {
    setShowing(false);
    Animated.spring(slideAnim, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => setbackgroundColor(HIDDEN_BACKGROUND_COLOR));
  };

  return (
    <Animated.View
      style={[
        styles.video_side_info,
        {
          width: slideAnim.interpolate({
            inputRange: [10, 30],
            outputRange: ['10%', '30%'],
          }),
          backgroundColor,
        },
      ]}>
      {!showing && (
        <TouchableWithoutFeedback onPress={slideIn}>
          <View
            style={[
              styles.right_center,
              {
                backgroundColor: COLORS.opposite,
                width: 30,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              },
            ]}>
            <Icon name="caret-left" size={30} color={'white'} />
          </View>
        </TouchableWithoutFeedback>
      )}
      {showing && props.children}
      {showing && <Button color="white" mode="contained" onPress={slideOut}>Cerrar</Button>}
    </Animated.View>
  );
};

export default SidePanel;
