import React, { Component } from 'react'
import { Text, View, Image,Button, AsyncStorage } from 'react-native'
import HeaderBack from '../../components/headerBack'
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { getCart } from '../../public/action/cart'

import axios from 'axios'

class Cart extends Component {
    constructor () {
        super()
        this.state = {
            id_user: null,
            cart: [],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getCart(result))
            }
        })

    }

    render() {
        console.warn(this.props.cart.data)
        return (
            <View>
                <HeaderBack title="chart" navigation={this.props.navigation} />
                
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
