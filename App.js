import React,{Component} from 'react';
import Register from './src/components/root/Register';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Router,Scene,Stack} from 'react-native-router-flux';
import initialApp from './src/initialApp';
import Index from './src/components/root/Index';
import {initAppFlux,loginFlux} from './src/assets/constants';
import {Provider,connect} from 'react-redux';
import {persistor,store} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
              <Scene>
                  <Stack hideNavBar={true}>
                          <Scene key={loginFlux} component={Index} 
                                  hideNavBar={true}
                                  tabs={false}
                                  title="Login" 
                                  icon={TabIcon}
                                  size={30}
                                  iconName="home"
                                  back={false} initial></Scene>
                          <Scene key={initAppFlux} component={initialApp} 
                                  hideNavBar={true}
                                  tabs={false}
                                  title="Login" 
                                  icon={TabIcon}
                                  size={30}
                                  iconName="home"
                                  back={false} initial></Scene>
                  </Stack>
              
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