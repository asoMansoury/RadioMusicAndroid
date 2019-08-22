import React,{Component} from 'react';
import {createFluidNavigator,Transition} from 'react-navigation-fluid-transitions';
import { Text, View,Button,Animated, TextInput, SafeAreaView,Image,Dimensions,Icon,Easing} from 'react-native';
import {loginPageStyle,registerPage,initialAppStyle} from './../../assets/styles/index';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import Carousel from 'react-native-snap-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'email',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    Image: require('./../../assets/images/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'password',
    title: 'Title 2',
    text: 'Other cool stuff',
    Image: require('./../../assets/images/2.png'),
    backgroundColor: '#febe29',
  }
];

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
          carouselItems: [
          {
              title:"Item 1",
              Image:'./../../assets/images/1.jpg'
          },
          {
              title:"Item 2",
              Image:'./../../assets/images/3.jpg'
          },
          {
              title:"Item 3",
              Image:'./../../assets/images/2.png'
          },
          {
              title:"Item 4",
              Image:'./../../assets/images/1.jpg'
          },
          {
              title:"Item 5",
              Image:'./../../assets/images/3.jpg'
          }
      ]}
        this._renderItem = this._renderItem.bind(this);
        this._renderItemSlider = this._renderItemSlider.bind(this);

    }

  _renderItem({item,index}){
    let ImageUri = item.Image;
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
            <Image
                source={require('./../../assets/images/1.jpg')}
                />
            <Text style={{color:'#fff'}} >{item.title}</Text>
        </View>
      )
  }

  render(){
    const width = Dimensions.get('window').width;
    return (
      <SafeAreaView style={loginPageStyle.container}>
          <View style={{flex:.5,borderBottomEndRadius:30}}>
              <Carousel
                      autoplay={true}
                      ref={ref => this.carousel = ref}
                      data={this.state.carouselItems}
                      sliderWidth={width}
                      itemWidth={width}
                      renderItem={this._renderItem}
                  />
          </View>
          <View style={[loginPageStyle.loginScreenContainer]}>
                    <View style={loginPageStyle.loginFormView}>
                      <AppIntroSlider ref={ref => this.AppIntroSlider = ref}
                      //  onSlideChange={()=>this.AppIntroSlider.goToSlide(1)}
                        paginationStyle={{backgroundColor:'#FFB74D',borderRadius:10}} showSkipButton={false}  renderItem={this._renderItemSlider}  slides={slides} onDone={()=>this._onDone()} />
                    </View>
            </View>
      </SafeAreaView>
      );
  }

    _renderItemSlider = ({ item }) => {
      if(item.key==="email")
      {
        return (
          <View >
          <TextInput placeholder="email" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} />
           {/* <MaterialIcons size ={30}  name='email' style={registerPage.inputIcon} /> */}
        </View>
        );
      }else{
        return (
          <View>
            <View>
            <TextInput placeholder="password" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} />
              {/* <MaterialIcons size ={30}  name='vpn_key' style={registerPage.inputIcon} /> */}
        </View>
        <View>
        <TextInput placeholder="Confirm Password" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} />
         {/* <MaterialIcons size ={30}  name='vpn_key' style={registerPage.inputIcon} /> */}
      </View>
          </View>
        );
      }

      }
      _onDone = () => {
      }
}



export default Register;
