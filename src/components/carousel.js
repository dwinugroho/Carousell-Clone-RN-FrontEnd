import React, { Component } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import Carousel from 'react-native-smart-carousel';
// import SnowmanImage from './images/snowman1';

export default class Mycarousel extends Component {
    render() {
        const datacarousel = [
            {
                "id": 339964,
                "imagePath": "https://digiads.co.id/wp-content/uploads/2018/05/JuaraIklanMyads-Carousel-1913x978px-01-978x500.jpg", // URL
            },
            {
                "id": 339403,
                "imagePath": "https://www.wanista.com/wp-content/uploads/2017/05/carousell1-1024x627.jpg"
            },
            {
                "id": 339964,
                "imagePath": "https://media.karousell.com/media/photos/special-collections/2019/07/09/MY_List&Win-wk28_M_(1500,_610).png",
            },
            {
                "id": 339403,
                "imagePath": "https://mk0onemorecupofd9ppb.kinstacdn.com/wp-content/uploads/2017/07/Make-Money-Carousell.jpg",
            },
            {
                "id": 33947879,
                "imagePath": "https://media.karousell.com/media/photos/special-collections/2019/07/02/MY_wk27slashparty_M_(1500,_610).png",
            },
            {
                "id": 338565,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuz0C65GTXnAOwA-e9RU85IbEU-u8HAhJoiCvil_Y6WNIseV1Y",
            },
            {
                "id": 33789,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGDh99SUm-VE6dCKgwXvYdRP1HYeDXzJ9Txn5nbaEjDXcKB7U",
            },
        ];

        return (
            <ScrollView
            ref={(dots) => { this.parentScrollView = dots; }}>
                <Carousel
                    data={datacarousel}
                    autoPlay ={true}
                    parallax={true}
                    playTime={2000}
                    parentScrollViewRef={this.parentScrollView}
                />
            </ScrollView>
        )
    }
}
