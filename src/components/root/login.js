import React,{Component} from 'react';
import {Text, View, TextInput, SafeAreaView,Image,Dimensions,Platform,ToastAndroid} from 'react-native';
import {loginPageStyle} from './../../assets/styles/index';
import Carousel from 'react-native-snap-carousel';
import {homeFlux, homeTabs} from './../../assets/constants'
import {connect} from 'react-redux';
import {material} from 'react-native-typography';
import {Button} from 'react-native-elements';
import ModalLogin from './ModalLogin';
import { Actions} from 'react-native-router-flux';
import axios from 'axios';
import {baseServer} from './../ConstApi';
import {Hoshi} from 'react-native-textinput-effects';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Dropdownalert,{CloseActionType} from 'react-native-dropdownalert';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      userData:{
        userName:'',
        password:''
      },
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

      this.userNameChange = this.userNameChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this._renderItem = this._renderItem.bind(this);
      this.onLoginPress = this.onLoginPress.bind(this);

}
_renderItem({item,index}){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
        <Image
            source={require('./../../assets/images/1.jpg')}
            />
        <Text style={{color:'#fff'}} >{item.title}</Text>
    </View>
  )
}

userNameChange(e){
  this.setState(prevState=>({
    userData:{
      userName:e,
      password:prevState.userData.password
    }
  }));
}

passwordChange(e){
  this.setState(prevState=>({
    userData:{
      password:e,
      userName:prevState.userData.userName
    }
  }));
}

  render(){
    const widthWindow = Dimensions.get('window').width;
    return(    
          <SafeAreaView  style={loginPageStyle.container}>
              <Dropdownalert ref={ref=>this.dropDownAlertRef=ref} tapToCloseEnabled={true}></Dropdownalert>
              <View style={{flex:.5,borderBottomEndRadius:30}}>
                    <Carousel
                            autoplay={true}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={widthWindow}
                            itemWidth={widthWindow}
                            renderItem={this._renderItem}
                            onSnapToItem = { index => this.setState({activeIndex:index}) }/>
                </View>
                <View style={loginPageStyle.loginScreenContainer}>
                          <View style={loginPageStyle.loginFormView}>
                              <Text style={[loginPageStyle.logoText,material.display1]}>Radio</Text>
                                  {/* <Icon name="ios-search" size={20} style={{padding:10}}></Icon> */}
                                  <Hoshi
                                    label={"Username"}
                                    borderColor={"#b76c94"}
                                    borderHeight={3}
                                    inputPadding={16}
                                    style={loginPageStyle.loginFormTextInput}
                                    onChangeText={this.userNameChange}
                                    backgroundColor={'#F9F7F6'}
                                  ></Hoshi>
                                  <Hoshi
                                    label={"Password"}
                                    borderHeight={3}
                                    inputPadding={16}
                                    style={loginPageStyle.loginFormTextInput}
                                    onChangeText={this.passwordChange}
                                    backgroundColor={'#F9F7F6'}
                                  ></Hoshi>
                                  <Button
                                      buttonStyle={[loginPageStyle.loginButton,{width:"90%"}]}
                                      color='$iconColor'
                                      onPress={ this.onLoginPress}
                                      title="Login"/>
                                  <Button 
                                      buttonStyle={{width:"90%",marginTop:6,marginLeft:20}}
                                      type="outline"
                                      onPress={() => this.ModalLogin.refs.modal1.open()}
                                      title="Forgot Password">
                                      </Button>
                           <ModalLogin ref={ref=>this.ModalLogin=ref}></ModalLogin>    
                           
                          </View>    
                  </View>  
            </SafeAreaView>
    )
  }

  

  async onLoginPress() {
    try {
      
      const {userName,password} = this.state.userData;
      if(userName===""||password===""){
        this.dropDownAlertRef.alertWithType('error','Required Fields',"Please Enter UserName And Password");
        return;
      }
      var body = JSON.stringify({
        userName: "2860122281",
        password: "123456"
       });
      let response = await axios.post("http://localhost:53094//api/userapi/Login",{
        userName: "2860122281",
        password: "123456"
       });
       
       this.dropDownAlertRef.alertWithType('error','Error',response);
       if(response.status===200){
         if(response.data.isError===true){
          this.dropDownAlertRef.alertWithType('error','Information Error',response.data.Errors.Message);
         }else{
            Actions.reset(homeTabs);
         }
       }else{
          this.dropDownAlertRef.alertWithType('error','Error Connection',"Connection to Server Lost");
       }
    } catch (error) {
      ToastAndroid.show(error,ToastAndroid.SHORT); 
    }
  }
}

const mapStateToProps = state =>{
  return {
    isFirstTime: state.initAppReducer.isFirstTime
  }
}
export default connect(mapStateToProps)(Login);
