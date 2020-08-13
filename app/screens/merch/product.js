import {styles} from '../../styles/common';
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {COLORS} from '../../config/colors';

const Product = props => {
    const onItemPress = () => {
        props.onProductPress(props.id)
    }

    return (
        <TouchableHighlight 
            onPress={onItemPress}
            style={styles.productTouchableContainer}
            underlayColor={'darkslategrey'}
        >
            <View style={styles.productContainer}> 
                <Image
                    style={styles.productImage}
                    source={{uri: props.image}}
                />            
                <View style={styles.productTextContainer}>
                    <Text 
                        style={styles.productTitle}
                    >
                        {props.name}
                    </Text>
                    <Text 
                        style={styles.productDescription}
                    >
                        {props.description}
                    </Text> 
                    <Text 
                        style={styles.productPrice}
                    >
                        ${props.price}
                    </Text>                                    
                </View>
            </View>   
        </TouchableHighlight>
    )
};

export default Product;
