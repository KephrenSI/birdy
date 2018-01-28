import React, {Component} from 'React';
import {ScrollView, Text, TouchableWithoutFeedback, View, LayoutAnimation, Image} from 'react-native';
import {connect} from 'react-redux';

import * as actions from '../actions';


class ListItem extends Component{

  componentWillUpdate(){
      LayoutAnimation.spring();
  }

  renderContent(){
      const{selectedLibraryId} =  this.props;
      const {id, description} = this.props.content.item;

      if (id === selectedLibraryId) {
          return (
              <View>
                  <Image
                      style={style.imageStyle}
                      source={{uri: this.props.content.item.photoUrl}}
                  />
                  <Text>
                    {description}
                  </Text>
              </View>
          )
      }
  }

  render(){
    return(
        <TouchableWithoutFeedback
            onPress={()=>this.props.selectLibrary(this.props.content.item.id)}>
            <View>
                <Text style={style.listItemStyle}>
                    {this.props.content.item.nom}
                </Text>
                    {this.renderContent()}
            </View>
        </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = state =>{
  return{
    selectedLibraryId: state.selectedLibraryId,
  }
}

export default connect(mapStateToProps, actions)(ListItem);

const style={
    listItemStyle:{
    fontSize:28,
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#f3f3f3',
    borderWidth:0.25,
    borderColor:'#000000',
  },
  imageStyle:{
      height:300,
      flex:1,
      width:null,
  }
}