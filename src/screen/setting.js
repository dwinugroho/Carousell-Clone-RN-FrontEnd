import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBack from '../components/headerBack'

export default class ListDividerExample extends Component {

  logout = async () => {

      await AsyncStorage.removeItem('Token')
      await AsyncStorage.removeItem('username')

      this.props.navigation.navigate('homeAuth')
  }

  render() {
    return (
      <Container>
        <HeaderBack title="setting" navigation={this.props.navigation}/>
        <Content>
          <List>
            <TouchableOpacity>
            <ListItem itemDivider>
              <Text>ACCOUNT SETTINGS</Text>
            </ListItem>                    
            </TouchableOpacity>
            <TouchableOpacity>
            <ListItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('profil')}>
              <Text>change profile</Text>
                </TouchableOpacity>
            </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
            <ListItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('changePassword')}>
              <Text>change password</Text>
                </TouchableOpacity>
            </ListItem>
            </TouchableOpacity>

            <ListItem itemDivider>
              <Text>NEED HELP</Text>
            </ListItem>  
                <TouchableOpacity>
            <ListItem>
              <Text>contact us</Text>
            </ListItem>
                </TouchableOpacity>
                <TouchableOpacity>
            <ListItem>
              <Text>about corrausel</Text>
            </ListItem>
                </TouchableOpacity>
            <ListItem itemDivider>
              <Text>ABOUT THIS APPLICATION</Text>
            </ListItem>  
            <TouchableOpacity>
            <ListItem>
              <Text>version</Text>
            </ListItem>
            </TouchableOpacity>
                <TouchableOpacity>
            <ListItem>
              <Text>service requirements</Text>
            </ListItem>
                </TouchableOpacity>
            <TouchableOpacity>
              <ListItem>
                <Text>application policy</Text>
              </ListItem>
              </TouchableOpacity>
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