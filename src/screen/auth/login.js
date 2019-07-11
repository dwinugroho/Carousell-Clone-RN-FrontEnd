import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderBack from '../../components/headerBack'
import signIn from '../../public/action/login'
import {connect} from 'react-redux'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }
    login = () => {
        console.log('dapat')
        const {username,password} = this.state
        if (this.state.username !== '' && this.state.password !== '') {
            let data = {
                'username' : username,
                'password' : password,
            }
            this.props.dispatch(signIn(data));
            // this.props.navigation.pop()
            return true
        } else {
            Alert.alert("warning", 'data please insert data in from')
        }
    }
    render() {
        return (
            <React.Fragment>
                <HeaderBack title="enter" navigation={this.props.navigation} />
                <View style={{ paddingHorizontal: 21, paddingTop: 20 }}>
                    <TextInput 
                    style={styles.input} 
                    placeholder='Username' 
                    onChangeText={(value) => {this.setState({username: value})}}
                    value={this.state.username}
                    keyboardType="email-address"
                    returnKeyType='next'
                    autoCorrect={false}
                    editable={true}
                    maxLength={40}
                    multiline={false} />

                    <TextInput 
                     style={styles.input} 
                     placeholder='password' 
                     onChangeText={(value) => this.setState({ password: value })}
                     value={this.state.password}
                     editable={true}
                     secureTextEntry={true}
                     maxLength={40}
                     multiline={false}
                     autoCorrect={false}
                     />
                </View>
                <View style={{ paddingHorizontal: 21, paddingTop: 30 }}>
                    <TouchableOpacity style={styles.button} onPress={this.login}>
                            <Text style={styles.Text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        login : state.login
    }
}
export default connect(mapStateToProps)(Login)
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#4287f5',
        color: '#747678',
        paddingTop: 8,
        fontSize: 14,
        marginTop: 10
    },
    Text : {
        fontSize : 14,
        color : '#FFFFFF'
    },
    button : {
        backgroundColor: '#4287f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 17,
    }
})