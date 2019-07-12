import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback, Alert, AsyncStorage } from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'

import {createWishlist, getWishlist} from '../public/action/wishlist';
import CardWishlist from '../components/CardWishlist'

import axios from 'axios';

import { connect } from 'react-redux';





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
                            <CardWishlist item={item} index={index} />
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


export default connect(mapStateToProps)(wishlist);