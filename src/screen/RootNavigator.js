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
import HomeAuth from './auth/homeAuth';
import Register from '../screen/auth/register'
import Login from './auth/login';
import Search from './search';
import Category from './category';
import subCategory from './subCategory'
import AddSell from './addSell';


const AppStack = createStackNavigator({
    Home : {screen : Home},
    setting : {screen :Setting},
    profil : {screen :Profil},
    chart : {screen :Chart},
    changePassword : {screen : ChangePassword},
    wishlist : {screen :Wishlist},
    DetailProduct: {screen: DetailProduct},
    homeAuth : {screen : HomeAuth},
    login : {screen :Login},
    register : {screen : Register},
    search: {screen :Search},
    category : {screen :Category},
    subcategory : {screen :subCategory},
    addSell : {screen :AddSell}

},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default AppContainer = createAppContainer(AppStack)

