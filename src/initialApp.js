import React,{Component} from 'react';
import  {View,Text,StyleSheet,Image} from 'react-native';
import Index from './components/root/Index';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux';
import {initAppFlux,RegisterFlux,IndexPageFlux} from './assets/constants';
import {initialAppStyle} from './assets/styles/index';
import {connect} from 'react-redux';
import {setIsFirstTime} from './redux/actions';
import Login from './components/root/login';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    Image: require('./assets/images/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    Image: require('./assets/images/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    Image: require('./assets/images/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

class InitialApp extends Component{
    constructor(props){
      super(props);
      this._renderItem  = this._renderItem.bind(this);
      this._onDone = this._onDone .bind(this);
}
    _renderItem = ({ item }) => {
      return (
        <View style={initialAppStyle.slide}>
          <Text style={initialAppStyle.title}>{item.title}</Text>
          <Image  source={item.Image} style={initialAppStyle.ImageStyle} />
          <Text style={initialAppStyle.text}>{item.text}</Text>
        </View>
      );
    }
    _onDone = () => {
      this.props.setIsFirstTime(false);
      return Actions.replace(IndexPageFlux);
    }

  render(){
    if(this.props.isFirstTime===true)
        return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={()=>this._onDone()} />;
    else
        return <Index></Index>
  }
}

const mapStateToProps = (state)=>{
  return {
    isFirstTime: state.initAppReducer.isFirstTime
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setIsFirstTime:isFirstTime =>{
      dispatch(setIsFirstTime(isFirstTime))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InitialApp);
