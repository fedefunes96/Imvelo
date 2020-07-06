import React from 'react';
import { View, Animated } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { COLORS } from '../config/colors'

const splashImage = require('../../assets/splash.png')
const TIME = 2200;
const FADEIN_DURATION = 0.3
const ANIMATION_DURATION = 2000

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fadeIn: new Animated.Value(FADEIN_DURATION)
        }
    }

    async componentDidMount() {
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start()

        setTimeout( () => {
            this.setTimePassedSuccesfully();
        }, TIME);
    }

    setTimePassedSuccesfully() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'login' })],
          });

        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return(
            <View style={
                {
                    flex: 1,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }>
                <Animated.Image
                    style={
                        {
                            flex: 1,
                            resizeMode: 'contain',
                            opacity: this.state.fadeIn
                        }
                    }
                    source={splashImage}
                />
            </View>
        );
    }
}
