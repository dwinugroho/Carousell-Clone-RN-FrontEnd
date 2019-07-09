import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text, View, Image } from 'react-native';
import Card from '../components/Card';


class Explore extends Component {
  render() {
    return (
      <View style={{position:'relative'}}>
        <Card />
        <TouchableOpacity style={styles.actionButton}>
        	<Image
        		style={{width: 20, height: 20, top: 1, marginRight: 5}} 
        		source={{uri: 'https://img.icons8.com/pastel-glyph/64/000000/plus.png'}}
        	/>
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
	}
})
