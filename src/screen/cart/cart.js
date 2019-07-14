import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image,
    AsyncStorage,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HeaderBack from '../../components/headerBack'
import { TextInput } from 'react-native-gesture-handler';

import { List, ListItem, Left, Body, Picker, Icon, Button } from 'native-base'

import { connect } from 'react-redux'
import { getCart } from '../../public/action/cart'

import CardCart from './cardCart'

import axios from 'axios'

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: ""
        };
      }
    onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }

    componentWillMount() {
        AsyncStorage.getItem('id_user', (error, result) => {
            if (result) {
                this.props.dispatch(getCart(result))
            }
        })

    }


    render() {
        return (
            <View style={{marginBottom:60}}>
                <HeaderBack title="Cart" navigation={this.props.navigation} />
                <ScrollView>
                    <FlatList 
                        data={this.props.cart.data}
                        keyExtractor={(item) => {item.id_cart.toString()}}
                        renderItem={({item, index}) => {
                            return(
                                <CardCart key={item.id_cart} item={item} index={index} />
                            )
                        }}
                    />
                    <View style={{marginTop:20}}>
                        <List>
                            <ListItem itemDivider>
                                <Left>
                                    <Text style={{fontWeight:'bold'}}>Pilih Alamat Pengiriman</Text>
                                </Left>
                                <Body>
                                    <Text style={{fontWeight:'bold', textAlign:'right', marginRight:'10%'}}>Pilih</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                              <Text>Jl Kaliurang Km 5, Jalan Pogung Baru No.9, Pogung Kidul, Sinduadi, Mlati, Sleman Regency, Special Region of Yogyakarta 55284</Text>
                            </ListItem>
                        </List>
                    </View>
                    <View style={{paddingBottom:20}}>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          headerBackButtonText="Baaack!"
                          selectedValue={this.state.selected}
                          onValueChange={this.onValueChange.bind(this)}
                        >
                          <Picker.Item label="---- Pilih Metode Pembayaran ----" value="" />
                          <Picker.Item label="Transfer BRI" value="key0" />
                          <Picker.Item label="Transfer BNI" value="key1" />
                          <Picker.Item label="Transfer BCA" value="key2" />
                          <Picker.Item label="Indomart" value="key3" />
                          <Picker.Item label="Alfamart" value="key4" />
                        </Picker>
                    </View>
                    <View>
                        <Button block danger style={{height:60}}>
                            <Text style={styles.textCheckout}>Checkout</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(MapStateToProps)(Cart)


const styles = StyleSheet.create({
    parentCard: {
        backgroundColor: 'white',
        elevation: 7,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },
    imageWarp: {
        backgroundColor: 'blue',
        width: 90,
        height: 100
    },
    textCheckout:{
        color:'white', 
        fontWeight:'bold', 
        fontSize:20
    }
})
