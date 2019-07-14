import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image,
    Button, 
    AsyncStorage,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HeaderBack from '../../components/headerBack'
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { deleteCart } from '../../public/action/cart'
import { addCart } from '../../public/action/cart'
import { getCart } from '../../public/action/cart'

class cardCart extends Component {

	constructor() {
		super()
		this.state = {
			image: '',
			totalProduct: '',
			totalPrice: ''
		}
	}

    // Set Image and State

	componentWillMount() {
		const image = JSON.parse(this.props.item.image)
		this.setState({
			image: image,
			totalProduct: this.props.item.total_product,
			totalPrice: this.props.item.total_product * this.props.item.price,
			id_product: this.props.item.id_product,
            price: this.props.item.price,
		})
	}

	deleteCart = () => {
		AsyncStorage.getItem('id_user', (error, result) => {
			if (result) {
				const Data = {
					id_user    : result,
					id_product : this.state.id_product
				}

				this.props.dispatch(deleteCart(Data))
			}
		})
	}

	render() {
		return(
			<View style={styles.parentCard}>
                <View style={styles.imageWarp}>
                    <Image 
                        style={{width: 90, height: '100%', resizeMode: 'cover'}}
                        source={{uri: this.state.image[0]}}
                    />
                </View>

                <View style={{marginLeft: 20, marginVertical: 10,flex:1}}>
                    <Text style={{fontSize: 17, color: 'black'}}>{this.props.item.product_name}</Text>

                    <View style={{marginTop: 10, flexDirection: 'row'}}>
                        <Text>Qty. {this.state.totalProduct}</Text>
                    </View>
                    <Text style={{fontSize: 17}}>Rp {this.state.totalPrice}</Text>
                </View>
                <TouchableOpacity style={styles.close} onPress={this.deleteCart}>
                	<AntDesign name="close" size={17} color="black" />
                </TouchableOpacity>
            </View>
		)
	}
}

const MapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

export default connect(MapStateToProps)(cardCart)


const styles = StyleSheet.create({
    parentCard: {
        backgroundColor: 'white',
        elevation: 7,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },
    imageWarp: {
        backgroundColor: 'blue',
        width: 90,
        height: 100
    },
    close: {
    	position: 'absolute',
    	right: 10,
    	top: 5
    }
})