import React, { Component } from 'react'
import { Alert,Text, View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Button } from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import HeaderBack from '../../components/headerBack'
import { connect } from 'react-redux';
import { registerUser } from '../../public/action/login';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email : ''
        };
    }
    register = () => {
        console.log('dapat')
        const {username,password,email} = this.state
        if (this.state.username !== '' && this.state.password !== '' && this.state.email !== '') {
            let data = {
                'username' : username,
                'password' : password,
                'email' : email,
            }
            this.props.dispatch(registerUser(data));
            this.props.navigation.pop()
            return true
        } else {
            Alert.alert("warning", 'data please insert data in from')
        }
    }
    render() {
        return (
            <React.Fragment>
                <HeaderBack title="Buat Profil Baru" navigation={this.props.navigation} />
                <View style={{marginTop: 20,}}>
                    <TouchableOpacity style={{width: '50%', alignSelf: 'center'}}>
                        <AntDesign style={styles.addPhoto} name="adduser" size={40} color={'#4287f5'} />
                        <Text style={styles.addText}>Tambah Foto Profil</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 21, paddingTop: 20 }}>

                    <TextInput style={styles.input} placeholder='username' 
                    onChangeText={(value) => {this.setState({username: value})}}
                    returnKeyType='next'
                    value={this.state.username}
                    autoCorrect={false}
                    editable={true}
                    maxLength={40}
                    multiline={false}/>

                    <TextInput style={styles.input} 
                    placeholder='password' 
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                    editable={true}
                    secureTextEntry={true}
                    maxLength={40}
                    multiline={false}
                    autoCorrect={false}/>

                    <TextInput style={styles.input} placeholder='Email' 
                    onChangeText={(value) => this.setState({ email: value })}
                    value={this.state.email}
                    autoCorrect={false}
                    editable={true}
                    returnKeyType='next'
                    maxLength={40}
                    multiline={false}/>

                </View>
                <View style={{ paddingHorizontal: 21, paddingTop: 30 }}>
                    <Button 
                        title="Buat Akun Baru"
                        onPress={this.register}/>
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
export default connect(mapStateToProps)(Register)
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#4287f5',
        color: '#747678',
        paddingTop: 8,
        fontSize: 14,
        marginTop: 10
    },
    addPhoto: {
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#4287f5',
        borderRadius: 150,
        padding: 25,
        borderStyle: "dashed"
    },
    addText: {
        color: '#4287f5',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    }
})