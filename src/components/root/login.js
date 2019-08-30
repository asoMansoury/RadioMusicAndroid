import React,{Component} from 'react';
import {Text, View, TextInput, SafeAreaView,Image,Dimensions,Platform} from 'react-native';
import {loginPageStyle} from './../../assets/styles/index';
import Carousel from 'react-native-snap-carousel';
import {homeFlux, homeTabs} from './../../assets/constants'
import {connect} from 'react-redux';
import {material} from 'react-native-typography';
import {Button} from 'react-native-elements';
import ModalLogin from './ModalLogin';
import { Actions} from 'react-native-router-flux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
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
      this.onLoginPress = this.onLoginPress.bind(this);

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
    const widthWindow = Dimensions.get('window').width;
    return(
                
          <SafeAreaView  style={loginPageStyle.container}>
                  
              <View style={{flex:.5,borderBottomEndRadius:30}}>
                    <Carousel
                            autoplay={true}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={widthWindow}
                            itemWidth={widthWindow}
                            renderItem={this._renderItem}
                            onSnapToItem = { index => this.setState({activeIndex:index}) }
                        />
                </View>
                <View style={loginPageStyle.loginScreenContainer}>
                          <View style={loginPageStyle.loginFormView}>
                              <Text style={[loginPageStyle.logoText,material.display1]}>Radio</Text>
                                  {/* <Icon name="ios-search" size={20} style={{padding:10}}></Icon> */}
                                  <TextInput placeholder="Username" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} />
                                  <TextInput placeholder="Password" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} secureTextEntry={true}/>
                                  <Button
                                      buttonStyle={[loginPageStyle.loginButton,{width:"90%"}]}
                                      color='$iconColor'
                                      onPress={() => Actions.replace(homeFlux)}
                                      title="Login"/>
                                  <Button 
                                      buttonStyle={{width:"90%",marginTop:6,marginLeft:20}}
                                      type="outline"
                                      onPress={() => this.ModalLogin.refs.modal1.open()}
                                      title="Forgot Password">
                                      </Button>
                           <ModalLogin ref={ref=>this.ModalLogin=ref}></ModalLogin> 
                           <KeyboardSpacer></KeyboardSpacer>      
                          </View>    
                  </View>
            </SafeAreaView>
    )
  }

  

  onLoginPress() {
     Actions.reset(homeTabs);
  }

}

const mapStateToProps = state =>{
  return {
    isFirstTime: state.initAppReducer.isFirstTime
  }
}
export default connect(mapStateToProps)(Login);
