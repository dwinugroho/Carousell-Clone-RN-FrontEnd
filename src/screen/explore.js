import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text, View, Image,ScrollView  } from 'react-native';
import Card from '../components/Card';
import Slider from '../components/slider';

import Icon from 'react-native-vector-icons/dist/AntDesign';
import Mycarousel from '../components/carousel';

import { withNavigation } from 'react-navigation';


class Explore extends Component {
	render() {
		return (
			<View>
				<ScrollView style={{ position: 'relative' }}>
					<View>
						<Mycarousel />
					</View>
					<View style={{justifyContent :'space-between',flexDirection: 'row',paddingHorizontal: 17,padding :15,alignItems: 'center',}}>
						<Text style={{fontSize :17,color :'black'}}>Explore Corrausel</Text>
						<TouchableOpacity style={{padding:8}}>
						<Text style={{fontSize :15,color :'#c2baba'}}>view more  ></Text>
						</TouchableOpacity>
					</View>
					<Card navigation={this.props.navigation} />
				</ScrollView>
				<TouchableOpacity style={styles.actionButton}>
					<Icon style={styles.plusIcon} name='pluscircle' size={20} color={'white'} />
					<Text style={{ fontSize: 20, color: 'white' }}>JUAL</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


export default withNavigation(Explore)

const styles = StyleSheet.create({
	actionButton: {
		backgroundColor: 'red',
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center',
		borderRadius: 30,
		flexDirection: 'row',
		padding: 10,
		paddingHorizontal: 20,
		justifyContent: 'center',
		elevation: 7,
	},
	plusIcon: {
		top: 1,
		marginRight: 5,
	}
})
