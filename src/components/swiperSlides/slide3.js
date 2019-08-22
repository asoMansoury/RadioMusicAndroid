
import React,{Component} from 'react';
import  {View,Text} from 'react-native';
import {swiperPage} from './../../assets/styles/index';

class slide3 extends Component{
  render(){
    return(
        <View style={swiperPage.slide1}>
          <Text style={swiperPage.text}>Slide 3</Text>
        </View>
    )
  }
}

export default slide3;