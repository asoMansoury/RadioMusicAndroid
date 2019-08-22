import React,{Component} from 'react';
import {Text, View, TextInput, SafeAreaView,Image,Dimensions,Platform,Button as ButtonNative} from 'react-native';
import {loginPageStyle} from './../../assets/styles/index';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import {material} from 'react-native-typography';
import {Button} from 'react-native-elements';
import ModalLogin from './ModalLogin';
import { Actions} from 'react-native-router-flux';

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
      GoogleSignin.configure({
        //It is mandatory to call this method before attempting to call signIn()
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        // Repleace with your webClientId generated from Firebase console
        webClientId:
          '888840726542-ci1sp77ovv81oo2n9l15jjeqm3451v8v.apps.googleusercontent.com',
      });

      this._renderItem = this._renderItem.bind(this);

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
    const heightWindow = Platform.OS ==='ios' ?
                   Dimensions.get('window').height :
                   require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');
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
                <ModalLogin ref={ref=>this.ModalLogin=ref}></ModalLogin>
                          <View style={loginPageStyle.loginFormView}>
                              <Text style={[loginPageStyle.logoText,material.display1]}>Radio</Text>
                                  {/* <Icon name="ios-search" size={20} style={{padding:10}}></Icon> */}
                                  <TextInput placeholder="Username" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} />
                                  <TextInput placeholder="Password" placeholderColor="#e0e0e0" style={loginPageStyle.loginFormTextInput} secureTextEntry={true}/>
                                  <Button
                                  buttonStyle={[loginPageStyle.loginButton,{width:"90%"}]}
                                  color='$iconColor'
                                  onPress={() => this.onLoginPress()}
                                  title="Login"
                                  />
                                  <Button 
                                  buttonStyle={{width:"90%",marginTop:6,marginLeft:20}}
                                  type="outline"
                                  onPress={() => this.ModalLogin.refs.modal1.open()}
                                  title="Forgot Password">
                                  </Button>
                                  {/* <GoogleSigninButton
                                      style={{ width: 312, height: 48 }}
                                      size={GoogleSigninButton.Size.Wide}
                                      color={GoogleSigninButton.Color.Light}
                                      onPress={this._signIn}
                                      /> */}
                                  
                          </View>
                  </View>
                  
            </SafeAreaView>
    )
  }

  

  onLoginPress() {
    Actions.reset("HOME_TABS");
  }

  _signIn = async () => {
      //Prompts a modal to let the user sign in into your application.
      try {
        await GoogleSignin.hasPlayServices({
          //Check if device has Google Play Services installed.
          //Always resolves to true on iOS.
          showPlayServicesUpdateDialog: true,
        });
        const userInfo = await GoogleSignin.signIn();
        console.log('User Info --> ', userInfo);
        this.setState({ userInfo: userInfo });
      } catch (error) {
        console.log('Message', error.message);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('User Cancelled the Login Flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('Signing In');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Play Services Not Available or Outdated');
        } else {
          console.log('Some Other Error Happened',error);
        }
      }
    };

    _getCurrentUser = async () => {
      //May be called eg. in the componentDidMount of your main component.
      //This method returns the current user
      //if they already signed in and null otherwise.
      try {
        const userInfo = await GoogleSignin.signInSilently();
        this.setState({ userInfo });
      } catch (error) {
        console.error(error);
      }
    };
    _signOut = async () => {
      //Remove user session from the device.
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null }); // Remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }
    };

}

 class LoginExtended extends Component{
}

const mapStateToProps = state =>{
  return {
    isFirstTime: state.initAppReducer.isFirstTime
  }
}
export default connect(mapStateToProps)(Login);
