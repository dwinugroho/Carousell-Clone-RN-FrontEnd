import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback, Alert, AsyncStorage ,RefreshControl,ActivityIndicator} from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'

import {createWishlist, getWishlist} from '../public/action/wishlist';
import CardWishlist from '../components/CardWishlist'

import axios from 'axios';

import { connect } from 'react-redux';





class wishlist extends Component {
    constructor() {
        super()
        this.state = {
            refresh : false,
            isLoading : false,

        };
    };
    _onRefresh =() => {
        this.setState({
            refresh : true
        })
        AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getWishlist(result))
            }
    })
}


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
                  {
                    this.props.wishlist.isLoading ?
                        <ActivityIndicator size='large' color='#FF92A9' /> :
                        this.props.wishlist.isError ?
                        <Text style={{fontSize:15,justifyContent:'center',alignItems: 'center',}}>data not found</Text> :
                <FlatList
                    data={this.props.wishlist.data.data}
                    numColumns={2}
                    keyExtractor={(item) => item.id_product.toString()}
                    refreshControl={
                        <RefreshControl
                          refreshing={this.props.wishlist.isLoading}
                          onRefresh={this._onRefresh}
                        />
                    }
                    renderItem={({ item, index }) => {
                        
                        return (
                            <CardWishlist item={item} index={index} navigation={this.props.navigation}/>
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