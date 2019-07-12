import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderBack from '../components/headerBack'
import { connect } from 'react-redux'
import {sendEmail} from '../public/action/forgetPass'

class SendEmail extends Component {
    constructor() {
        super();
        this.state = {
           email: ''
        };
    }

    send = (email) => {
        let data = {
            "email" : email,
        }
        this.props.dispatch(sendEmail(data));
        this.props.navigation.navigate('forgetPassword')
    }

    render() {
        return (
            <React.Fragment>
                <HeaderBack title="Forget Password" navigation={this.props.navigation} />
                <View style={{alignItems: 'center', paddingTop: 20}}><Text>Insert your email</Text></View>
                <View style={{ flex: 1, paddingHorizontal: 21, paddingTop: 20 }}>
                    <TextInput style={styles.input} placeholder='email'
                        onChangeText={(value) => { this.setState({email: value}) }}
                        autoCorrect={false}
                        editable={true}
                        multiline={false} />

                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
                        <TouchableOpacity onPress={() => {this.send(this.state.email)}} style={{
                            backgroundColor: '#4287f5',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 17,
                            width :250
                        }}>
                            <Text style={{ fontSize: 14, }}>Send Mail</Text>
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
export default connect(mapStateToProps)(SendEmail)
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#f71616',
        color: '#747678',
        paddingTop: 8,
        fontSize: 14,
    }
})