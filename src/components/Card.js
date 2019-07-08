import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'

const data = [
    {
        'key': '1',
        'name': 'name',
        'image': 'image',
        'harga': 'RP.130,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '2',
        'name': 'nama 2',
        'image': 'gabar 2',
        'harga': '134,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '3',
        'name': 'shirt',
        'image': 'image 3',
        'harga': 'RP.130,450',
        'deskripsi': 'baju murah'
    },
    {
        'key': '4',
        'name': 'namedd',
        'image': 'imageddddd',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '5',
        'name': 'namedd',
        'image': 'imageddddd',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '6',
        'name': 'namedd',
        'image': 'imageddddd',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '7',
        'name': 'namedd',
        'image': 'imageddddd',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '8',
        'name': 'namedd',
        'image': 'imageddddd',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '9',
        'name': 'namedd',
        'image': 'imageddddd',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
]

class FlatListItem extends Component {
    render() {
        return (
            <View style={{flex :1,paddingTop: 10, paddingHorizontal: 20,}}>
                <TouchableOpacity style={{
                    elevation: 5,
                    width: 136,
                    height: 138,
                    backgroundColor: 'yellow',
                }}>
                <Text>{this.props.item.image}</Text>
                </TouchableOpacity>
                <View style={{justifyContent: 'center',paddingBottom: 5, }}>
                    <Text style={{fontSize: 13,color:'black',paddingTop: 5,}}>{this.props.item.name}</Text>
                    <Text>{this.props.item.harga}</Text>
                    <Text>{this.props.item.deskripsi}</Text>
                </View>
            </View>
        )
    }
}


export default class Card extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        )
                    }}
                />
            </View>
        )
    }
}
