import Modal from 'react-native-modalbox';
import React, {Component} from 'react';
import {loginPageStyle} from './../../assets/styles/index';
import {Button} from 'react-native-elements';
import {View,StyleSheet,TextInput,Text} from 'react-native';
import {material} from 'react-native-typography';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {Hoshi} from 'react-native-textinput-effects';

export default class ModalLogin extends Component{
  constructor(props){
    super(props);

    this.state ={
      isVisibleTxtEmail:true
    }
    this.resetPasswordFunc = this.resetPasswordFunc.bind(this);
  }

  resetPasswordFunc(){
    this.setState({
      isVisibleTxtEmail:false
    })
  }
    render(){
        return(
            <Modal
             onClosed={()=>this.setState({
               isVisibleTxtEmail:true
             })}
             entry="top" backdropPressToClose={true} 
             ref={"modal1"} style={[styles.modal, styles.modal4]} 
             position={"center"}>
                <View style={{flex:1}}>
                        <Text style={[loginPageStyle.logoText,material.display1]}>Reset Password</Text>
                            {/* <Icon name="ios-search" size={20} style={{padding:10}}></Icon> */}
                            <Hoshi
                                    ref={"txtEmail"}
                                    label={"Email"}
                                    borderHeight={3}
                                    inputPadding={16}
                                    onChangeText={this.passwordChange}
                                    backgroundColor={'#F9F7F6'}
                                    style={[{display:this.state.isVisibleTxtEmail?'flex':'none'}]}
                                  ></Hoshi>
                            <Hoshi
                                    ref={"txtNewPassword"}
                                    label={"New Password"}
                                    borderHeight={3}
                                    inputPadding={16}
                                    onChangeText={this.passwordChange}
                                    backgroundColor={'#F9F7F6'}
                                    style={[{display:!this.state.isVisibleTxtEmail?'flex':'none'}]}
                                    
                                  ></Hoshi>
                            
                            <Hoshi
                                    ref={"txtNewConfirmPassword"}
                                    label={"Confirm Password"}
                                    borderHeight={3}
                                    inputPadding={16}
                                    onChangeText={this.passwordChange}
                                    backgroundColor={'#F9F7F6'}
                                    style={[{display:!this.state.isVisibleTxtEmail?'flex':'none'}]}
                                  ></Hoshi>
                                  <KeyboardSpacer></KeyboardSpacer>
                            <Button
                                buttonStyle={[loginPageStyle.loginButton,{width:"90%"},{display:this.state.isVisibleTxtEmail?'flex':'none'}]}
                                color='$iconColor'
                                onPress={() => this.resetPasswordFunc()}
                                title="Send Code"
                                />
                            <Button
                                buttonStyle={[loginPageStyle.loginButton,{width:"90%"},{display:!this.state.isVisibleTxtEmail?'flex':'none'}]}
                                color='$iconColor'
                                onPress={() => this.resetPasswordFunc()}
                                title="Confirm"
                                />
                            <Button 
                                buttonStyle={{width:"90%",marginTop:6,marginLeft:20}}
                                type="outline"
                                onPress={()=>this.refs.modal1.close()}
                                title="Close">
                                </Button>
                            
                </View>
            </Modal>
        )
    }

    onClose() {
      alert('Modal just closed');
    }
  
    onOpen() {
      alert('Modal just opened');
    }
  
    onClosingState(state) {
      alert('the open/close of the swipeToClose just changed');
    }
}


const styles = StyleSheet.create({

    wrapper: {
      paddingTop: 50,
      flex: 1
    },
  
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    modal2: {
      height: 230,
      backgroundColor: "#3B5998"
    },
  
    modal3: {
      height: 300,
      width: 300
    },
  
    modal4: {
      height: "90%"
    },
  
    btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10
    },
  
    btnModal: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 50,
      height: 50,
      backgroundColor: "transparent"
    },
  
    text: {
      color: "black",
      fontSize: 22
    }
  
  });
  

