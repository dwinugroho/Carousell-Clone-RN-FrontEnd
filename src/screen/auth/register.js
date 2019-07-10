import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderBack from '../../components/headerBack'
class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderBack title="kembali" navigation={this.props.navigation} />
                <View style={{ flex: 1, paddingHorizontal: 21, paddingTop: 20 }}>
                    <TextInput style={styles.input} placeholder='password now' />
                    <TextInput style={styles.input} placeholder='new password' />
                    <TextInput style={styles.input} placeholder='repeat the new password' />
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
                        <Text style={{ fontSize: 14, }}>foget password ..?</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}
export default Register
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#f71616',
        color: '#747678',
        paddingTop: 8,
        fontSize: 14,
    }
})