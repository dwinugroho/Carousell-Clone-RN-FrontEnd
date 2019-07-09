import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderBack from '../components/headerBack'
export default class Wishlist extends Component {
    render() {
        return (
            <View>
                 <HeaderBack title="wishlist" navigation={this.props.navigation}/>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
