
import React,{Component} from 'react';
import  {View,Text} from 'react-native';
import {swiperPage} from './../../assets/styles/index';

class slide2 extends Component{
  render(){
    return(
        <View style={swiperPage.slide1}>
          <Text style={swiperPage.text}>Slide 2</Text>
        </View>
    )
  }
}

export default slide2;