import React, { Component } from 'react'
import { Text, View, Image,Button } from 'react-native'
import HeaderBack from '../components/headerBack'
import { TextInput } from 'react-native-gesture-handler';
export default class Chart extends Component {
    state = {
        order : 5
    }
    render() {
        return (
            <View>
                <HeaderBack title="chart" navigation={this.props.navigation} />
                <View style={{flexDirection: 'row', }}>

                    <View style={{flex :1,paddingTop:20}}>
                      <Image style={{ height: 75,width : 75}} source={require('../assets/1.jpg')} />
                    </View>

                    <View style={{ flex: 3 ,backgroundColor: 'blue',paddingTop: 20,paddingLeft: 10,}}>
                        <Text>judul product</Text>
                        <View style={{flex :1,flexDirection: 'row'}}>
                            <Button style={{width :25,height:25}} title='-'/>
                            <TextInput value={this.state.order}/>
                            <Button style={{width :25,height:25}} title= '+'/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
