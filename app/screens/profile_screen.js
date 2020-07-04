import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../config/colors'

export default class ProfileScreen extends React.Component {  
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
                <Text>
                    Un perfil divino
                </Text>
            </View>
        );
    }  
}
