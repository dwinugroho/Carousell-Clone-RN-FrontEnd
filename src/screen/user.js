import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/AntDesign'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Iklan from './Tab/iklan';
import Review from './Tab/review';
import About from './Tab/about';

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
              <TouchableOpacity  style={{padding :7}}>
              <Icon name='qrcode' size={25} color={'#7fa9fa'}></Icon>
              </TouchableOpacity>
              <TouchableOpacity  style={{padding :7}}>
              <Icon name='sharealt' size={25} color={'#7fa9fa'}></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('setting')} style={{padding :7}}>
              <Icon name='setting' size={25}  color={'#7fa9fa'}></Icon>
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
        <Container>
        <Tabs style={{backgroundColor: '#FFFFFF',}}>
          <Tab heading="iklan">
           <Iklan/>
          </Tab>
          <Tab heading="review">
            <Review/>
          </Tab>
          <Tab heading="about">
            <About/>
          </Tab>
        </Tabs>
      </Container>
      </View>
    );
  }
}
export default withNavigation(User)
