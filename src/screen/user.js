import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image ,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/AntDesign'
import Iklan from './Tab/iklan';
import Review from './Tab/review';
import About from './Tab/about';
import { withNavigation } from 'react-navigation';

class User extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'Iklan', title: 'Iklan' },
      { key: 'Review', title: 'Review' },
      { key: 'About', title: 'About' },
    ],
 };

  render() {
    return (
      <React.Fragment>
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
				<TabView
			        navigationState={this.state}
			        labelStyle={{backgroundColor: 'blue'}}
			        renderScene={SceneMap({
			          Iklan: Iklan,
			          Review: Review,
			          About :About,
			        })}
			        onIndexChange={index => this.setState({ index })}
			        initialLayout={{ width: Dimensions.get('window').width, height: 100 }}
			        renderTabBar={props =>
	                    <TabBar
	                        {...props}
	                        indicatorStyle={{backgroundColor: '#fc1717'}}
                          style={styles.tabNav}
                          labelStyle={{color :'#747678'}}
	                    />
	                }
				    />
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
    tabNav: {
      backgroundColor: '#FFFFFF',
      color :'black'
    },
})

export default withNavigation(User)
