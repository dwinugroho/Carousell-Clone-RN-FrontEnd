import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderBack from '../components/headerBack'
export default class Chart extends Component {
    render() {
        return (
            <View>
                <HeaderBack title="chart" navigation={this.props.navigation}/>
                <Text> Chart</Text>
            </View>
        )
    }
}
