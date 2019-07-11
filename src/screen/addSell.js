import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native'
import HeaderBack from '../components/headerBack';
import { Container, Content, List, ListItem, Text } from 'native-base';
import RadioForm from 'react-native-simple-radio-button'
// import ImagePicker from 'react-native-image-picker';

export default class AddSell extends Component {
    state = {
        value: 0,
        radio: [
            { label: 'new', value: 0 },
            { label: 'second', value: 1 }
        ]
    }

    handleImage = async () => {
        const options = {
            mediaType : 'photo',
            noData : true
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
        console.log('this.props.navigation.state.params')
        console.log(this.props.navigation.state.params)
        return (
            <Container>
                <HeaderBack title='complete your goods' navigation={this.props.navigation} />
                <Content>
                    <List>
                        <ListItem>
                            <TextInput placeholder='name your item' style={{ width: '100%' }} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>size</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='size' style={{ width: '100%' }} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>merk</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='merk' style={{ width: '100%' }} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>condition</Text>
                        </ListItem>
                        <ListItem>
                            <RadioForm
                                radio_props={this.state.radio}
                                buttonSize={15}
                                animation={true} s
                                borderWidth={1}
                                initial={0}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>price</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='price' style={{ width: '100%' }} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>deskripsi</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='size' style={{ width: '100%' }} />
                        </ListItem>
                        {/* <ListItem itemDivider>
                            <Text>image</Text>
                        </ListItem>
                        <TouchableOpacity onPress={this.handleImage}>
                        <ListItem>
                        <Image source={this.state.avatarSource} />
                        </ListItem>
                        </TouchableOpacity> */}
                    </List>
                </Content>
                <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('category')}>
                    <Text style={{ fontSize: 20, color: 'white' }}>sell</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    actionButton: {
        backgroundColor: '#4685eb',
        elevation: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
})