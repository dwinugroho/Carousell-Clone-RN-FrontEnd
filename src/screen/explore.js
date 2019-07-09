import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Slider from '../components/slider';


class Explore extends Component {
  render() {
    return (
      <View style={{position:'relative'}}>
        <Card />
        {/* <Slider/> */}
        {/* <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 40, position: 'absolute', width: 100 ,flex:1,Bottom: 20,height:50,Bottom: 20,flex:1}}>
          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between',paddingRight:30,paddingLeft: 30,}}>
            <Text>p</Text>
            <Text>jual</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }
}
export default Explore
