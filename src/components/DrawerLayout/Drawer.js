import React,{Component} from 'react';
import {View,Text, Item, Icon} from 'native-base';
import {Image,BackHandler,BackAndroid,ToastAndroid} from 'react-native';
import {darwerLayout} from './../../assets/styles/index';
import { Actions } from 'react-native-router-flux';
var backButtongPressedOnceToExit = false;

export default class DrawerLayout extends Component{


    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress.bind(this))
      }
  
      onBackPress(){
        if(backButtongPressedOnceToExit===true){
            BackHandler.exitApp();
            return false;
        }else{
            backButtongPressedOnceToExit=true;
            ToastAndroid.show("Press Back Button again to exit",ToastAndroid.SHORT);
            setTimeout(() => {
                backButtongPressedOnceToExit=false
            }, 2000);
            return true;
        }
      }
  
      componentWillUnmount(){
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress.bind(this))
      }

    render(){
        return(
            <View style={darwerLayout.container}>
                <Image source={require('./../../assets/images/1.jpg')} style={darwerLayout.Image}></Image>
                <View>
                    <Item style={darwerLayout.Item} onPress={()=>Actions.replace("home")}>
                        <Text style={darwerLayout.Text}>خانه</Text>
                        <Icon name="md-home" style={darwerLayout.Icon}></Icon>
                    </Item>
                </View>
                <View>
                    <Item style={darwerLayout.Item} onPress={()=>Actions.replace("userProduct")}>
                        <Text style={darwerLayout.Text}>محصولات خریداری شده</Text>
                        <Icon name="md-albums" style={darwerLayout.Icon}></Icon>
                    </Item>
                </View>
                <View>
                    <Item style={darwerLayout.Item} onPress={()=>Actions.replace("setting")}>
                        <Text style={darwerLayout.Text}>تنظیمات</Text>
                        <Icon name="md-settings" style={darwerLayout.Icon}></Icon>
                    </Item>
                </View>
            </View>
        )
    }
}