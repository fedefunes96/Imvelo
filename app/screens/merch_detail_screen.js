import React from 'react';
import { View, Image, Text } from 'react-native';
import {styles} from '../styles/common';
import { Button } from 'react-native-paper';

export default class MerchDetailScreen extends React.Component {
    product = this.props.navigation.state.params.product

    render() {  
        return(
            <View style={styles.productDetailView}>
                <View style={styles.productDetailImageBox}>
                    <Image
                        style={styles.productDetailImage}
                        source={{uri: this.product.image}}
                    />
                </View>
                <Text
                    style={styles.productDetailName}
                >
                    {this.product.name}
                </Text>
                <Text
                    style={styles.productDetailDescription}
                >
                    {this.product.description}
                </Text> 
                <Button 
                    icon="cart"
                    mode="contained"
                    style={styles.productDetailButton}
                    labelStyle={styles.productDetailTextButton}
                    onPress={() => console.log('Buy')}
                >
                    BUY NOW ${this.product.price}
                </Button>                
            </View>
        );
    }  
}
