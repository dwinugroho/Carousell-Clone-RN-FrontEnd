import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, Button, AsyncStorage, Image, TouchableOpacity,Picker } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import HeaderBack from '../components/headerBack'
import { getUser, updateSeller } from '../public/action/user'
import { connect } from 'react-redux'

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            username: this.props.user.data.data.username,
            firstname: this.props.user.data.data.firstname,
            lastname: this.props.user.data.data.lastname,
            email: this.props.user.data.data.email,
            hp: this.props.user.data.data.hp,
            // birth: this.props.user.data.data.birth,
            // gender : this.props.user.data.data.gender
        };
    }
    updateUser = () => {
        console.log('dapat')
        AsyncStorage.getItem('id_user', (error, result) => {
            this.props.dispatch(updateSeller(result, {
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                hp: this.state.hp,
                // birth: this.state.birth,
                // gender: this.state.gender
            })
            )
            this.props.navigation.goBack()
        }
        )
    }
    // showDateTimePicker = () => {
    //     this.setState({ isDateTimePickerVisible: true });
    // };

    // hideDateTimePicker = () => {
    //     this.setState({ isDateTimePickerVisible: false });
    // };

    // handleDatePicked = date => {
    //     console.log("A date has been picked: ", date);
    //     this.hideDateTimePicker();
    // };

    componentDidMount() {
        AsyncStorage.getItem('username', (error, result) => {
            if (result) {
                this.props.dispatch(getUser(result))
            } else {
                alert('gagal get User')
            }
        })

    }
    render() {
        console.log('this.props.user')
        console.log(this.props.user.data.data)
        return (
            <ScrollView>
                <HeaderBack title="change profil" navigation={this.props.navigation} />
                <View style={{ paddingTop: 20, marginHorizontal: 17 }}>
                    <Text style={{ fontSize: 14, color: '#818f99' }}>general profile</Text>
                </View>
                <View style={{ marginHorizontal: 17, paddingTop: 10, }}>
                    <View style={styles.head}>
                        <Text style={styles.Text}>username</Text>
                        <TextInput style={styles.input} placeholder={this.props.user.data.data.username}
                            onChangeText={(value) => { this.setState({ username: value }) }}
                            returnKeyType='next'
                            value={this.state.username}
                            autoCorrect={false}
                            maxLength={40}
                            multiline={false}
                            editable={false} />
                    </View>
                    <View style={styles.head}>
                        <Text style={styles.Text}>first name</Text>
                        <TextInput style={styles.input}
                            onChangeText={(value) => { this.setState({ firstname: value }) }}
                            returnKeyType='next'
                            value={this.state.firstname}
                            autoCorrect={false}
                            editable={true}
                            maxLength={40}
                            multiline={false} />
                    </View>
                    <View style={styles.head}>
                        <Text style={styles.Text}>last name</Text>
                        <TextInput style={styles.input}
                            onChangeText={(value) => { this.setState({ lastname: value }) }}
                            returnKeyType='next'
                            value={this.state.lastname}
                            autoCorrect={false}
                            editable={true}
                            maxLength={40}
                            multiline={false} />
                    </View>
                </View>
                <View style={{ paddingTop: 20, marginHorizontal: 17, justifyContent: 'space-around', flexDirection: 'row', }}>
                    <Text style={{ fontSize: 14, color: '#818f99' }}>personal profile</Text>
                    <Text style={{ fontSize: 14, color: '#1875ba' }}>resend verification email</Text>
                </View>
                <View style={{ marginHorizontal: 17, paddingTop: 10, }}>
                    <View style={styles.head}>
                        <Text style={styles.Text}>email</Text>
                        <TextInput style={styles.input} placeholder={this.props.user.data.data.email} onChangeText={(value) => { this.setState({ email: value }) }}
                            returnKeyType='next'
                            value={this.state.email}
                            autoCorrect={false}
                            editable={false}
                            maxLength={40}
                            multiline={false} />
                    </View>
                    <View style={styles.head}>
                        <Text style={styles.Text}>no handphone</Text>
                        <TextInput style={styles.input}
                            onChangeText={(value) => { this.setState({ hp: value }) }}
                            returnKeyType='next'
                            value={this.state.hp}
                            autoCorrect={false}
                            editable={true}
                            maxLength={40}
                            multiline={false} />
                    </View>
                    {/* <View style={styles.head}>
                        <Picker
                            selectedValue={this.state.gender}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ gender: itemValue })
                            }>
                            <Picker.Item label="male" value={1} />
                            <Picker.Item label="female" value={2} />
                        </Picker>
                    </View>
                    <View style={styles.head}>
                        <Text style={styles.Text}>enter date of birth</Text>
                        <Button title="choose date of birth" onPress={this.showDateTimePicker} />
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                            style={{ backgroundColor: 'red', }}
                            onChangeText={(value) => { this.setState({ birth: value }) }}
                            returnKeyType='next'
                            value={this.state.birth}
                            autoCorrect={false}
                            editable={true}
                            maxLength={40}
                            multiline={false} />
                    </View> */}
                    <View style={{ paddingHorizontal: 21, paddingTop: 30 }}>
                        <TouchableOpacity style={styles.button} onPress={this.updateUser}>
                            <Text style={styles.Text}>register</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(MapStateToProps)(Profil)

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 20,
    },
    Text: {
        fontSize: 14,
        color: '#747678',
        flex: 1,
        paddingTop: 9,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 2,
        fontSize: 12,
        padding: 0,
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: '#4287f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }

})