import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image
} from 'react-native';


export default class Header extends Component {


	render() {
		return(
			<View style={styles.parentView}>
				<TextInput style={styles.search} placeholder="Cari di Corosell" />
				<Image style={styles.searchIcon} source={{uri: 'https://img.icons8.com/material-outlined/96/000000/search.png'}} />
				<Image style={styles.wishlist} source={{uri: 'https://img.icons8.com/material-outlined/96/000000/filled-like.png'}} />
				<Image style={styles.wishlist} source={{uri: 'https://img.icons8.com/material-outlined/96/000000/shopping-cart.png'}} />
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
		position: 'relative'
	},
	search: {
		backgroundColor: 'white',
		paddingVertical: 3,
		paddingLeft: 35,
		borderRadius: 3,
		flex: 1,
	},
	searchIcon: {
		width: 20,
		height: 20,
		position: 'absolute',
		top: 17,
		left: 22,
	},
	wishlist: {
		width: 28,
		height: 28,
		marginLeft: 10,
	}
})