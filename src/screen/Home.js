import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Activity from './activity';
import Group from './group';
import User from './user';
import Explore from './explore';

import Header from '../components/header'



export default class Home extends Component {

	state = {
	    index: 0,
	    routes: [
	      { key: 'Explore', title: 'Explore' },
	      { key: 'User', title: 'User' },
	    ],
	 };

	render() {
		return(
			<React.Fragment>
				<Header navigation={this.props.navigation} />
				<TabView
			        navigationState={this.state}
			        renderScene={SceneMap({
			          Explore: Explore,
			          User: User,
			        })}
			        onIndexChange={index => this.setState({ index })}
			        initialLayout={{ width: Dimensions.get('window').width }}
			    />
			</React.Fragment>
		)
	}
}