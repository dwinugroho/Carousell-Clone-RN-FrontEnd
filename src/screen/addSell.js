import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import HeaderBack from '../components/headerBack';
import { Container, Content, List, ListItem, Text } from 'native-base';
import RadioForm from 'react-native-simple-radio-button'
import ImagePicker from 'react-native-image-picker';
import { postProductSell } from '../public/action/product'
import { connect } from 'react-redux';

class AddSell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.navigation.state.params.id_sub_category,
            product_name: '',
            brand: '',
            description: '',
            condition: 0,
            price: '',
            image: null,
            radio: [
                { label: 'new', condition: 0 },
                { label: 'second', condition: 1 }
            ]
        }
    }


    handleImage = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchCamera(options, (response) => {
            console.log(response)
            if (response.uri) {
                this.setState({ image: response.uri })
                setTimeout(() => {
                    console.log(this.state.image)
                }, 500)
            }
            // Same code as in above section!
        });
        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);

        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         const source = { uri: response.uri };
        //         this.setState({
        //             avatarSource: source,
        //             // image: response
        //         })
        //     }
        // })
    }

    handleSubmit = () => {
        const { category, product_name, brand, description, condition, price, image, } = this.state
        if (this.state.product_name !== '' && this.state.brand !== '' &&
            this.state.description !== '' &&
            this.state.price !== '') {
            // console.log('this.state')
            // console.log(this.state)
            let Data = {
                'id_sub_category': category,
                'product_name': product_name,
                'brand': brand,
                'description': description,
                'condition': condition,
                'price': price,
                'image': image
            }
            // console.log('Data')
            // console.log(Data)
            this.props.dispatch(postProductSell(Data));
            // this.props.navigation.pop()
            return true
        } else {
            Alert.alert("warning", 'data please insert data in from')
        }
    }

    render() {
        console.log('this.props.navigation.state.params')
        console.log(this.props.navigation.state.params)
        const { image } = this.state
        return (
            <Container>
                <HeaderBack title='complete your goods' navigation={this.props.navigation} />
                <Content>
                    <List>
                        <ListItem>
                            <TextInput placeholder='name your item' style={{ width: '100%' }}
                                style={styles.input} placeholder='product_name'
                                onChangeText={(value) => this.setState({ product_name: value })}
                                returnKeyType='next'
                                value={this.state.product_name}
                                autoCorrect={false}
                                editable={true}
                                maxLength={40}
                                multiline={false} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>brand</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='brand' style={{ width: '100%' }}
                                style={styles.input} placeholder='brand'
                                onChangeText={(value) => this.setState({ brand: value })}
                                returnKeyType='next'
                                value={this.state.brand}
                                autoCorrect={false}
                                editable={true}
                                maxLength={40}
                                multiline={false} />
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
                                onPress={(value) => this.setState({ condition: value })}
                                value={this.state.condition}
                                onSelectionChange={(value) => { this.setState({ condition: value }) }}
                            />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>price</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='price' style={{ width: '100%' }}
                                style={styles.input} placeholder='price'
                                onChangeText={(value) => this.setState({ price: value })}
                                returnKeyType='next'
                                value={this.state.price}
                                autoCorrect={false}
                                editable={true}
                                maxLength={40}
                                multiline={false} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>description</Text>
                        </ListItem>
                        <ListItem>
                            <TextInput placeholder='size' style={{ width: '100%' }}
                                style={styles.input} placeholder='description'
                                onChangeText={(value) => this.setState({ description: value })}
                                returnKeyType='next'
                                value={this.state.description}
                                autoCorrect={false}
                                editable={true}
                                maxLength={40}
                                multiline={false} />
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>image</Text>
                        </ListItem>
                        <TouchableOpacity onPress={this.handleImage}>
                            <Text>image</Text>
                            <ListItem>
                                {
                                    this.state.image && <Image source={{ uri: this.state.image }}
                                        style={{ height: 50, width: 50 }} />
                                }

                            </ListItem>
                        </TouchableOpacity>
                    </List>
                </Content>
                <TouchableOpacity style={styles.actionButton} onPress={this.handleSubmit}>
                    <Text style={{ fontSize: 20, color: 'white' }}>sell</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
export default connect(mapStateToProps)(AddSell)
const styles = StyleSheet.create({
    actionButton: {
        backgroundColor: '#4685eb',
        elevation: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
})