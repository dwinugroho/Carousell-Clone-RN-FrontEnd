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

export default class Search extends Component {
    render() {
        return (
            <View style={styles.parentView}>
				<View style={{flex :1,flexDirection: 'row',justifyContent: 'flex-start'}}>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
					<Icon style={styles.back} name='arrowleft' size={23} color={'#f5f6f7'} />
				</TouchableOpacity>
				</View>
				<View style={{flex :5}}>
					<TextInput style={styles.search} placeholder="Cari di Corosell" />
					<Icon style={styles.searchIcon} name='search1' size={18} color={'#080808'} />
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
		top: 3,
		left: 22,
	},
	wishlist: {
		width: 28,
		height: 28,
		marginLeft: 10,
	}
})