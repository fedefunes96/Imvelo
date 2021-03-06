import {styles} from '../../styles/common';
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {COLORS} from '../../config/colors';

const Product = props => {
    const onItemPress = () => {
        let product = {
            id: props.id,
            description: props.description,
            name: props.name,
            image: props.image,
            price: props.price,
            type: props.price
        }

        props.onProductPress(product)
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
