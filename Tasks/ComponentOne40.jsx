import { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setText } from './store';

class ComponentOne40 extends Component{
  render(){
    return(
      <TextInput
        style={{borderWidth:1,padding:10}}
        value={this.props.text}
        onChangeText={this.props.setText}
        placeholder="Type here"
      />
    );
  }
}

const mapStateToProps=state=>({
  text:state.text.value,
});

export default connect(mapStateToProps,{setText})(ComponentOne40);