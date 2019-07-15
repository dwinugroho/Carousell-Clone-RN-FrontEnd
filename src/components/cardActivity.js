import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Left, Body, Right, Item, List, ListItem, Thumbnail,  } from 'native-base'
export default class CardActivity extends Component {
  render() {
    return (
    <Container>	
      	<Content>
	         <Card>
	            <ListItem avatar noBorder style={styles.seller}>
	              	<Left>
	                	<Thumbnail source={{ uri: 'https://jasamedia.co.id/images/t2.jpg' }} style={styles.imageThumbnail}/>
	                	<Text> {this.props.item.username}</Text>
	              	</Left>
	              	<Body>
	              		<Text style={styles.textDone}>Selesai</Text>
	              	</Body>
	            </ListItem>
	            <CardItem>
		                <Image
		                	 style={{width: 70, height: 70, resizeMode: 'cover'}}
		                	source={{uri: "https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg"}}
		                />
	            	<Body style={styles.textCheckout}>

		                <Text style={styles.textProduct} numberOfLines={1} >{this.props.item.product_name}</Text>
                		<Text style={styles.qty} >Qty : x2</Text>
		                {/* <Text >{this.props.item.}</Text> */}

	            	</Body>
	            </CardItem>
	            <View
				  style={{
				    borderBottomColor: '#BEBEBE',
				    borderBottomWidth: 1,
				    marginHorizontal : '7%'
				  }}
				/>
	            <Right style={styles.totalPrice}>
		                <Text style={styles.textTotalPrice}>
		                	<Text> Total bayar </Text>
		                	<Text style={{color:'coral'}}> {this.props.item.total_price}</Text>
		                </Text> 
	            </Right>
	         </Card>
        </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
	seller:{
		marginBottom: 10,
	    marginTop:0,	
	},
	imageThumbnail:{
		width:25, 
		height:25
	},
	textDone:{
		textAlign:'right', 
		alignSelf: 'stretch',
		paddingHorizontal:'5%',
		color:'red'
	},
    textCheckout : {
    	paddingHorizontal:10,
    	// paddingVertical:10
    },
    textProduct:{
    	fontSize: 17,
    	color:'black'
    },
    qtyParent:{
    	backgroundColor:'skyblue'
    },
    qty:{
    	paddingVertical:5,
    	textAlign:'right',
    	fontSize:11
    },
    totalPrice:{
    	textAlign: 'right', 
    	alignSelf: 'stretch',
    	paddingBottom:15,
    	paddingTop:7,
    	paddingLeft:0,
    	paddingRight:'7%',
    },
    textTotalPrice:{
    	// fontSize:12,
    	fontWeight:'bold'
    }
})