import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'

const data = [
    {
        'key': '1',
        'name': 'name',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '2',
        'name': 'nama 2',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': '134,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '3',
        'name': 'shirt',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,450',
        'deskripsi': 'baju murah'
    },
    {
        'key': '4',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '5',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '6',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '7',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '8',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '9',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
]

class FlatListItem extends Component {
    render() {
        return (
            <View style={styles.parentCard}>
                <Text>{this.props.item.name}</Text>
                <View style={styles.imageWrap}>
                    <Image 
                        style={styles.productImage}
                        resizeMode="cover"
                        source={require('../assets/konsep-kaos.jpg')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentCard: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F5F5F5',
    },
    productImage: {
        flex: 1,
    },
    imageWrap: {
        width: '80%',
        height: 200,
        backgroundColor: 'blue',
        margin: 20,
    }
})


export default class Card extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} />
                        )
                    }}
                />
            </View>
        )
    }
}
