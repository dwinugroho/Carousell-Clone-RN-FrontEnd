import React, { Component } from 'react'
import {StyleSheet, Text, View, TextInput } from 'react-native'
export default class Profil extends Component {
    render() {
        return (
            <View>
                <View style={{paddingTop: 20,marginHorizontal:17}}>
                <Text style={{fontSize:14,color:'#818f99'}}>general profile</Text>
                </View>
                <View style={{marginHorizontal: 17,paddingTop: 10,}}>
                <View style={styles.head}>
                    <Text style={styles.Text}>username</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.Text}>first name</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.Text}>last name</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.Text}>my city</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.Text}>website</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.Text}>last name</Text>
                    <TextInput style={styles.input} />
                </View>
                </View>
                <View style={{paddingTop: 20,marginHorizontal:17,justifyContent :'space-around',flexDirection: 'row',}}>
                <Text style={{fontSize:14,color:'#818f99'}}>personal profile</Text>
                <Text style={{fontSize:14,color:'#1875ba'}}>resend verification email</Text>
                </View>
                <View style={{marginHorizontal: 17,paddingTop: 10,}}>
                <View style={styles.head}>
                    <Text style={styles.Text}>email</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.head}>
                    <Text style={styles.Text}>no handphone</Text>
                    <TextInput style={styles.input} />
                </View>
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    head : {
        flexDirection: 'row',
        justifyContent:'flex-end',
        paddingTop: 20,
    },
    Text : {
        fontSize: 14 ,
        color :'#747678',
        flex :1,
        paddingTop: 9,
    },
    input : {
        borderBottomWidth: 1,
        borderBottomColor: '#747678',
        flex :2,
        fontSize :12,
        padding: 0,
        justifyContent:'flex-end'
    }

})