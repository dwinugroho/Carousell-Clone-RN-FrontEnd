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

// Components
import Home from './Home'



const AppStack = createStackNavigator({
    Home : {screen : Home},
    setting : {screen :Setting},
    profil : {screen :Profil},
    chart : {screen :Chart},
    changePassword : {screen : ChangePassword}
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

const AppContainer = createAppContainer(AppStack)


class StackNavigator extends Component {
    render() {
        return(
            <React.Fragment>
                <AppContainer />
            </React.Fragment>
        )
    }
}

export default StackNavigator;

