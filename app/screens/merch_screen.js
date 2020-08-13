import React from 'react';
import { View, FlatList } from 'react-native';
import { COLORS } from '../config/colors'
import {styles} from '../styles/common';
import Product from './merch/product'
import { Chip } from 'react-native-paper';

const PRODUCTS = require('../../assets/products.json');
const CHIPS = require('../../assets/categories.json');

export default class MerchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: PRODUCTS,
            category: "Everything"
        }
    }

    createChip = (name, selected) => {
        let color = COLORS.black

        if (selected === true) {
            color = COLORS.green
        }

        return (
            <Chip
                mode="outlined"
                icon="check-circle"
                onPress={() => this.chipSelected(name)}
                style={{
                    backgroundColor: COLORS.chip
                }}
                selected={false}
                style={{marginEnd: 8, marginBottom: 8}}
                selectedColor={color}
            >
                {name}
            </Chip>
        );
    }

    onProductPress = (product) => {

    }

    chipSelected = (type) => {
        let filtered_products = []

        for (let product of PRODUCTS) {
            if (product.type == type || type === "Everything") {
                filtered_products.push(product)
            }
        }

        this.setState({
            category: type,
            products: filtered_products
        })
    }
    
    itemSeparator = () => {
        return <View style={styles.productSeparator} />
    }

    render() {  
        return(
            <View>
                <FlatList
                    ListHeaderComponent={
                        <FlatList
                            keyboardShouldPersistTaps={'handled'}
                            bounces={false}
                            horizontal={false}
                            numColumns={3}
                            data={CHIPS}
                            renderItem={({ item, index }) => {
                                    if (item.name === this.state.category) {
                                        return this.createChip(item.name, true)
                                    } else {
                                        return this.createChip(item.name, false)
                                    }
                                }
                            }
                            keyExtractor={item => String(item.id)}  
                            style={styles.chipListContainer}
                        />
                    }
                    stickyHeaderIndices={[0]}
                    keyboardShouldPersistTaps={'handled'}
                    data={this.state.products}
                    bounces={false}
                    renderItem={({ item, index }) =>
                        <Product
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            type={item.type}
                            price={item.price}
                            onProductPress={this.onProductPress.bind(this)}
                        />
                    }
                    keyExtractor={item => String(item.id)}
                    contentContainerStyle={styles.productContentListContainer}
                    style={styles.productListContainer}
                    ItemSeparatorComponent={this.itemSeparator}
                /> 
            </View>
        );
    }  
}
