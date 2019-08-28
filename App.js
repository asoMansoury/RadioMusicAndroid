import React,{Component} from 'react';
import Register from './src/components/root/Register';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Router,Scene,Drawer,Tabs} from 'react-native-router-flux';
import initialApp from './src/initialApp';
import Index from './src/components/root/Index';
import {initAppFlux,IndexPageFlux,homeTabs,homeFlux,settingFlux,ROOT_TABS, RegisterFlux,loginFlux} from './src/assets/constants';
import {Provider,connect} from 'react-redux';
import {persistor,store} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from './src/components/DrawerLayout/Drawer';
import Home from './src/components/Pages/Home';
import Setting from './src/components/Pages/Setting';
import Login from './src/components/root/login';

EStyleSheet.build({
  $mainColor:'#FAFAFA',
  $iconColor:'#FFB300'
})

export default class App extends Component{
  constructor(props){
    super(props);
}

  renderLoading  = ()=>{
    <View>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  }

  
  render(){
    const RouterWithRedux = connect()(Router);
    return(
      <Provider store = {store}>
        <PersistGate persistor={persistor} loading={null}>
            <RouterWithRedux >
              <Scene key="main">
                          <Scene key={initAppFlux} component={initialApp} 
                                  hideNavBar={true}
                                  tabs={false}
                                  title="Login" 
                                  icon={TabIcon}
                                  size={30}
                                  iconName="home"
                                  back={false} initial></Scene>
                          <Scene key={IndexPageFlux} component={Index} 
                                  hideNavBar={true}
                                  tabs={false}
                                  title="Login" 
                                  icon={TabIcon}
                                  size={30}
                                  iconName="home"
                                  back={false}></Scene>
                        <Scene  key="indexRootPage">
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
                        </Scene>
                        <Drawer key={homeTabs}
                                hideNavBar={true}
                                hideTabBar={true}
                                contentComponent={DrawerLayout}>
                                  <Tabs tabBarPosition="bottom" tabs={true} swipeEnabled={true}>
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
              </Scene>
            </RouterWithRedux>
         </PersistGate>
      </Provider>
    )
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