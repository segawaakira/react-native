import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton icon="plus" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6'
  },
  memoAddButton: {
    position:'absolute',
    bottom:32,
    right:32,
    width:48,
    height:48,
    backgroundColor:'#e31676',
    borderRadius:24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:3,
  },
  memoAddButtonTitle: {
    fontSize:24,
    lineHeight:24,
    color:'#fff',
  },
});

export default MemoListScreen;