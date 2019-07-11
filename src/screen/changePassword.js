import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderBack from '../components/headerBack'
import { connect } from 'react-redux'
class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            NewPassword: '',
            RepeatPassword: ''

        };
    }
    render() {
        return (
            <React.Fragment>
                <HeaderBack title="change password" navigation={this.props.navigation} />
                <View style={{ flex: 1, paddingHorizontal: 21, paddingTop: 20 }}>
                    <TextInput style={styles.input} placeholder='password now'
                        onChangeText={(value) => { this.setState({ password: value }) }}
                        returnKeyType='next'
                        value={this.state.username}
                        autoCorrect={false}
                        secureTextEntry={true}
                        editable={true}
                        maxLength={40}
                        multiline={false} />

                    <TextInput style={styles.input} placeholder='new password'
                        onChangeText={(value) => { this.setState({ NewPassword: value }) }}
                        returnKeyType='next'
                        value={this.state.NewPassword}
                        secureTextEntry={true}
                        autoCorrect={false}
                        editable={true}
                        maxLength={40}
                        multiline={false} />

                    <TextInput style={styles.input} placeholder='repeat the new password'
                        onChangeText={(value) => { this.setState({ RepeatPassword: value }) }}
                        returnKeyType='next'
                        value={this.state.RepeatPassword}
                        autoCorrect={false}
                        secureTextEntry={true}
                        editable={true}
                        maxLength={40}
                        multiline={false} />

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
                        <View style={{
                            backgroundColor: '#4287f5',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 17,
                            width :250
                        }}>
                            <Text style={{ fontSize: 14, }}>enter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}
export default connect(mapStateToProps)(ChangePassword)
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#f71616',
        color: '#747678',
        paddingTop: 8,
        fontSize: 14,
    }
})