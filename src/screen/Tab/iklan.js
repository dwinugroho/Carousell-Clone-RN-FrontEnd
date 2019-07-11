import React, { Component } from 'react'
import { 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    StyleSheet, 
    Button 
} from 'react-native'

import { connect } from 'react-redux'
import moment from 'moment'

// Action
import { getProductSell } from '../../public/action/product';


class FlatListItem extends Component {

    componentWillMount() {

        const   image = JSON.parse(this.props.item.image)
        const   bilangan = this.props.item.price;
        const   reverse = bilangan.toString().split('').reverse().join('');
        const   ribuan  = reverse.match(/\d{1,3}/g);
        const   result  = ribuan.join('.').split('').reverse().join('');
       
        this.setState({
            image: image,
            price: result
        })

        
    }

    render() {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={() => {
                this.props.navigation.navigate('DetailProduct', this.props.item)
            }}>
                <View style={styles.parentCard}>

                    <View style={styles.profile}>
                        <Image
                            style={styles.profilePicture}
                            source={{uri: 'https://cdn.dribbble.com/users/1044993/screenshots/5848337/penguin_dribbble.png'}} 
                        />
                        <View>
                            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>{this.props.item.username}</Text>
                            <Text style={{color: 'grey', fontSize: 10}}>{moment(this.props.item.date_created).format('DD MMMM')}</Text>
                        </View>
                    </View>
                    <View style={styles.imageWrap}>
                        <Image 
                            style={styles.productImage}
                            resizeMode="cover"
                            source={{uri: this.state.image[0]}}
                        />
                    </View>
                    <Text style={styles.title}>{this.props.item.product_name}</Text>
                    <Text style={styles.price}>Rp {this.state.price}</Text>
                    <Text numberOfLines={2} style={{fontSize: 12}}>{this.props.item.description}</Text>
                    
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    parentCard: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F5F5F5',
        padding: 10,
    },
    profile: {
        marginBottom: 5,
        flexDirection: 'row'
    },
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 7,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    imageWrap: {
        width: '100%',
        height: 200,
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold', 
        color: 'black', 
        fontSize: 12,
        marginTop: 7,
    },
    price: {
        fontSize: 15
    }
})


class Iklan extends Component {


    componentDidMount() {
        this.props.dispatch(getProductSell(this.props.id_user));
    }

    render() {
       console.log('this.props.product.sell')
       console.log(this.props)
        return (
            <View>
                <FlatList
                    data={this.props}
                    numColumns={2}
                    keyExtractor={(item) => item.id_user.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem navigation={this.props.navigation} item={item} index={index} />
                        )
                    }}
                />
            </View>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        product : state.product
    }
}

export default connect(MapStateToProps)(Iklan)
