import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {loginFlux,RegisterFlux,homeFlux,settingFlux,homeTabs,ROOT_TABS} from './../../assets/constants';
import Register from './Register';
import {Scene ,Router, Stack,Tabs} from 'react-native-router-flux';
import Login from './login';
import Home from './../Pages/Home';
import Setting from './../Pages/Setting';
import DrawerLayout from './../DrawerLayout/Drawer';
import {Drawer} from 'react-native';

export default class Index extends Component{
        render(){    
                return (
                    <Router>
                            <Stack >
                                <Tabs key={ROOT_TABS} tabs={true} showLabel={false} showIcon={true} swipeEnabled={true} 
                                    tabBarPosition="top"  hideNavBar tabBarStyle={{backgroundColor:'$mainColor'}}> 
                                        <Scene key={loginFlux} component={Login} 
                                            hideNavBar={true}
                                            
                                            title="Login" 
                                            icon={TabIcon}
                                            size={30}
                                            iconName="home"
                                            back={false} initial></Scene>
                                        <Scene key={RegisterFlux} 
                                            component={Register} 
                                            hideNavBar={true}
                                            icon={TabIcon}
                                            size={30}
                                            iconName="home"
                                            back={false}></Scene>
                            </Tabs>
                        <Drawer key={homeTabs}
                            hideNavBar={true}
                            hideTabBar={true}
                            contentComponent={DrawerLayout}>
                                <Tabs  tabs={true} swipeEnabled={true} tabBarPosition="bottom" hideNavBar={true}>
                                        <Scene key={homeFlux}
                                                    title="Home"
                                                    icon={TabIcon}
                                                    component={Home}
                                                    size={30}
                                                    iconName="home"
                                                    back={false} initial></Scene>
                                        <Scene key={settingFlux}
                                                    title="Setting"
                                                    icon={TabIcon}
                                                    component={Setting}
                                                    size={30}
                                                    iconName="home"
                                                    back={false}></Scene>
                                </Tabs>
                         </Drawer>
                        </Stack>
                    </Router>
                    );
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