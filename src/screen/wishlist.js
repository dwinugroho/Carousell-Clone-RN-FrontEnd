import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
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
            <View style={{flex :1}}>
                <View style={{flex :1,backgroundColor: '#FFFFFF',paddingHorizontal:17,
            margin: 14,borderRadius: 5,elevation :10}}>
                <Image
                    style={{height :120,width :120}}
                    resizeMode="cover"
                    source={{ uri: this.props.item.image }}
                    />
                    <Text>{this.props.item.name}</Text>
                    <Text>{this.props.item.harga}</Text>
                    <Text>{this.props.item.deskripsi}</Text>
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 1,paddingTop:3}}></View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',padding:15,backgroundColor:'center'}}>
                        <Icon name='hearto' size={25} color={'#f72d2d'}/>
                        <Icon name='totop' size={25} color={'#c2c4be'}/>
                </View>
                    </View>
          </View>
           
        )
    }
}


export default class Card extends Component {
    render() {
        return (
            <View>
              <HeaderBack title="setting" navigation={this.props.navigation}/>
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

