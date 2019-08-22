
import React,{Component} from 'react';
import  {View,Text,ImageBackground} from 'react-native';
import {swiperPage} from './../../assets/styles/index';

class slide1 extends Component{
  render(){
    return(
        <View style={swiperPage.slide1}>
            <Text>Slide 1</Text>
        </View>
        // <ImageBackground source={require('./../../assets/images/react.png')} style={swiperPage.slide1}>
        //     <Text>Slide 1</Text>
        // </ImageBackground>
    )
  }
}

export default slide1;
