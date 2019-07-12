import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderBack from '../components/headerBack'
import { connect } from 'react-redux'
import {resetPassword} from '../public/action/forgetPass';
class ForgetPassword extends Component {
    constructor() {
        super();
        this.state = {
            code: '',
            NewPassword: '',
            RepeatPassword: ''

        };
    }

    reset = (code, newPass) => {
       
        let data = {
            "code" : code,
            "newPass" : newPass
        }
        this.props.dispatch(resetPassword(data));
        console.log(data)
        this.props.navigation.navigate('login')
    }

    render() {
        return (
            <React.Fragment>
                <HeaderBack title="Reset Password" navigation={this.props.navigation} />
                <View style={{ flex: 1, paddingHorizontal: 21, paddingTop: 20 }}>
                    <TextInput style={styles.input} placeholder='code'
                        onChangeText={(value) => { this.setState({ code: value }) }}
                        returnKeyType='next'
                        value={this.state.code}
                        autoCorrect={false}
                        editable={true}
                        maxLength={6}
                        multiline={false} 
                        keyboardType={'numeric'}
                        />

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

                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
                        <TouchableOpacity onPress={() => {this.reset(this.state.code, this.state.NewPassword)}} style={{
                            backgroundColor: '#4287f5',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 17,
                            width :250
                        }}>
                            <Text style={{ fontSize: 14, }}>enter</Text>
                        </TouchableOpacity>
                    </View>
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
export default connect(mapStateToProps)(ForgetPassword)
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#f71616',
        color: '#747678',
        paddingTop: 8,
        fontSize: 14,
    }
})