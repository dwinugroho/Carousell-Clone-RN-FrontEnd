import React, { Component } from 'react'
import {
	Animated,
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
	StatusBar,
	RefreshControl,
	Dimensions,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native'

import Icon from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import moment from 'moment'

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const screenWidth = Math.round(Dimensions.get('window').width);

export default class DetailProduct extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
		    scrollY: new Animated.Value(
		        // iOS has negative initial scroll value because content inset...
		      Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
		    ),
		    refreshing: false,
		    image: null,
	    };
	}

    componentWillMount() {
        const image = JSON.parse(this.props.navigation.state.params.image)
        this.setState({
            image: image
        })
    }

	_renderScrollViewContent() {
	    const data = Array.from({ length: 30 });
	    return (
	    	<View style={styles.scrollViewContent}>
	        	<View style={{padding: 15, backgroundColor: 'white'}}>

	    			<Text style={{
	    				fontWeight: 'bold', 
	    				color: 'black',
	    				fontSize: 20,
	    				marginBottom: 10
	    			}}
>
	    			{this.props.navigation.state.params.product_name}

	    			</Text>

	    			<View style={{flexDirection: 'row', marginVertical: 10}}>

	    				<EvilIcons style={{marginRight: 20, top: 2}} name="clock" size={17} color={'black'} />
	    				<Text>
	    					{moment(this.props.navigation.state.params.date_created).startOf('minutes').fromNow()} oleh 
	    					<Text style={{color: '#4287f5'}}> {this.props.navigation.state.params.username}</Text>
	    				</Text>
	    			</View>

	    			<View style={{flexDirection: 'row', marginVertical: 10}}>

	    				<Entypo style={{marginRight: 20}} name="price-tag" size={17} color={'black'} />
	    				<Text>
	    					Rp {this.state.price}
	    				</Text>
	    			</View>

	    			<View style={{flexDirection: 'row', marginVertical: 10}}>

	    				<Icon style={{marginRight: 20}} name="hearto" size={17} color={'black'} />
	    				<Text>
	    					5 Suka
	    				</Text>
	    			</View>

	    			<View style={{flexDirection: 'row', marginVertical: 10}}>

	    				<Icon style={{marginRight: 20}} name="inbox" size={17} color={'black'} />
	    				<Text>
	    					{this.props.navigation.state.params.category}
	    				</Text>
	    			</View>

	    			<View style={{flexDirection: 'row', marginVertical: 10}}>

	    				<Feather style={{marginRight: 20}} name="align-right" size={17} color={'black'} />
	    				<Text>
	    					Atasan
	    				</Text>
	    			</View>

	    			<View style={{flexDirection: 'row', marginVertical: 10}}>

	    				<MaterialIcons style={{marginRight: 20}} name="description" size={17} color={'black'} />
	    				<Text>
	    					{this.props.navigation.state.params.description}
	    				</Text>
	    			</View>

	    		</View>
	    	</View>
	    );
	}


	render() {

		// Because of content inset the scroll value will be negative on iOS so bring
    	// it back to 0.
	    const scrollY = Animated.add(
	      this.state.scrollY,
	      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
	    );
	    const headerTranslate = scrollY.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE],
	      outputRange: [0, -HEADER_SCROLL_DISTANCE],
	      extrapolate: 'clamp',
	    });
	    const morePhotos = scrollY.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE],
	      outputRange: [0, -HEADER_SCROLL_DISTANCE],
	      extrapolate: 'clamp',
	    });

	    const imageOpacity = scrollY.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
	      outputRange: [1, 1, 0],
	      extrapolate: 'clamp',
	    });
	    const imageTranslate = scrollY.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE],
	      outputRange: [0, 100],
	      extrapolate: 'clamp',
	    });

	    const titleScale = scrollY.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
	      outputRange: [1, 1, 0.8],
	      extrapolate: 'clamp',
	    });
	    const titleTranslate = scrollY.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
	      outputRange: [0, 0, -8],
	      extrapolate: 'clamp',
	    });


		return(
			<View style={styles.fill}>
		        <StatusBar
		          translucent
		          barStyle="light-content"
		          backgroundColor="rgba(0, 0, 0, 0.251)"
		        />

		        <Animated.ScrollView
		          style={styles.fill}
		          scrollEventThrottle={1}
		          onScroll={Animated.event(
		            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
		            { useNativeDriver: true },
		          )}
		          refreshControl={
		            <RefreshControl
		              refreshing={this.state.refreshing}
		              onRefresh={() => {
		                this.setState({ refreshing: true });
		                setTimeout(() => this.setState({ refreshing: false }), 1000);
		              }}
		              // Android offset for RefreshControl
		              progressViewOffset={HEADER_MAX_HEIGHT}
		            />
		          }
		          // iOS offset for RefreshControl
		          contentInset={{
		            top: HEADER_MAX_HEIGHT,
		          }}
		          contentOffset={{
		            y: -HEADER_MAX_HEIGHT,
		          }}
		        >
		          {this._renderScrollViewContent()}
		        </Animated.ScrollView>


		        <Animated.View
		          style={[
		            styles.header,
		            { transform: [{ translateY: headerTranslate }] },
		          ]}
		        >
		        	<TouchableWithoutFeedback style={{flex: 1}} onPress={() => {console.warn('Berhasil')}} >
		        		<Animated.Image
				          	onPress={() => {console.warn('sdhgjh')}}
				            style={[
				              styles.backgroundImage,
				              {
				                opacity: imageOpacity,
				                transform: [{ translateY: imageTranslate }],
				              },
				            ]}
				            source={{uri: this.state.image[0]}}
				        />

		        	</TouchableWithoutFeedback>
		        	<Animated.View 
		        		style={[
		        			styles.morePhotos,
		        			{
				                opacity: imageOpacity,
				                transform: [{ translateY: imageTranslate }],
				            },
		        		]}>
		        		<Entypo name='images' size={15} color={'#f5f6f7'} />
		        		<Text style={{color: 'white', marginLeft: 10}}>{this.state.image.length} Foto</Text>
		        	</Animated.View>
		          	
		        </Animated.View>
		        
		        <Animated.View
		          style={
		            styles.bar
		            }
		        >
		        	<TouchableOpacity 
		        		onPress={() => {
		        			this.props.navigation.goBack()
		        		}} 
		        		style={{flex: 1, alignItems: 'flex-start'}}
		        	>
		        		<Icon style={styles.topIcon} name='arrowleft' size={20} color={'#f5f6f7'} />
		        	</TouchableOpacity>
		        	
		        	<TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
		        		<Entypo style={styles.topIcon} name='dots-three-horizontal' size={20} color={'#f5f6f7'} />
		        	</TouchableOpacity>
		        </Animated.View>
		        
		      </View>
		)
	}
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#c22727',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: screenWidth,
    height: HEADER_MAX_HEIGHT,
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  topIcon: {
  	color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 100,
    padding: 5,
    top: -7
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  morePhotos: {
  	position: 'absolute', 
  	bottom: 10, 
  	right: 10,
  	flexDirection: 'row',
  	backgroundColor: 'rgba(0, 0, 0, 0.4)',
  	padding: 5,
  	paddingHorizontal: 10,
  	borderRadius: 50
  }
});