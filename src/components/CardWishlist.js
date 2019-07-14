import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback, Alert, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import {deleteWishlist,getWishlist} from '../public/action/wishlist';
import axios from 'axios';
import { connect } from 'react-redux';


class CardWishlist extends Component {
	constructor() {
		super()
		this.state = {
			image: ''
		}
	}
	componentWillMount() {
		const   image = JSON.parse(this.props.item.image)
		this.setState({
            image: image,
        })
	}

	delete = (id_user, id_product) => {
		this.props.dispatch(deleteWishlist(id_user, id_product));
		AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getWishlist(result))
            }
    })
		
	}
	render() {
		console.log('this.props.data.item')
		console.log(this.props.item)
		return(
			<View style={{flex :1, margin: 10, borderRadius: 7, borderWidth: 2, borderColor: '#f5f5f5'}}>
			
	            <TouchableOpacity style={{flex: 1}} onPress={() => {
	                this.props.navigation.navigate('DetailProduct', this.props.item)
	            }}>
	                <View style={{width: '100%', height: 200, borderRadius: 8}}>
	                    <Image
	                        style={{height: 200, borderRadius: 8}}
	                        resizeMode="cover"
	                        source={{ uri: this.state.image[0] }}
	                    />
	                </View>
	                <Text style={{marginHorizontal: 5, marginTop: 5, color: 'black'}}>{this.props.item.product_name}</Text>
	                <Text style={{marginHorizontal: 5, color: 'black'}}>Rp {this.props.item.price}</Text>
	            </TouchableOpacity>


	            <TouchableOpacity style={{flex: 1}} onPress={() => {
	                this.props.navigation.navigate('setting', this.props.item)
	            }}>
	                <View style={{flexDirection: 'row', margin: 5}}>
	                    <Image
	                        style={styles.profilePicture}
	                        source={{uri: this.props.item.user_image }} 
	                    />
	                    <View>
	                        <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 12}}>{this.props.item.username}</Text>
	                        <Text style={{color: 'grey', fontSize: 10}}>3 menit lalu</Text>
	                    </View>
	                </View>
	            </TouchableOpacity>

	                <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 10}}>
	                    <TouchableOpacity onPress={() => this.delete(this.props.item.id_user, this.props.item.id_product)} style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.2)'}}>
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

const MapStateToProps = (state) => {
	return {
		wishlist: state.wishlist
	}
}
export default connect(MapStateToProps)(CardWishlist)


const styles = StyleSheet.create({
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 7,
    },
})

