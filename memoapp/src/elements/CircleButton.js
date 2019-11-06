import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Font } from 'expo';
import * as Font from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount () {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({fontLoaded:true});
  }
  render () {
    const { style,color } = this.props;
    let bgColor = '#e31676';
    let textColor = '#fff';
    if ( color === 'white' ) {
      bgColor = '#fff';
      textColor = '#e31676';
    }
    return (
      <View style={[styles.circleButton,style,{backgroundColor:bgColor}]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle,{color:textColor}]}>
            {'\uf303'}
          </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position:'absolute',
    bottom:32,
    right:32,
    width:48,
    height:48,
    borderRadius:24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:3,
  },
  circleButtonTitle: {
    fontSize:24,
    lineHeight:24,
    fontFamily:'FontAwesome',
  },
});

export default CircleButton;