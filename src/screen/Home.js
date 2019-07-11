import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Activity from './activity';
import Group from './group';
import User from './user';
import Explore from './explore';

import Header from '../components/header'



export default class Home extends Component {

	// State
	state = {
	    index: 0,
	    routes: [
	      { key: 'Explore', title: 'Explore' },
	      { key: 'Group', title: 'Group' },
	      { key: 'Activity', title: 'Activity' },
	      { key: 'User', title: 'User' },
	    ],
	 };

	 componentWillMount() {
        AsyncStorage.getItem('Token', (error, result) => {
            if (result) {
            	console.log('Login Success')
            } else {
            	this.props.navigation.navigate('homeAuth')
            }
        })
    }

	render() {
		return(
			<React.Fragment>
				<Header navigation={this.props.navigation} />
				<TabView
			        navigationState={this.state}
			        labelStyle={{backgroundColor: 'red'}}
			        renderScene={SceneMap({
			          Explore: Explore,
			          Group: Group,
			          Activity: Activity,
			          User: User,
			        })}
			        onIndexChange={index => this.setState({ index })}
			        initialLayout={{ width: Dimensions.get('window').width, height: 100 }}
			        renderTabBar={props =>
	                    <TabBar
	                        {...props}
	                        indicatorStyle={{backgroundColor: 'white'}}
	                        style={styles.tabNav}
	                        labelStyle={styles.labelStyle}
	                    />
	                }
				    />
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
    tabNav: {
    	backgroundColor: '#c22727'
    },
    labelStyle: {
    	fontSize: 12
    }
})