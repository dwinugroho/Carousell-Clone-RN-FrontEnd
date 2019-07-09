import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ListDividerExample extends Component {
  render() {
    return (
      <Container>
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
                <TouchableOpacity>
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
            <ListItem itemDivider>
              <Text></Text>
            </ListItem>
            <ListItem>
              <Text style={{color :'red'}}>keluar</Text>
            </ListItem>  
          </List>
        </Content>
      </Container>
    );
  }
}