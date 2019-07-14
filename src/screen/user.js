import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, AsyncStorage, ScrollView ,RefreshControl} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ImagePicker from 'react-native-image-picker';
import { getUser } from '../public/action/user'
import { connect } from 'react-redux'


import Icon from 'react-native-vector-icons/dist/AntDesign'
import Iklan from './Tab/iklan';
import Review from './Tab/review';
import About from './Tab/about';
import { withNavigation } from 'react-navigation';

class User extends Component {
  state = {
    index: 0,
    refresh: false,
    isLoading : false,
    routes: [
      { key: 'Iklan', title: 'Iklan' },
      { key: 'Review', title: 'Review' },
      { key: 'About', title: 'About' },
    ],
    profile: 'https://www.logolynx.com/images/logolynx/b4/b4ef8b89b08d503b37f526bca624c19a.jpeg'
  };

  componentDidMount() {
    AsyncStorage.getItem('username', (error, result) => {
      if (result) {
        this.props.dispatch(getUser(result))
      }
    })

  }
  _onRefresh = () => {
    this.setState({
      refresh: true
    })
    AsyncStorage.getItem('username', (error, result) => {
      if (result) {
        this.props.dispatch(getUser(result))
      }
    })
  }
  handleImage = async () => {
    const options = {
      mediaType: 'photo',
      noData: true
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        })
      }
    })
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF', }}
        refreshControl={
          <RefreshControl
            onRefresh={this._onRefresh}
            refreshing={this.state.isLoading}
          />
        }>
        <Image style={{ height: 90, width: '100%' }} source={require('../assets/2.jpg')} />
        <View style={{ flexDirection: 'row', marginTop: -40, }}>
          <TouchableOpacity style={{ flex: 3, paddingLeft: 10, }} onPress={this.handleImage}>
            {
              this.props.user.data.data == undefined ?
                <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={require('../assets/1.jpg')} />
                :
                <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={{ uri: this.props.user.data.data.image }} />
            }
          </TouchableOpacity>
          <View style={{ flex: 3, justifyContent: 'flex-end', paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity style={{ padding: 7 }}>
                <Icon name='qrcode' size={25} color={'#7fa9fa'}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 7 }}>
                <Icon name='sharealt' size={25} color={'#7fa9fa'}></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('setting')} style={{ padding: 7 }}>
                <Icon name='setting' size={25} color={'#7fa9fa'}></Icon>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 15, paddingLeft: 10 }}>
          {
            this.props.user.data.data == undefined ?
              <Text />
              :
              <Text style={{ color: 'black', fontSize: 16 }}>{this.props.user.data.data.username}</Text>
          }
        </View>

        <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 13 }}>sudah verivikasi</Text>
          <Text style={{ fontSize: 13 }}>tergabung hari ini</Text>
        </View>
        <TabView
          navigationState={this.state}
          labelStyle={{ backgroundColor: 'blue' }}
          renderScene={SceneMap({
            Iklan: Iklan,
            Review: Review,
            About: About,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width, height: 100 }}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#fc1717' }}
              style={styles.tabNav}
              labelStyle={{ color: '#747678' }}
            />
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tabNav: {
    backgroundColor: '#FFFFFF',
    color: 'black'
  },
})

const MapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withNavigation(connect(MapStateToProps)(User))
