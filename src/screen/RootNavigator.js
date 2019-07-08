import {createAppContainer,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import Activity from './activity';
import Group from './group';
import User from './user';
import Explore from './explore';

const Material = createMaterialTopTabNavigator({
    explore : {screen :Explore},
    activity : {screen : Activity},
    Group : {screen :Group},
    user : {screen :User}
},{
    tabBarOptions : {
        showIcon : true,
        activeTintColor : 'white',
        style : {
            backgroundColor: 'red',
        }
    }
})

const AppStack = createStackNavigator({
    explore : {
        screen : Material
    }
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default createAppContainer(AppStack)