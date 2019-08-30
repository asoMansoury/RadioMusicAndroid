import React,{Component} from 'react';
import IconComponent from './IconComponent';
import {Dimensions,View} from 'react-native'
import Register from './Register';
import Login from './login';
import {TabView,SceneMap, TabBar} from 'react-native-tab-view';
import {Router,Scene,Drawer,Tabs} from 'react-native-router-flux';
export default class Index extends Component{
    state = {
        index: 0,
        routes: [
          { key: 'signIn', title: 'SignIn' },
          { key: 'signUp', title: 'SignUp' },
        ],
      };

        render(){    
                return (
                      <TabView navigationState={this.state}
                            swipeEnabled={false}
                            tabBarPosition="top"
                            renderScene={SceneMap({
                                signIn:Login,
                                signUp:Register
                            })}
                            renderTabBar={props=>
                                this._renderTabBar(props)
                            }
                            onIndexChange={index => this.setState({ index })}
                            initialLayout={{ width: Dimensions.get('window').width }}></TabView>
                    );
                    
        } 
        
        _renderTabBar(props){
          return <TabBar {...props}
                      indicatorStyle={{ backgroundColor: 'white' }}
                      style={{ backgroundColor: 'pink' }}
                      renderLabel=""
                      renderIcon={({route})=>{
                          if(route.key==="signUp"){
                              return <IconComponent iconName="circle"></IconComponent>
                          }else{
                              return <IconComponent iconName="circle"></IconComponent>
                          }
                      }}>
                   </TabBar>
        }
  }

