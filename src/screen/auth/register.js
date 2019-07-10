import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Button } from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import HeaderBack from '../../components/headerBack'
class Register extends Component {
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

                    <TextInput style={styles.input} placeholder='Nama Pengguna' />
                    <TextInput style={styles.input} placeholder='Kata Sandi' />
                    <TextInput style={styles.input} placeholder='Kota' />
                    <TextInput style={styles.input} placeholder='Email' />

                </View>
                <View style={{ paddingHorizontal: 21, paddingTop: 30 }}>
                    <Button 
                        title="Buat Akun Baru"
                    />
                </View>
            </React.Fragment>
        )
    }
}
export default Register
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