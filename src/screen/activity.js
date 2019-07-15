import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, Alert, AsyncStorage, RefreshControl, ActivityIndicator } from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'

import { connect } from 'react-redux';
import { getActivity } from '../public/action/activity';
import CardActivity from '../components/cardActivity'

class Activity extends Component {
    constructor() {
        super()
        this.state = {
            refresh: false,
            isLoading: false,

        };
    };
    _onRefresh = () => {
        this.setState({
            refresh: true
        })
        AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getActivity(result))
            }
        })
    }
    componentDidMount = () => {
        AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getActivity(result))
            }
        })
    }
    render() {
        console.log('this.props.Activity.data')
        console.log(this.props.Activity)
        return (
            <View style={{ marginBottom: 100 }}>
                {
                    this.props.Activity.isLoading ?
                        <ActivityIndicator size='large' color='#FF92A9' /> :
                        this.props.Activity.isError ?
                            <Text style={{ fontSize: 15, justifyContent: 'center', alignItems: 'center', }}>data not found</Text> :
                            <FlatList
                                data={this.props.Activity.data}
                                numColumns={1}
                                keyExtractor={(item) => item.id_checkout.toString()}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.props.Activity.isLoading}
                                        onRefresh={this._onRefresh}
                                    />
                                }
                                renderItem={({ item, index }) => {
                                    return (
                                        <CardActivity item={item} index={index} navigation={this.props.navigation} />
                                    )
                                }}
                            />
                }
            </View>

        )
    }
}

const mapStateToProps = state => {
    return {
        Activity: state.Activity,
    }
}


export default connect(mapStateToProps)(Activity);