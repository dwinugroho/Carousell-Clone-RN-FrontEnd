import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';


class User extends Component {
  render() {
    return (
      <View style={{flex :1,backgroundColor: '#FFFFFF',}}>
          <Image style={{height:90,width:'100%'}} source={require('../assets/2.jpg')}/>
        <View style={{ flexDirection: 'row',marginTop: -40,}}>
          <View style={{ flex: 3 ,paddingLeft: 10,}}>
            <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={require('../assets/1.jpg')} />
          </View>
          <View style={{ flex: 3, justifyContent: 'flex-end' ,paddingLeft: 10}}>
            <View style={{ flexDirection: 'row' ,justifyContent:'space-around'}}>
              <Image style={{height :20,width :20}} source={require('../assets/home.png')}/>
              <Image style={{height :20,width :20}} source={require('../assets/gopay.png')}/>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('setting')} >
              <Image style={{height :20,width :20}} source={require('../assets/help.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 15 ,paddingLeft: 10}}>
          <Text style={{color :'black',fontSize: 16}}>joni hartanto</Text>
        </View>
        <View style={{flexDirection: 'row',padding: 15,justifyContent:'space-around'}}>
          <Text style={{fontSize : 13}}>sudah verivikasi</Text>
          <Text style={{fontSize :13}}>tergabung hari ini</Text>
        </View>
      </View>
    );
  }
}
export default withNavigation(User)
