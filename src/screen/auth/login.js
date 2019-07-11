import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, AsyncStorage, ActivityIndicator, } from 'react-native'
import HeaderBack from '../../components/headerBack'
import { signIn } from '../../public/action/login'
import {connect} from 'react-redux'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: null,
        };
    }

    login = async () => {

        const {username,password} = this.state

        if (this.state.username !== '' && this.state.password !== '') {

            let data = {
                'username' : username,
                'password' : password,
            }

            await this.props.dispatch(signIn(data));


            AsyncStorage.getItem('Token', (error, result) => {
                if (result) {
                    this.props.navigation.navigate('Home')
                } else {
                    alert('Terjadi Kesalahan saat Login')
                }
            })


        } else {
            alert("warning", 'data please insert data in form')
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('Token', (error, result) => {
            if (result) {
                this.props.navigation.navigate('Home')
            }
        })
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
                <Text>{this.state.token}</Text>
                <View style={{ paddingHorizontal: 21, paddingTop: 30 }}>
                    <TouchableOpacity style={styles.button} onPress={this.login}>
                        <Text style={styles.Text}>Login</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.props.login.isLoading ? 
                        <ActivityIndicator size="large" color="green" />
                    :
                    <View />
                }
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