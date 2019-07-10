import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'

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
        'image': 'https://static1.fashionbeans.com/wp-content/uploads/2018/09/streetwear-best-top-3.jpg',
        'harga': '134,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '3',
        'name': 'shirt',
        'image': 'https://image.dhgate.com/0x0p/f2/albu/g6/M00/B5/E1/rBVaSFskoLWAHYl4AAGDVvLEn1c837.jpg',
        'harga': 'RP.130,450',
        'deskripsi': 'baju murah'
    },
    {
        'key': '4',
        'name': 'namedd',
        'image': 'https://traxonsky.com/wp-content/uploads/2017/04/Jordan.jpg',
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
]

class FlatListItem extends Component {

    render() {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={() => {
                this.props.navigation.navigate('DetailProduct', this.props.item)
            }}>
                <View style={styles.parentCard}>
                    <Text>{this.props.item.name}</Text>
                    <View style={styles.imageWrap}>
                        <Image 
                            style={styles.productImage}
                            resizeMode="cover"
                            source={{uri: this.props.item.image}}
                        />
                    </View>
                </View>
            </TouchableOpacity>
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
        width: '100%',
        height: '100%',
    },
    imageWrap: {
        width: '80%',
        height: 200,
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
                            <FlatListItem navigation={this.props.navigation} navigation={this.props.navigation} item={item} index={index} />
                        )
                    }}
                />
            </View>
        )
    }
}
