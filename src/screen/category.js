import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity ,StyleSheet} from 'react-native'
import HeaderBack from '../components/headerBack';
import { connect } from 'react-redux'
import { getCategory } from '../public/action/category';



class FlatListItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate('subcategory', this.props.item)
            }}>
            <View style={styles.container}>
                <Text style={styles.Text}>{this.props.item.category_name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    Text : {
        fontSize: 15,
        color :'#282829'
    },
    button : {
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#959596',
    }
})

export class Category extends Component {
    componentDidMount() {
        this.props.dispatch(getCategory());
    }

    render() {
        // console.log('this.props.category')
        // console.log(this.props.category)
        return (
            <View>
                 <HeaderBack title="category" navigation={this.props.navigation} />
                <FlatList
                    data={this.props.category.data}
                    numColumns={1}
                    keyExtractor={(item) => item.id_category.toString()}
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
        category: state.category
    }
}

export default connect(MapStateToProps)(Category)
