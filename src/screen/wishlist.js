import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback, Alert, AsyncStorage } from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'

import {createWishlist, getWishlist} from '../public/action/wishlist';

import axios from 'axios';

import { connect } from 'react-redux';


const styles = StyleSheet.create({
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 7,
    },
})



class wishlist extends Component {


componentDidMount = () => {
    AsyncStorage.getItem('id_user', (error, result) => {
          if (result) {
              this.props.dispatch(getWishlist(result))
          } else {
              alert('gagal get User')
          }
      })
}

delete = (id_user, id_product) => {
    // console.warn(id_user+' '+id_product)
    this.props.dispatch(createWishlist(id_user, id_product));
}


    render() {
        return (
            <View style={{marginBottom:100}}>
              <HeaderBack title="Wishlist" navigation={this.props.navigation}/>
                <FlatList
                    data={this.props.wishlist.data.data}
                    numColumns={2}
                    keyExtractor={(item) => item.id_product.toString()}
                    renderItem={({ item, index }) => {

                        return (
                            <View style={{flex :1, margin: 10, borderRadius: 7, borderWidth: 2, borderColor: '#f5f5f5'}}>
                                <TouchableOpacity style={{flex: 1}} onPress={() => {
                                    this.props.navigation.navigate('DetailProduct', item)
                                }}>
                                    <View style={{width: '100%', height: 200, borderRadius: 8}}>
                                        <Image
                                            style={{height: 200, borderRadius: 8}}
                                            resizeMode="cover"
                                            source={{ uri: item.user_image }}
                                        />
                                    </View>
                                    <Text style={{marginHorizontal: 5, marginTop: 5, color: 'black'}}>{item.product_name}</Text>
                                    <Text style={{marginHorizontal: 5, color: 'black'}}>Rp {item.price}</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={{flex: 1}} onPress={() => {
                                    this.props.navigation.navigate('setting', item)
                                }}>
                                    <View style={{flexDirection: 'row', margin: 5}}>
                                        <Image
                                            style={styles.profilePicture}
                                            source={{uri: item.user_image }} 
                                        />
                                        <View>
                                            <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 12}}>{item.username}</Text>
                                            <Text style={{color: 'grey', fontSize: 10}}>3 menit lalu</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                    <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 10}}>
                                        <TouchableOpacity onPress={() => this.delete(item.id_user, item.id_product)} style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.2)'}}>
                                            <View>
                                                <Icon name='heart' size={15} color={'red'} /> 
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.maintenance()} style={{flex: 1, alignItems: 'center'}}>
                                            <View>
                                                <Entypo name='dots-three-vertical' size={15} color={'grey'} /> 
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                
                            </View>
                        )
                    }}
                />
            </View>
            
        )
    }
}

const mapStateToProps = state =>{
  return {
    wishlist : state.wishlist,
  }
}

// const mapDispatchToProps = {
//     FlatListItem
// }



export default connect(mapStateToProps)(wishlist);