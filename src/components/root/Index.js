import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native'
import Register from './Register';
import Login from './login';
import {TabView,SceneMap, TabBar} from 'react-native-tab-view';

export default class Index extends Component{
    state = {
        index: 0,
        routes: [
          { key: 'signIn', title: 'SignIn',icon:<TabIcon iconName="md-home" selected={true}></TabIcon> },
          { key: 'signUp', title: 'SignUp' },
        ],
      };

        render(){    
                return (
                    <TabView navigationState={this.state}
                    swipeEnabled={true}
                    renderScene={SceneMap({
                        signIn:Login,
                        signUp:Register
                    })}
                    renderTabBar={props=>
                        <TabBar {...props}
                                indicatorStyle={{ backgroundColor: 'white' }}
                                style={{ backgroundColor: 'pink' }}
                                renderLabel=""
                                renderIcon={({route})=>{
                                    if(route.key==="signUp"){
                                        return <TabIcon iconName="circle"></TabIcon>
                                    }else{
                                        return <TabIcon iconName="circle"></TabIcon>
                                    }
                                }}
                        ></TabBar>
                    }
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}></TabView>
                    );
        } 
        
        _renderTabBar(){

        }
  }


class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
          <Icon style={[{color: color}]} name={this.props.iconName || "circle"} size={30}/>
  
      );
    }
  }