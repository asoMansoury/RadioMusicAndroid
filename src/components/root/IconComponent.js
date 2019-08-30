import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
          <Icon style={[{color: color}]} name={this.props.iconName || "circle"} size={30}/>
  
      );
    }
  }