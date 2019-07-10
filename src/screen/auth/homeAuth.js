import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeAuth extends Component {
    render() {
        return (
            <View style={{flex :1,paddingHorizontal: 17}}>
                <View style={{flex :1,backgroundColor :'blue'}}>
                    <Text>halaman 1</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Icon name='home' size={26} style={styles.Icon}/>
                        <View style={styles.botton}>
                            <Text style={styles.Text}>lanjutkan dengan google</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
                    <View style={styles.head}>
                        <View style={styles.botton}>
                            <Text style={styles.Text}>daftar sekarang</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.head}>
                        <View style={styles.botton}>
                            <Text style={styles.Text}>facebook</Text>
                        </View>
                    </View>
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
        backgroundColor: 'red',
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
        borderTopLeftRadius: 7
    },
    botton : {
        backgroundColor:'#44a6fc',
        padding:10,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        width :250
    },
    Text : {
        fontSize: 13,
        color :'#FFFFFF'
    }
  });
  
export default HomeAuth
