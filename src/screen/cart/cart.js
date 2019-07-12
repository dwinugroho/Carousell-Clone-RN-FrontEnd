import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image,
    Button, 
    AsyncStorage,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HeaderBack from '../../components/headerBack'
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { getCart } from '../../public/action/cart'

import CardCart from './cardCart'

import axios from 'axios'

class Cart extends Component {

    componentDidMount() {
        AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getCart(result))
            }
        })

    }


    render() {
        return (
            <View>
                <HeaderBack title="Cart" navigation={this.props.navigation} />
                <FlatList 
                    data={this.props.cart.data}
                    keyExtractor={(item) => {item.id_cart.toString()}}
                    renderItem={({item, index}) => {
                        return(
                            <CardCart key={item.id_cart} item={item} index={index} />
                        )
                    }}
                />
            </View>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(MapStateToProps)(Cart)


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
    }
})
