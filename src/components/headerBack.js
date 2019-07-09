import React, { Component } from 'react';
import {
	View,
	Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';


export default class HeaderBack extends Component {
	render() {
		return (
			<View style={styles.parentView}>
                <TouchableOpacity style={{padding :4}} onPress={() => this.props.navigation.goBack()}>
				<Icon style={styles.Text} name='arrowleft' size={28} color='#FFFFFF'></Icon>
                </TouchableOpacity>
                <Text style={{color:'#FFFFFF',alignItems: 'center',fontSize: 17,paddingLeft: 8,}}>{this.props.title}</Text>
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
        alignItems: 'center',
    },
    Text : {
        marginLeft: 5,
    }
})