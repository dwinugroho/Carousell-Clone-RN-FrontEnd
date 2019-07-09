import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text, View, Image } from 'react-native';
import Card from '../components/Card';
import Slider from '../components/slider';

import Icon from 'react-native-vector-icons/dist/AntDesign';


class Explore extends Component {
  render() {
    return (
      <View style={{position:'relative'}}>
        <Card />
        <TouchableOpacity style={styles.actionButton}>
        	<Icon style={styles.plusIcon} name='pluscircle' size={20} color={'white'} />
        	<Text style={{fontSize: 20, color: 'white'}}>JUAL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Explore

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
  plusIcon:{
    top: 1,
    marginRight: 5,
  }
})
