import React, { Component } from 'react'
import { Text, View ,StyleSheet,AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeAuth extends Component {
    componentWillMount() {
        AsyncStorage.getItem('Token', (error, result) => {
            if (result) {
                this.props.navigation.navigate('Home')
            }
        })
    }
    render() {
        return (
            <View style={{flex :1,paddingHorizontal: 17}}>
                <View style={{flex :1}}>
                    <View style={{paddingTop: 20,paddingRight: 17,}}>
                        <TouchableOpacity style={styles.enter} onPress={()=>this.props.navigation.navigate('login')}>
                            <Text style={{fontSize:13,color :'#44a6fc'}}>login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Icon name='google' size={26} style={styles.Icon} color='red'/>
                        <View style={styles.botton}>
                            <Text style={styles.Text}>lanjutkan dengan google</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
                    <View style={styles.head}>
                        <View style={styles.bottonRegister}>
                            <Text style={styles.Text}>register now</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.head}>
                        <View style={styles.bottonFacebook}>
                            <View style={{flex :1}}>
                            <Icon name= 'facebook-square' size={25} color='blue'/>
                            </View>
                            <View style={{flex:3}}>
                            <Text style={styles.Text}>register with facebook</Text>

                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems: 'center',
        paddingTop: 20,
    },
    head: {
        flexDirection: 'row',
        paddingTop :15,
    },
    Icon: {
        paddingTop :8,
        paddingBottom: 8,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
        borderWidth : 1,
        borderColor: '#44a6fc',
    },
    botton : {
        backgroundColor:'#44a6fc',
        padding:10,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        width :260,
    },
    bottonRegister : {
        backgroundColor:'#44a6fc',
        padding:10,
        width :'100%',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottonFacebook : {
        backgroundColor:'#44a6fc',
        padding:10,
        width :'100%',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    Text : {
        fontSize: 13,
        color :'#FFFFFF'
    },
    enter : {
        paddingHorizontal: 13,
        paddingVertical :12,
        alignSelf:'flex-end',
        left :12,
        right :20,
        borderRadius: 5,
        borderWidth: 1,
        color:'#e3e4e6',
        borderColor:'#44a6fc'
    }
  });
  
export default HomeAuth
