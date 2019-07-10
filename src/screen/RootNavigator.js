import React, { Component } from 'react'

import {createAppContainer,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import Activity from './activity';
import Group from './group';
import User from './user';
import Explore from './explore';
import Setting from './setting';
import Profil from './profil';
import Chart from './chart';
import ChangePassword from './changePassword';
import DetailProduct from './DetailProduct'

// Components
import Home from './Home'
import Wishlist from './wishlist';



const AppStack = createStackNavigator({
    Home : {screen : Home},
    setting : {screen :Setting},
    profil : {screen :Profil},
    chart : {screen :Chart},
    changePassword : {screen : ChangePassword},
    wishlist : {screen :Wishlist},
    DetailProduct: {screen: DetailProduct}
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default AppContainer = createAppContainer(AppStack)

