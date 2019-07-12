import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback, Alert, AsyncStorage } from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'

import {deleteWishlist,getWishlist} from '../public/action/wishlist';

import axios from 'axios';

import { connect } from 'react-redux';


class FlatListItem extends Component {

    componentWillMount() {

        const   image = JSON.parse(this.props.item.image)
        const   bilangan = this.props.item.price;
        
        const   reverse = bilangan.toString().split('').reverse().join('');
        const   ribuan  = reverse.match(/\d{1,3}/g);
        const   result  = ribuan.join('.').split('').reverse().join('');


        this.setState({
            image: image,
            price: result
        })

        
    }

    maintenance(){
        Alert.alert(
          'We are Sorry !',
          'This feature is momentarily unavailable. Please try again leter',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );


    }

    delete =(id_user, id_product) => {
        console.warn(id_product)
        this.props.dispatch(deleteWishlist({id_user, id_product}));
    }


    render() {
        return (
                <View style={{flex :1, margin: 10, borderRadius: 7, borderWidth: 2, borderColor: '#f5f5f5'}}>
                    <TouchableOpacity style={{flex: 1}} onPress={() => {
                        this.props.navigation.navigate('DetailProduct', this.props.item)
                    }}>
                        <View style={{width: '100%', height: 200, borderRadius: 8}}>
                            <Image
                                style={{height: 200, borderRadius: 8}}
                                resizeMode="cover"
                                source={{ uri: this.state.image[0]}}
                            />
                        </View>
                        <Text style={{marginHorizontal: 5, marginTop: 5, color: 'black'}}>{this.props.item.product_name}</Text>
                        <Text style={{marginHorizontal: 5, color: 'black'}}>Rp {this.state.price}</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{flex: 1}} onPress={() => {
                        this.props.navigation.navigate('setting', this.props.item)
                    }}>
                        <View style={{flexDirection: 'row', margin: 5}}>
                            <Image
                                style={styles.profilePicture}
                                source={{uri: this.props.item.user_image}} 
                            />
                            <View>
                                <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 12}}>{this.props.item.username}</Text>
                                <Text style={{color: 'grey', fontSize: 10}}>3 menit lalu</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                        <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 10}}>
                            <TouchableOpacity onPress={() => this.delete(this.props.item.id_wishlist, this.props.item.id_product)} style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.2)'}}>
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
    }
}

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
                            <FlatListItem navigation={this.props.navigation} item={item} index={index} />
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