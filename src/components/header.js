import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Header extends Component {
	render() {
		return (
			<View style={styles.parentView}>
				<View style={{flex :3}}>
					<TouchableOpacity style={{height :30}} onPress={() => this.props.navigation.navigate('search')}>
					<Text style={styles.search} placeholder="Cari di Corosell" />
					<Icon style={styles.searchIcon} name='search1' size={18} color={'#080808'} />
					</TouchableOpacity>
				</View>
				<View style={{flex :1,flexDirection: 'row',justifyContent: 'space-around'}}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('wishlist')}>
					<Icon style={styles.wishlist} name='hearto' size={23} color={'#f5f6f7'} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
					<Icon style={styles.wishlist} name='shoppingcart' size={23} color={'#f5f6f7'} />
				</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	parentView: {
		backgroundColor: '#c22727',
		flexDirection: 'row',
		padding: 10,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		
	},
	search: {
		backgroundColor: 'white',
		paddingVertical: 3,
		paddingLeft: 45,
		borderRadius: 3,
		flex: 1,
	},
	searchIcon: {
		position: 'absolute',
		top: 7,
		left: 22,
	},
	wishlist: {
		width: 28,
		height: 28,
		marginLeft: 10,
	}
})