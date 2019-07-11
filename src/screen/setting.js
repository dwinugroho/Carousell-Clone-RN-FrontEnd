import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../components/headerBack'

export default class ListDividerExample extends Component {

  logout = async () => {

      await AsyncStorage.removeItem('Token')

      this.props.navigation.navigate('homeAuth')
  }

  render() {
    return (
      <Container>
        <HeaderBack title="setting" navigation={this.props.navigation}/>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>ACCOUNT SETTINGS</Text>
            </ListItem>                    
            <ListItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('profil')}>
              <Text>change profile</Text>
                </TouchableOpacity>
            </ListItem>
            <ListItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('changePassword')}>
              <Text>change password</Text>
                </TouchableOpacity>
            </ListItem>
            <ListItem itemDivider>
              <Text>NEED HELP</Text>
            </ListItem>  
            <ListItem>
                <TouchableOpacity>
              <Text>contact us</Text>
                </TouchableOpacity>
            </ListItem>
            <ListItem>
                <TouchableOpacity>
              <Text>about corrausel</Text>
                </TouchableOpacity>
            </ListItem>
            <ListItem itemDivider>
              <Text>ABOUT THIS APPLICATION</Text>
            </ListItem>  
            <ListItem>
                <TouchableOpacity>
              <Text>version</Text>
                </TouchableOpacity>
            </ListItem>
            <ListItem>
                <TouchableOpacity>
              <Text>service requirements</Text>
                </TouchableOpacity>
            </ListItem>
            <ListItem>
                <TouchableOpacity>
              <Text>application policy</Text>
                </TouchableOpacity>
            </ListItem>
            <TouchableOpacity onPress ={this.logout}>
                <ListItem itemDivider>
                    <Text style={{color :'red'}}>keluar</Text>
                </ListItem>  
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  }
}