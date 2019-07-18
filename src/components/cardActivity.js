import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Left, Body, Right, Item, List, ListItem, Thumbnail, } from 'native-base'
export default class CardActivity extends Component {
	constructor() {
		super()
		this.state = {
			image_product: ''
		}
	}
	componentWillMount() {
		const image_product = JSON.parse(this.props.item.image_product)
		this.setState({
			image_product: image_product,
		})
	}

	render() {
		// console.warn(this.props.item)
		return (
			<View style={{ paddingHorizontal: 17, }}>
				<View style={{ justifyContent: 'space-between', flex: 1, flexDirection: 'row', padding: 10, paddingHorizontal: 17, }}>
					<Text>{this.props.item.username}</Text>
					<Text>selesai</Text>
				</View>
				<View style={{ justifyContent: 'space-around', flexDirection: 'row', borderBottomWidth: 1 }}>
					<View style={{ flex: 1 }}>
						<Image
							style={{ height: 100, width: 100 }}
							source={{ uri: this.state.image_product[0] }}
						/>
					</View>
					<View style={{ flex: 2, paddingLeft: 30, flexDirection: 'column',justifyContent: 'space-between', }}>
						<View>
							<Text>{this.props.item.product_name}</Text>
							<Text>total product : {this.props.item.total_product}</Text>
						</View>
						<View style={{marginBottom :2, justifyContent:'space-between',flexDirection: 'row',}}>
							<Text>total price</Text>
							<Text>{this.props.item.total_price}</Text>
						</View>
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	seller: {
		marginBottom: 10,
		marginTop: 0,
	},
	imageThumbnail: {
		width: 25,
		height: 25
	},
	textDone: {
		textAlign: 'right',
		alignSelf: 'stretch',
		paddingHorizontal: '5%',
		color: 'red'
	},
	textCheckout: {
		paddingHorizontal: 10,
		// paddingVertical:10
	},
	textProduct: {
		fontSize: 17,
		color: 'black'
	},
	qtyParent: {
		backgroundColor: 'skyblue'
	},
	qty: {
		paddingVertical: 5,
		textAlign: 'right',
		fontSize: 11
	},
	totalPrice: {
		textAlign: 'right',
		alignSelf: 'stretch',
		paddingBottom: 15,
		paddingTop: 7,
		paddingLeft: 0,
		paddingRight: '7%',
	},
	textTotalPrice: {
		// fontSize:12,
		fontWeight: 'bold'
	}
})